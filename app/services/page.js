import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Services — ABT African Business Trade',
  description:
    'Douane & transit, transport national et hinterland, manutentions, location entrepôts, location engins BTP, empotage/dépotage et stockage à Kribi et Douala.',
};

const services = [
  {
    id: 'douane',
    code: '01 — DOUANE',
    title: 'Douane, Transit & Import-Export',
    description:
      "Accompagnement complet de vos opérations d'import-export et gestion du transit douanier.",
    image: '/images/import-export.jpg',
    items: [
      'Déclarations en douane',
      'Transit import / export',
      'Suivi et accompagnement des formalités',
    ],
  },
  {
    id: 'transport',
    code: '02 — TRANSPORT',
    title: 'Transports National & Hinterland',
    description:
      "Acheminement de marchandises à travers le Cameroun et vers les pays de l'hinterland.",
    image: '/images/corridor-logistique.jpg',
    items: [
      'Transport national',
      'Liaisons vers la RCA, le Tchad, le Congo et au-delà',
      'Suivi des expéditions',
    ],
  },
  {
    id: 'manutention',
    code: '03 — MANUTENTION',
    title: 'Manutentions',
    description: 'Équipements spécialisés pour toute opération de manutention lourde.',
    image: '/images/port-conteneurs.jpg',
    items: ['Reach stacker', 'Hammar', 'Chariot élévateur', 'Hiab & grue'],
  },
  {
    id: 'entrepots',
    code: '04 — ENTREPÔT',
    title: 'Location Entrepôts & Espaces de Manutention',
    description: "Espaces de stockage et de manutention disponibles à Kribi et Douala.",
    image: '/images/entrepot.jpg',
    items: ['Location d\'entrepôts', "Espaces dédiés à la manutention"],
  },
  {
    id: 'engins-btp',
    code: '05 — ENGINS BTP',
    title: 'Location Engins BTP & Portes Chars',
    description: "Location d'engins de chantier et de portes chars selon vos besoins.",
    image: '/images/engins.jpg',
    imagePosition: 'object-bottom',
    items: ['Engins BTP', 'Portes chars'],
  },
  {
    id: 'conteneurs',
    code: '06 — CONTENEURS',
    title: 'Empotages, Dépotages & Stockage',
    description: 'Gestion complète de vos conteneurs, du chargement au stockage.',
    image: '/images/parc-conteneurs.jpg',
    items: ['Empotages / dépotages', 'Habillage conteneurs', 'Stockage'],
  },
  {
    id: 'prestations',
    code: '07 — SUR-MESURE',
    title: 'Prestations de Services',
    description:
      "Solutions logistiques sur-mesure adaptées à vos besoins spécifiques à Kribi et Douala.",
    image: '/images/port-vue-aerienne.jpg',
    items: [],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/solutions-logistiques.jpg"
        alt="Solutions logistiques : transport, fret et distribution"
        priority
      >
        <div className="container-px mx-auto max-w-6xl py-14 text-white sm:py-20">
          <span
            className="rise-in manifest-tag !border-white/20 !bg-white/10 !text-white"
            style={{ '--rise-delay': '80ms' }}
          >
            Notre expertise
          </span>
          <h1
            className="rise-in title-page mt-5 max-w-2xl font-display font-semibold"
            style={{ '--rise-delay': '200ms' }}
          >
            Des services adaptés à vos besoins logistiques
          </h1>
          <p
            className="rise-in mt-4 max-w-xl font-body text-white/75"
            style={{ '--rise-delay': '320ms' }}
          >
            Une expertise complète : douane, transport, manutention et stockage, au service de
            vos opérations à Kribi et Douala.
          </p>
        </div>
      </PageHero>

      <section className="container-px mx-auto max-w-6xl py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 90}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl pb-20">
        <Reveal className="rounded-3xl bg-navy-800 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Une marchandise à transporter ou dédouaner ?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-white/70 sm:text-base">
            Décrivez-nous votre besoin, notre équipe revient vers vous rapidement.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-4 font-body text-sm font-semibold text-navy-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0"
          >
            Demander un devis
          </Link>
        </Reveal>
      </section>
    </>
  );
}
