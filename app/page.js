import Link from 'next/link';
import Image from 'next/image';
import RouteMap from '../components/RouteMap';
import ServiceCard from '../components/ServiceCard';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Stats from '../components/Stats';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';

// Photos qui s'enchaînent en fond du bandeau d'accueil (effet film).
const heroSlides = [
  { src: '/images/port-conteneurs.jpg', alt: 'Terminal à conteneurs au coucher du soleil' },
  { src: '/images/import-export.jpg', alt: "Opérations d'import-export au port" },
  { src: '/images/entrepot.jpg', alt: 'Entrepôt logistique ABT' },
  { src: '/images/parc-conteneurs.jpg', alt: 'Parc à conteneurs' },
  { src: '/images/engins.jpg', alt: 'Manutention par reach stacker' },
];

const services = [
  {
    code: '01 — DOUANE',
    title: 'Douane, Transit & Import-Export',
    description:
      "Accompagnement complet de vos opérations import/export et gestion du transit à Kribi et Douala.",
    image: '/images/import-export.jpg',
    items: ['Déclarations douanières', 'Transit import / export', 'Suivi des formalités'],
  },
  {
    code: '02 — TRANSPORT',
    title: 'Transport National & Hinterland',
    description:
      'Acheminement de marchandises vers le Cameroun profond et les pays de l\'hinterland.',
    image: '/images/corridor-logistique.jpg',
    items: ['Couverture RCA, Tchad, Congo', 'Transport national', 'Suivi des expéditions'],
  },
  {
    code: '03 — MANUTENTION',
    title: 'Manutentions',
    description: 'Équipements spécialisés pour la manutention lourde en zone portuaire.',
    image: '/images/port-vue-aerienne.jpg',
    items: ['Reach stacker & Hammar', 'Chariot élévateur', 'Hiab & grue'],
  },
  {
    code: '04 — ENTREPÔT',
    title: 'Location Entrepôts',
    description: 'Espaces de stockage et de manutention disponibles à Kribi et Douala.',
    image: '/images/entrepot.jpg',
    items: ['Location d\'entrepôts', 'Espaces de manutention'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — diaporama cinématique */}
      <PageHero images={heroSlides} priority>
        <div className="container-px mx-auto max-w-6xl py-16 text-white sm:py-24 lg:py-28">
          <span
            className="rise-in manifest-tag !border-white/20 !bg-white/10 !text-white"
            style={{ '--rise-delay': '80ms' }}
          >
            Commissionnaire &amp; opérateur logistique
          </span>
          <h1
            className="rise-in title-hero mt-6 max-w-2xl font-display font-semibold"
            style={{ '--rise-delay': '200ms' }}
          >
            Votre partenaire{' '}
            <span className="text-gold-400">transport &amp; logistique</span> à Kribi et Douala
          </h1>
          <p
            className="rise-in mt-6 max-w-xl font-body text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ '--rise-delay': '340ms' }}
          >
            Douane, transit, transport national et manutention pour vos opérations import/export
            au Cameroun et vers l&rsquo;hinterland — RCA, Tchad, Congo.
          </p>
          <div
            className="rise-in mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ '--rise-delay': '460ms' }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-body text-sm font-semibold text-navy-950 shadow-lg shadow-gold-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-600/30 active:translate-y-0"
            >
              Demander un devis
            </Link>
            <a
              href="https://wa.me/237696404963"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 active:translate-y-0"
            >
              Contacter par WhatsApp
            </a>
          </div>
        </div>
      </PageHero>

      {/* Services overview */}
      <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Ce que nous faisons</p>
          <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
            Nos services
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-navy-800 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors hover:text-navy-600"
          >
            Voir tous nos services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </section>

      {/* Chiffres clés */}
      <Stats />

      {/* Why ABT */}
      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">Pourquoi ABT</p>
            <h2 className="title-section mt-3 max-w-lg font-display font-semibold">
              L&rsquo;intégrité dans les affaires
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                title: 'Double implantation',
                text: 'Présents à Kribi et à Douala, les deux principales portes d\'entrée maritimes du Cameroun.',
              },
              {
                title: 'Zone hinterland',
                text: 'Acheminement vers la RCA, le Tchad et le Congo depuis nos bases portuaires.',
              },
              {
                title: 'Équipement dédié',
                text: 'Reach stacker, Hammar, chariots élévateurs, Hiab et grues pour toute manutention lourde.',
              },
            ].map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 110}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10"
              >
                <h3 className="font-display text-lg font-semibold text-gold-400">{f.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/70">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications — fiabilité */}
      <Certifications />

      {/* Coverage */}
      <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Couverture géographique</p>
            <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
              Kribi, Douala et l&rsquo;hinterland
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink-700 sm:text-base">
              Depuis nos bases portuaires de Kribi et Douala, nous assurons vos transports
              nationaux et vers les pays voisins.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 font-mono text-sm text-navy-800">
              {['Cameroun', 'Tchad', 'RCA', 'Congo'].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>
          {/* Reveal porte la classe qui déclenche le tracé du corridor */}
          <Reveal
            delay={120}
            className="route-animated rounded-2xl border border-navy-100 bg-sand-50 p-6"
          >
            <RouteMap variant="dark" animated className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      {/* Témoignages */}
      <Testimonials />

      {/* CTA */}
      <section className="container-px mx-auto max-w-6xl pb-20">
        <Reveal className="relative isolate overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <Image
            src="/images/solutions-logistiques.jpg"
            alt=""
            fill
            quality={80}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-navy-800/90" />
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Besoin d&rsquo;une solution logistique ?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-white/70 sm:text-base">
            Contactez-nous pour un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-4 font-body text-sm font-semibold text-navy-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0"
          >
            Demander un devis gratuit
          </Link>
        </Reveal>
      </section>
    </>
  );
}
