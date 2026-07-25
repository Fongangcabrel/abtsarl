'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Révèle son contenu quand il entre dans le viewport.
 *
 * `as` permet de garder la balise sémantique attendue (section, div, li…).
 * `delay` sert aux apparitions en cascade d'une grille de cartes.
 * L'observateur se déconnecte après le premier passage : l'animation ne
 * rejoue pas quand on remonte la page.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sans IntersectionObserver, on affiche directement plutôt que de
    // laisser le contenu invisible.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    // Un bloc déjà à l'écran au chargement ne doit pas attendre un scroll.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
