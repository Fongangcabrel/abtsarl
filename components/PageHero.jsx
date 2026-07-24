import Image from 'next/image';

// Bandeau d'en-tête : photo en fond, voile navy par-dessus pour garder le
// texte lisible. Les photos sources sont en définition modeste, d'où le
// `object-cover` et un voile assez dense qui masque la montée en échelle.
export default function PageHero({ image, alt = '', priority = false, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy-950/75 sm:bg-gradient-to-r sm:from-navy-950/92 sm:via-navy-950/72 sm:to-navy-900/35" />
      <div className="relative">{children}</div>
    </section>
  );
}
