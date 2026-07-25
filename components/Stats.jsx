import Reveal from './Reveal';
import StatCounter from './StatCounter';

// ⚠️ CHIFFRES À CONFIRMER — valeurs indicatives à remplacer par les vrais
// chiffres d'ABT avant la mise en ligne (voir note de livraison).
const stats = [
  {
    value: 10,
    suffix: ' ans+',
    label: "d'expérience",
    sub: 'au service du transport et de la logistique',
    icon: 'award',
  },
  {
    value: 300,
    suffix: '+',
    label: 'conteneurs traités',
    sub: 'manutentionnés à Kribi et Douala',
    icon: 'container',
  },
  {
    value: 250,
    suffix: '+',
    label: 'clients accompagnés',
    sub: 'entreprises et particuliers satisfaits',
    icon: 'users',
  },
  {
    value: 98,
    suffix: ' %',
    label: 'de satisfaction',
    sub: 'un service fiable, du port à destination',
    icon: 'shield',
  },
];

const icons = {
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5" />
    </>
  ),
  container: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="1" />
      <path d="M7 7v12M12 7v12M17 7v12" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-6xl py-16 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ce que valent nos promesses</p>
          <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
            Des chiffres qui parlent pour nous
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-ink-700 sm:text-base">
            Derrière notre signature — l&rsquo;intégrité dans les affaires — il y a des résultats
            concrets, année après année.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sand-50 text-navy-700 ring-1 ring-navy-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  {icons[s.icon]}
                </svg>
              </div>
              <div className="font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 font-body text-sm font-semibold text-navy-800">{s.label}</p>
              <p className="mx-auto mt-1 max-w-[16rem] font-body text-xs leading-relaxed text-ink-500">
                {s.sub}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
