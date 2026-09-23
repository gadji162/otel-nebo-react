import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Reveal({ as = 'div', className = '', children, onClick }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const props = {
    ref,
    className: ['reveal', visible && 'is-visible', className].filter(Boolean).join(' '),
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return createElement(as, props, children);
}
