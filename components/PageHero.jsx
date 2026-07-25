import Image from 'next/image';
import HeroSlideshow from './HeroSlideshow';

// Bandeau d'en-tête : photo (ou diaporama) en fond, voile navy par-dessus
// pour garder le texte lisible.
//
// - `image` : une seule photo (bandeaux des pages intérieures).
// - `images` : un tableau [{src, alt}] → diaporama cinématique en fondu
//   (utilisé sur l'accueil).
//
// L'entrée du contenu se fait en CSS pur (classe `rise-in` posée par les
// pages), sans JavaScript : le premier écran ne dépend pas de l'hydratation.
export default function PageHero({ image, images, alt = '', priority = false, children }) {
  const slideshow = Array.isArray(images) && images.length > 0;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      {slideshow ? (
        <HeroSlideshow images={images} />
      ) : (
        <div className="absolute inset-0 slow-zoom">
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-navy-950/75 sm:bg-gradient-to-r sm:from-navy-950/92 sm:via-navy-950/72 sm:to-navy-900/35" />
      <div className="relative">{children}</div>
    </section>
  );
}
