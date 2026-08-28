'use client';

import { useEffect, useRef, useState } from 'react';

// Hermite smoothstep easing curve matching note.blaze.vn
function smoothstep(e: number) {
  const n = Math.max(0, Math.min(1, e));
  return n * n * (3 - 2 * n);
}

function computeProgress(rect: DOMRect, vh: number, start = 0.95, end = 0.35) {
  const startPx = vh * start;
  const endPx = vh * end;
  if (Math.abs(startPx - endPx) < 1) return 1;
  const raw = (startPx - rect.top) / (startPx - endPx);
  return Math.max(0, Math.min(1, raw));
}

interface RevealOptions {
  start?: number; // viewport percentage when effect starts (e.g. 0.95 = 95% from top)
  end?: number;   // viewport percentage when effect completes (e.g. 0.35 = 35% from top)
  damp?: number;  // damping factor (e.g. 0.12 - 0.16 for smooth inertia)
  y?: number;     // initial translateY offset (px)
  x?: number;     // initial translateX offset (px)
  minOpacity?: number; // initial opacity (e.g. 0.25 - 0.5)
  scaleFrom?: number;  // initial scale (e.g. 0.985)
  stagger?: number;
  staggerSpan?: number;
}

const defaultOptions: Required<RevealOptions> = {
  start: 0.95,
  end: 0.38,
  damp: 0.12,
  y: 28,
  x: 0,
  minOpacity: 0.3,
  scaleFrom: 0.985,
  stagger: 0,
  staggerSpan: 0.5
};

interface ElementConfig extends Required<RevealOptions> {
  el: HTMLElement;
  _cur: number;
  _sig: string;
}

const observedElements = new Set<ElementConfig>();
let rafId = 0;
let isRunning = false;
let isListenerActive = false;

function applyTransform(cfg: ElementConfig, progress: number) {
  const eased = smoothstep(progress);
  const transY = (1 - eased) * cfg.y;
  const transX = (1 - eased) * cfg.x;
  const scale = cfg.scaleFrom + (1 - cfg.scaleFrom) * eased;
  const opacity = cfg.minOpacity + (1 - cfg.minOpacity) * eased;

  const sig = `${transY.toFixed(2)}|${transX.toFixed(2)}|${scale.toFixed(4)}|${opacity.toFixed(3)}`;
  if (sig !== cfg._sig) {
    cfg._sig = sig;
    cfg.el.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    cfg.el.style.opacity = opacity.toFixed(3);
  }
}

function updateFrame() {
  rafId = 0;
  if (observedElements.size === 0) {
    isRunning = false;
    return;
  }

  const vh = window.innerHeight || 1;
  let hasActiveTransitions = false;

  for (const cfg of Array.from(observedElements)) {
    const rect = cfg.el.getBoundingClientRect();

    // Out of view above
    if (rect.bottom < -80 && cfg._cur > 0.995) {
      if (cfg._cur !== 1) {
        cfg._cur = 1;
        applyTransform(cfg, 1);
      }
      continue;
    }

    // Out of view below
    if (rect.top > vh + 120 && cfg._cur < 0.005) {
      if (cfg._cur !== 0) {
        cfg._cur = 0;
        applyTransform(cfg, 0);
      }
      continue;
    }

    const targetProgress = computeProgress(rect, vh, cfg.start, cfg.end);
    const damp = cfg.damp;
    const nextVal = cfg._cur + (targetProgress - cfg._cur) * damp;

    cfg._cur = Math.abs(targetProgress - nextVal) < 0.0015 ? targetProgress : nextVal;
    applyTransform(cfg, cfg._cur);

    if (Math.abs(targetProgress - cfg._cur) >= 0.0015) {
      hasActiveTransitions = true;
    }
  }

  if (hasActiveTransitions) {
    rafId = requestAnimationFrame(updateFrame);
  } else {
    isRunning = false;
  }
}

function triggerUpdate() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!isRunning) {
    isRunning = true;
    rafId = requestAnimationFrame(updateFrame);
  }
}

function startGlobalListeners() {
  if (isListenerActive || typeof window === 'undefined') return;
  isListenerActive = true;
  window.addEventListener('scroll', triggerUpdate, { passive: true });
  window.addEventListener('resize', triggerUpdate, { passive: true });
}

function stopGlobalListeners() {
  if (observedElements.size > 0 || !isListenerActive) return;
  window.removeEventListener('scroll', triggerUpdate);
  window.removeEventListener('resize', triggerUpdate);
  isListenerActive = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  isRunning = false;
}

// Hook to attach scroll reveal to an element ref
export function useScrollReveal(options: RevealOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el || typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const cfg: ElementConfig = {
      el,
      start: optionsRef.current.start ?? defaultOptions.start,
      end: optionsRef.current.end ?? defaultOptions.end,
      damp: optionsRef.current.damp ?? defaultOptions.damp,
      y: optionsRef.current.y ?? defaultOptions.y,
      x: optionsRef.current.x ?? defaultOptions.x,
      minOpacity: optionsRef.current.minOpacity ?? defaultOptions.minOpacity,
      scaleFrom: optionsRef.current.scaleFrom ?? defaultOptions.scaleFrom,
      stagger: optionsRef.current.stagger ?? defaultOptions.stagger,
      staggerSpan: optionsRef.current.staggerSpan ?? defaultOptions.staggerSpan,
      _cur: 0,
      _sig: ''
    };

    el.style.willChange = 'transform, opacity';
    observedElements.add(cfg);
    startGlobalListeners();

    const vh = window.innerHeight || 1;
    cfg._cur = computeProgress(el.getBoundingClientRect(), vh, cfg.start, cfg.end);
    applyTransform(cfg, cfg._cur);
    triggerUpdate();

    return () => {
      observedElements.delete(cfg);
      el.style.willChange = '';
      stopGlobalListeners();
    };
  }, []);

  return elementRef;
}

// Hook for gentle parallax offset
export function useParallax(speed = 20) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let currentY = 0;
    let targetY = 0;
    let raf = 0;
    let active = true;

    const loop = () => {
      raf = 0;
      if (!active) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
      targetY = progress * speed;

      currentY += (targetY - currentY) * 0.12;
      if (Math.abs(targetY - currentY) < 0.05) currentY = targetY;

      el.style.transform = `translate3d(0, ${currentY.toFixed(2)}px, 0)`;

      if (Math.abs(targetY - currentY) >= 0.05) {
        raf = requestAnimationFrame(loop);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    el.style.willChange = 'transform';
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      active = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
      el.style.willChange = '';
      el.style.transform = '';
    };
  }, [speed]);

  return ref;
}
