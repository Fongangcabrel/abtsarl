'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'Qui sommes-nous' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="African Business Trade Sarl"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10"
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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-ink-700 transition-colors hover:text-navy-800"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-navy-800 px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-navy-700 md:inline-flex"
        >
          Demander un devis
        </Link>

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-navy-900 transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-navy-900 transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-navy-900 transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white md:hidden">
          <nav className="container-px mx-auto flex max-w-6xl flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-body text-base font-medium text-ink-700 hover:bg-sand-50 hover:text-navy-800"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy-800 px-5 py-3 text-center font-body text-sm font-semibold text-white"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
