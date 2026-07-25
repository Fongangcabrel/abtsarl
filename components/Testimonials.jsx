import Reveal from './Reveal';

// ⚠️ TÉMOIGNAGES D'EXEMPLE — contenu fictif fourni comme gabarit.
// À REMPLACER par de vrais témoignages clients (avec leur accord) avant la
// mise en ligne : des avis inventés présentés comme réels peuvent induire vos
// clients en erreur. Voir la note de livraison.
const testimonials = [
  {
    name: 'Jean Calvin',
    role: 'Importateur — Douala',
    initials: 'JC',
    accent: 'bg-navy-800',
    domain: 'Dédouanement & import-export',
    quote:
      "ABT a pris en charge le dédouanement de mes conteneurs de bout en bout. Formalités réglées sans accroc et marchandise livrée dans les délais. Un vrai partenaire de confiance.",
  },
  {
    name: 'Lee Tchat',
    role: 'Négociant — N’Djamena, Tchad',
    initials: 'LT',
    accent: 'bg-gold-600',
    domain: 'Transport hinterland',
    quote:
      "Mes marchandises partent de Douala jusqu’au Tchad en toute sérénité. Le suivi est régulier et l’équipe reste joignable à chaque étape. Je recommande sans hésiter.",
  },
  {
    name: 'Kenfack Arthur',
    role: 'Responsable logistique — Kribi',
    initials: 'KA',
    accent: 'bg-navy-600',
    domain: 'Manutention & entreposage',
    quote:
      "Pour la manutention lourde et le stockage de nos conteneurs, ABT dispose du bon équipement et du bon savoir-faire. Sérieux, réactif et professionnel du début à la fin.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-gold-500" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-6xl py-16 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ils nous font confiance</p>
          <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
            La satisfaction de nos clients
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-ink-700 sm:text-base">
            Des entreprises et des particuliers qui nous confient leurs opérations, du port
            jusqu&rsquo;à l&rsquo;hinterland.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 110}
              className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-sand-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-white hover:shadow-lg hover:shadow-navy-900/10"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-navy-100 transition-colors duration-300 group-hover:fill-gold-300"
                  aria-hidden="true"
                >
                  <path d="M7 7h4v4c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2H7zm8 0h4v4c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2h-2z" />
                </svg>
              </div>

              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink-700">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${t.accent} font-display text-sm font-semibold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900">{t.name}</p>
                  <p className="font-body text-xs text-ink-500">{t.role}</p>
                </div>
              </div>

              <p className="mt-4 inline-flex w-fit rounded-full bg-navy-800/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-navy-700">
                {t.domain}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
