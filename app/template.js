'use client';

// template.js est re-monté à chaque navigation (contrairement à layout.js) :
// c'est le point d'accroche naturel pour un fondu d'entrée entre les pages.
// La classe `rise-in` neutralisée par prefers-reduced-motion s'occupe du reste.
export default function Template({ children }) {
  return <div className="rise-in">{children}</div>;
}
