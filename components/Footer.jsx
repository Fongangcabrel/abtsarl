import Link from 'next/link';
import Image from 'next/image';
import RouteMap from './RouteMap';

const services = [
  { label: 'Douane, Transit & Import-Export', href: '/services#douane' },
  { label: 'Transport National & Hinterland', href: '/services#transport' },
  { label: 'Manutentions', href: '/services#manutention' },
  { label: 'Location Entrepôts', href: '/services#entrepots' },
];

const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Qui sommes-nous', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <RouteMap
        variant="light"
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.06]"
      />
      <div className="container-px relative mx-auto max-w-6xl py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-base font-semibold">ABT</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/60">
              African Business Trade Sarl — transport &amp; logistique à Kribi et Douala.
            </p>
            <p className="mt-2 font-display text-sm italic text-gold-400">
              L&rsquo;intégrité dans les affaires
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Nos services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="font-body text-sm text-white/60 hover:text-gold-400">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Navigation
            </h3>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="font-body text-sm text-white/60 hover:text-gold-400">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </h3>
            <ul className="space-y-3 font-mono text-sm text-white/60">
              <li>BP 12090, Douala</li>
              <li>
                <a href="tel:+237696404963" className="hover:text-gold-400">
                  +237 696 404 963
                </a>
              </li>
              <li>
                <a href="tel:+237670870649" className="hover:text-gold-400">
                  +237 670 870 649
                </a>
              </li>
              <li>
                <a
                  href="mailto:africanbusinesstrade@gmail.com"
                  className="hover:text-gold-400"
                >
                  africanbusinesstrade@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 font-body text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} African Business Trade Sarl. Tous droits réservés.</p>
            <p>Kribi &amp; Douala · Cameroun</p>
          </div>

          <div className="mt-5 flex flex-col items-start gap-3 border-t border-white/5 pt-5 font-body text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Developed by <span className="font-medium text-white/70">Njoufack Fongang Cabrel</span>
              {' · '}
              <a
                href="https://hellootech.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-400 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:text-gold-300"
              >
                HellooTech
              </a>
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] tracking-wide text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Open to work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
