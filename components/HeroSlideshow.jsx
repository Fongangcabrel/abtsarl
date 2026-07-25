'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Fond de bandeau cinématique : les photos s'enchaînent en fondu, chacune
 * animée d'un lent travelling (effet « Ken Burns ») pour donner l'impression
 * d'un film plutôt que d'une image fixe.
 *
 * - La première image est prioritaire (LCP) ; les suivantes se chargent en
 *   différé, une fois la page interactive.
 * - prefers-reduced-motion : on fige sur la première image, aucun cycle.
 */
export default function HeroSlideshow({ images = [], interval = 5000 }) {
  const [active, setActive] = useState(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    setEnabled(true);
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, i) => (
        <div
          key={img.src}
          aria-hidden={i === active ? undefined : true}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`h-full w-full ${enabled && i === active ? 'ken-burns' : ''}`}>
            <Image
              src={img.src}
              alt={img.alt || ''}
              fill
              priority={i === 0}
              quality={80}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
