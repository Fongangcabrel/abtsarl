import Image from 'next/image';
import Reveal from './Reveal';

// Logos réels fournis par ABT. `status` reflète la situation réelle :
//  - 'acquis'   : agrément/certification effectivement détenu
//  - 'en-cours' : démarche engagée, pas encore obtenue
// ⚠️ Ne jamais passer AEO ou Qualité en 'acquis' tant qu'ils ne sont pas
// réellement obtenus — ce serait une fausse déclaration de certification.
const certs = [
  {
    src: '/certifications/mintrans.png',
    name: 'Ministère des Transports',
    full: 'Agrément — Cameroun',
    status: 'acquis',
  },
  {
    src: '/certifications/aeo.png',
    name: 'AEO',
    full: 'Opérateur Économique Agréé',
    status: 'en-cours',
  },
  {
    src: '/certifications/q.png',
    name: 'Certification Qualité',
    full: 'Normes de service',
    status: 'en-cours',
  },
];

// On répète la liste pour que la bande défile en boucle sans couture.
const track = [...certs, ...certs, ...certs, ...certs];

function StatusBadge({ status }) {
  if (status === 'acquis') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
        Agréé
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-600/30 bg-gold-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-gold-600">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
      Démarche en cours
    </span>
  );
}

export default function Certifications() {
  return (
    <section className="border-y border-navy-100 bg-sand-50">
      <div className="container-px mx-auto max-w-6xl py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Fiabilité &amp; conformité</p>
          <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
            Enregistrée au Cameroun, engagée dans la conformité
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-ink-700 sm:text-base">
            African Business Trade Sarl est une société légalement enregistrée au Cameroun et
            agréée par le Ministère des Transports pour ses opérations. L&rsquo;entreprise est
            aujourd&rsquo;hui engagée dans une démarche de certification douanière (AEO) et de
            qualité de service.
          </p>
        </Reveal>

        {/* Bande défilante : masquée en fondu sur les bords pour un rendu net */}
        <div
          className="marquee mt-12"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="marquee-track">
            {track.map((c, i) => (
              <figure
                key={i}
                className="mx-3 flex w-60 shrink-0 flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white px-6 py-6 shadow-sm"
              >
                <div className="relative h-20 w-40">
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    sizes="160px"
                    className={`object-contain ${c.status === 'en-cours' ? 'opacity-90' : ''}`}
                  />
                </div>
                <figcaption className="flex flex-col items-center gap-2 text-center">
                  <div>
                    <p className="font-display text-sm font-semibold text-navy-900">{c.name}</p>
                    <p className="mt-0.5 font-body text-xs text-ink-500">{c.full}</p>
                  </div>
                  <StatusBadge status={c.status} />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Reveal className="mt-6 text-center">
          <p className="font-body text-xs text-ink-500">
            « Agréé » : agrément en vigueur. « Démarche en cours » : certification en cours
            d&rsquo;obtention.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
