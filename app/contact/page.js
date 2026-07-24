import ContactForm from '../../components/ContactForm';
import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Contact — ABT African Business Trade',
  description: 'Contactez African Business Trade Sarl à Kribi et Douala par téléphone, WhatsApp ou email.',
};

const infoItems = [
  { label: 'Adresse', value: 'BP 12090, Douala, Cameroun' },
  { label: 'WhatsApp / Téléphone', value: '+237 696 404 963', href: 'tel:+237696404963' },
  { label: 'Téléphone', value: '+237 670 870 649', href: 'tel:+237670870649' },
  { label: 'Téléphone', value: '+237 670 871 949', href: 'tel:+237670871949' },
  {
    label: 'E-mail',
    value: 'africanbusinesstrade@gmail.com',
    href: 'mailto:africanbusinesstrade@gmail.com',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/corridor-logistique.jpg"
        alt="Port, camions et conteneurs au coucher du soleil"
        priority
      >
        <div className="container-px mx-auto max-w-6xl py-14 text-white sm:py-20">
          <span className="manifest-tag !border-white/20 !bg-white/10 !text-white">
            Contactez-nous
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-4 max-w-xl font-body text-white/75">
            Notre équipe est à votre disposition pour répondre à vos questions et vous
            accompagner dans vos opérations de transport et de logistique.
          </p>
        </div>
      </PageHero>

      <section className="container-px mx-auto max-w-6xl py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Informations</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
              Nos coordonnées
            </h2>
            <ul className="mt-8 space-y-4">
              {infoItems.map((item, i) => (
                <li
                  key={`${item.label}-${i}`}
                  className="rounded-xl border border-navy-100 bg-sand-50 px-5 py-4"
                >
                  <p className="font-body text-xs uppercase tracking-wide text-ink-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-mono text-sm font-medium text-navy-900 hover:text-navy-700"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-mono text-sm font-medium text-navy-900">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/237696404963"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-body text-sm font-semibold text-white hover:brightness-105"
            >
              Discuter sur WhatsApp
            </a>
          </div>

          <div>
            <p className="eyebrow">Formulaire</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
              Envoyez-nous un message
            </h2>
            <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
