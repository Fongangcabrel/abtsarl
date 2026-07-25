import Link from 'next/link';
import RouteMap from '../../components/RouteMap';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Qui sommes-nous — ABT African Business Trade',
  description:
    "African Business Trade Sarl, opérateur de transport et logistique basé à Kribi et Douala. L'intégrité dans les affaires.",
};

const values = [
  {
    title: 'Intégrité',
    text: "Une conduite des affaires transparente — c'est notre signature, jusque dans notre nom.",
  },
  {
    title: 'Réactivité',
    text: "Une équipe présente sur le terrain, à Kribi comme à Douala, pour suivre vos opérations au plus près.",
  },
  {
    title: 'Polyvalence',
    text: 'De la déclaration en douane à la manutention lourde, une offre pensée pour couvrir toute la chaîne logistique.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/import-export.jpg"
        alt="Port à conteneurs, opérations d'import-export"
        priority
      >
        <div className="container-px mx-auto max-w-6xl py-14 text-white sm:py-20">
          <span
            className="rise-in manifest-tag !border-white/20 !bg-white/10 !text-white"
            style={{ '--rise-delay': '80ms' }}
          >
            Notre histoire
          </span>
          <h1
            className="rise-in title-page mt-5 max-w-2xl font-display font-semibold"
            style={{ '--rise-delay': '200ms' }}
          >
            Qui sommes-nous ?
          </h1>
          <p
            className="rise-in mt-4 max-w-xl font-body text-white/75"
            style={{ '--rise-delay': '320ms' }}
          >
            African Business Trade Sarl (ABT) accompagne entreprises et particuliers dans leurs
            opérations de transport, de transit douanier et de logistique, depuis Kribi et
            Douala.
          </p>
        </div>
      </PageHero>

      <section className="container-px mx-auto max-w-6xl py-14 sm:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Notre mission</p>
            <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
              L&rsquo;intégrité dans les affaires
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink-700 sm:text-base">
              Notre nom porte notre engagement : African Business Trade. Notre signature porte
              notre méthode : l&rsquo;intégrité dans les affaires. Concrètement, cela signifie des
              opérations de douane, de transport et de manutention menées avec rigueur, depuis
              nos bases de Kribi et Douala jusqu&rsquo;à l&rsquo;hinterland — RCA, Tchad, Congo.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink-700 sm:text-base">
              Nous intervenons sur l&rsquo;ensemble de la chaîne logistique : douane et transit,
              transport national, manutention portuaire, location d&rsquo;entrepôts et
              d&rsquo;engins, jusqu&rsquo;au stockage de vos conteneurs.
            </p>
            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-navy-800 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors hover:text-navy-600"
            >
              Découvrir nos services
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
          {/* corridor animé sur la page à-propos aussi */}
          <Reveal
            delay={120}
            className="route-animated rounded-2xl border border-navy-100 bg-sand-50 p-6"
          >
            <RouteMap variant="dark" animated className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-50">
        <div className="container-px mx-auto max-w-6xl py-14 sm:py-20">
          <Reveal>
            <p className="eyebrow">Ce qui nous définit</p>
            <h2 className="title-section mt-3 font-display font-semibold text-navy-900">
              Nos valeurs
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 110}
                className="rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg hover:shadow-navy-900/10"
              >
                <h3 className="font-display text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-700">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
        <Reveal className="rounded-3xl bg-navy-800 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Envie de travailler avec nous ?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-white/70 sm:text-base">
            Parlons de votre projet logistique.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-4 font-body text-sm font-semibold text-navy-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0"
          >
            Nous contacter
          </Link>
        </Reveal>
      </section>
    </>
  );
}
