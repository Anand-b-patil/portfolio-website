import { useEffect, useRef, useState } from 'react';

export default function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          // keep it visible once seen
          observer.unobserve(entry.target);
        }
      });
    }, options || { threshold: 0.15 });

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref.current]);

  return [ref, inView] as const;
}
