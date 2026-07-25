import Image from 'next/image';
import Reveal from './Reveal';

// Logos réels fournis par ABT — certifications authentiques.
const certs = [
  { src: '/certifications/aeo.png', name: 'AEO', full: 'Opérateur Économique Agréé' },
  { src: '/certifications/mintrans.png', name: 'Ministère des Transports', full: 'Agrément — Cameroun' },
  { src: '/certifications/q.png', name: 'Certification Qualité', full: 'Normes de service' },
];

// On répète la liste pour que la bande défile en boucle sans couture.
const track = [...certs, ...certs, ...certs, ...certs];

export default function Certifications() {
  return (
    <section className="border-y border-navy-100 bg-sand-50">
      <div className="container-px mx-auto max-w-6xl py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Fiabilité &amp; conformité</p>
          <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
            Une entreprise certifiée &amp; enregistrée au Cameroun
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-ink-700 sm:text-base">
            African Business Trade Sarl est une société légalement enregistrée au Cameroun,
            agréée pour ses opérations de transport et de transit, et engagée dans une démarche
            de conformité douanière et de qualité de service.
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
                className="mx-3 flex w-56 shrink-0 flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white px-6 py-6 shadow-sm"
              >
                <div className="relative h-20 w-40">
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-center">
                  <p className="font-display text-sm font-semibold text-navy-900">{c.name}</p>
                  <p className="mt-0.5 font-body text-xs text-ink-500">{c.full}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
