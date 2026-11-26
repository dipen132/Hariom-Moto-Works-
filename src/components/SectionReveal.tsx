import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = '',
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(node, {
        y: 26,
        opacity: 0,
        duration: 0.75,
        delay,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: node,
          start: 'top 90%',
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={`will-change-[opacity,transform] ${className}`}>
      {children}
    </div>
  );
}
