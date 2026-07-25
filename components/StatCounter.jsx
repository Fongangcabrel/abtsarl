'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Compteur qui s'incrémente une fois la section entrée à l'écran.
 *
 * `value` est la cible numérique, `suffix`/`prefix` l'habillage (« + », « % »…).
 * L'animation utilise requestAnimationFrame avec une courbe easeOut pour finir
 * en douceur. En mouvement réduit, la valeur finale s'affiche directement.
 */
export default function StatCounter({ value, suffix = '', prefix = '', duration = 1800 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      return;
    }

    let raf;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          setDisplay(Math.round(eased * value));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  // Espace fine insécable comme séparateur de milliers (format FR).
  const formatted = display.toLocaleString('fr-FR');

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
