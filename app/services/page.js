import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';
import PageHero from '../../components/PageHero';

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
    image: '/images/solutions-logistiques.jpg',
    items: [],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/port-vue-aerienne.jpg"
        alt="Vue aérienne d'un terminal portuaire à conteneurs"
        priority
      >
        <div className="container-px mx-auto max-w-6xl py-14 text-white sm:py-20">
          <span className="manifest-tag !border-white/20 !bg-white/10 !text-white">
            Notre expertise
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Des services adaptés à vos besoins logistiques
          </h1>
          <p className="mt-4 max-w-xl font-body text-white/75">
            Une expertise complète : douane, transport, manutention et stockage, au service de
            vos opérations à Kribi et Douala.
          </p>
        </div>
      </PageHero>

      <section className="container-px mx-auto max-w-6xl py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl pb-20">
        <div className="rounded-3xl bg-navy-800 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Une marchandise à transporter ou dédouaner ?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-white/70 sm:text-base">
            Décrivez-nous votre besoin, notre équipe revient vers vous rapidement.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 font-body text-sm font-semibold text-navy-950 hover:bg-gold-400"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
