'use client';

import { useEffect, useRef, useState } from 'react';

// Hermite smoothstep curve
export function smoothstep(e: number) {
  const n = Math.max(0, Math.min(1, e));
  return n * n * (3 - 2 * n);
}

// Color interpolation from light stone to dark stone (matching note.blaze.vn cw)
export function interpolateScrollColor(
  e: number,
  startRgb = [178, 172, 168],
  endRgb = [28, 25, 23]
) {
  const clamped = Math.max(0, Math.min(1, e));
  const r = Math.round(startRgb[0] + (endRgb[0] - startRgb[0]) * clamped);
  const g = Math.round(startRgb[1] + (endRgb[1] - startRgb[1]) * clamped);
  const b = Math.round(startRgb[2] + (endRgb[2] - startRgb[2]) * clamped);
  return `rgb(${r}, ${g}, ${b})`;
}

export function computeScrollProgress(rect: DOMRect, vh: number, start = 0.95, end = 0.35) {
  const startPx = vh * start;
  const endPx = vh * end;
  if (Math.abs(startPx - endPx) < 1) return 1;
  const raw = (startPx - rect.top) / (startPx - endPx);
  return Math.max(0, Math.min(1, raw));
}

export interface TransformOptions {
  y?: number;
  x?: number;
  minOpacity?: number;
  scaleFrom?: number;
}

export function computeTransformStyle(progress: number, opts: TransformOptions = {}) {
  const y = opts.y ?? 28;
  const x = opts.x ?? 0;
  const minOpacity = opts.minOpacity ?? 0.28;
  const scaleFrom = opts.scaleFrom ?? 0.985;
  const eased = smoothstep(progress);

  return {
    opacity: Number((minOpacity + (1 - minOpacity) * eased).toFixed(3)),
    transform: `translate3d(${((1 - eased) * x).toFixed(2)}px, ${((1 - eased) * y).toFixed(2)}px, 0) scale(${(
      scaleFrom +
      (1 - scaleFrom) * eased
    ).toFixed(4)})`,
    willChange: 'transform, opacity'
  };
}

// Hook to track smooth damped scroll progress of a container
export function useScrollProgress(options: { start?: number; end?: number; damp?: number } = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(1);

  const start = options.start ?? 0.95;
  const end = options.end ?? 0.35;
  const damp = options.damp ?? 0.14;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let cur = 0;
    let rafId = 0;
    let isActive = true;

    const update = () => {
      rafId = 0;
      if (!isActive) return;

      const vh = window.innerHeight || 1;
      const target = computeScrollProgress(el.getBoundingClientRect(), vh, start, end);
      cur += (target - cur) * damp;

      if (Math.abs(target - cur) < 0.0015) cur = target;
      setProgress(cur);

      if (Math.abs(target - cur) >= 0.0015) {
        rafId = requestAnimationFrame(update);
      }
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    cur = computeScrollProgress(el.getBoundingClientRect(), window.innerHeight || 1, start, end);
    setProgress(cur);
    onScroll();

    return () => {
      isActive = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [start, end, damp]);

  return [ref, progress] as const;
}

// Hook for multi-item staggered wave animation
export function useStagger(
  count: number,
  staggerOffset = 0.11,
  span = 0.5,
  options: { start?: number; end?: number; damp?: number } = {}
) {
  const [ref, overallProgress] = useScrollProgress(options);

  const itemProgressList = Array.from({ length: count }, (_, idx) => {
    const raw = Math.max(0, Math.min(1, (overallProgress - idx * staggerOffset) / span));
    return smoothstep(raw);
  });

  return [ref, itemProgressList, overallProgress] as const;
}

// Hook for parallax
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
      const p = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
      targetY = p * speed;

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

// General ScrollReveal hook
export function useScrollReveal(options: {
  start?: number;
  end?: number;
  damp?: number;
  y?: number;
  x?: number;
  minOpacity?: number;
  scaleFrom?: number;
} = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const start = options.start ?? 0.95;
  const end = options.end ?? 0.38;
  const damp = options.damp ?? 0.14;
  const y = options.y ?? 28;
  const x = options.x ?? 0;
  const minOpacity = options.minOpacity ?? 0.3;
  const scaleFrom = options.scaleFrom ?? 0.985;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    let cur = 0;
    let rafId = 0;
    let isActive = true;

    const apply = (p: number) => {
      const eased = smoothstep(p);
      const transY = (1 - eased) * y;
      const transX = (1 - eased) * x;
      const scale = scaleFrom + (1 - scaleFrom) * eased;
      const op = minOpacity + (1 - minOpacity) * eased;

      el.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
      el.style.opacity = op.toFixed(3);
    };

    const update = () => {
      rafId = 0;
      if (!isActive) return;

      const vh = window.innerHeight || 1;
      const target = computeScrollProgress(el.getBoundingClientRect(), vh, start, end);
      cur += (target - cur) * damp;

      if (Math.abs(target - cur) < 0.0015) cur = target;
      apply(cur);

      if (Math.abs(target - cur) >= 0.0015) {
        rafId = requestAnimationFrame(update);
      }
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    el.style.willChange = 'transform, opacity';
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    cur = computeScrollProgress(el.getBoundingClientRect(), window.innerHeight || 1, start, end);
    apply(cur);
    onScroll();

    return () => {
      isActive = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      el.style.willChange = '';
    };
  }, [start, end, damp, y, x, minOpacity, scaleFrom]);

  return ref;
}
