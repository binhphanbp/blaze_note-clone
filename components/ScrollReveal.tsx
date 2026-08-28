'use client';

import React from 'react';
import { useScrollReveal } from '@/lib/useScrollAnimation';

interface ScrollRevealProps {
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  y?: number;
  x?: number;
  minOpacity?: number;
  scaleFrom?: number;
  start?: number;
  end?: number;
  damp?: number;
}

export default function ScrollReveal({
  as: Component = 'div',
  className = '',
  style = {},
  children,
  y = 28,
  x = 0,
  minOpacity = 0.35,
  scaleFrom = 0.985,
  start = 0.95,
  end = 0.38,
  damp = 0.12
}: ScrollRevealProps) {
  const ref = useScrollReveal({
    y,
    x,
    minOpacity,
    scaleFrom,
    start,
    end,
    damp
  });

  return (
    <Component
      ref={ref as any}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}
