'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'Qui sommes-nous' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // La barre se densifie dès que la page a défilé.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Échap ferme le menu mobile, et on verrouille le défilement tant
  // qu'il est ouvert.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-navy-100 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between sm:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="African Business Trade Sarl"
            width={40}
            height={40}
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[18deg] sm:h-10 sm:w-10"
            priority
          />
          <span className="font-display text-base font-semibold leading-tight text-navy-900 sm:text-lg">
            ABT
            <span className="block font-body text-[10px] font-normal tracking-wide text-ink-500 sm:text-xs">
              African Business Trade
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`group relative py-1 font-body text-sm font-medium transition-colors ${
                  active ? 'text-navy-900' : 'text-ink-700 hover:text-navy-800'
                }`}
              >
                {l.label}
                {/* soulignement doré : plein sur la page courante, il se
                    déploie depuis la gauche au survol des autres liens */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gold-500 transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-navy-800 px-5 py-2.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-md md:inline-flex"
        >
          Demander un devis
        </Link>

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy-100 transition-colors hover:bg-sand-50 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-navy-900 transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-navy-900 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-navy-900 transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {/* Le menu reste monté pour pouvoir s'ouvrir et se fermer en glissant. */}
      <div
        className={`overflow-hidden border-navy-100 bg-white transition-all duration-300 ease-out md:hidden ${
          open ? 'max-h-96 border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-px mx-auto flex max-w-6xl flex-col py-3">
          {links.map((l, i) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                className={`rounded-lg px-2 py-3 font-body text-base font-medium transition-all duration-300 ${
                  open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
                } ${
                  active
                    ? 'bg-sand-50 text-navy-900'
                    : 'text-ink-700 hover:bg-sand-50 hover:text-navy-800'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${80 + links.length * 45}ms` : '0ms' }}
            className={`mt-2 rounded-full bg-navy-800 px-5 py-3 text-center font-body text-sm font-semibold text-white transition-all duration-300 ${
              open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
            }`}
          >
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
