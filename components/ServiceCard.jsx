import Image from 'next/image';

export default function ServiceCard({
  id,
  code,
  title,
  description,
  image,
  // Cadrage de la photo : à ajuster quand le sujet n'est pas au centre
  // (ex. une photo en portrait dont l'engin occupe le bas).
  imagePosition = 'object-center',
  items = [],
}) {
  return (
    <div
      id={id}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {image && (
        <div className="relative h-40 w-full overflow-hidden bg-navy-100 sm:h-44">
          <Image
            src={image}
            alt=""
            fill
            quality={85}
            sizes="(min-width: 640px) 50vw, 100vw"
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imagePosition}`}
          />
          <div className="absolute inset-0 bg-navy-950/25" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between">
          <span className="manifest-tag">{code}</span>
          <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-navy-900 sm:text-xl">
          {title}
        </h3>
        <p className="mb-4 font-body text-sm leading-relaxed text-ink-700">{description}</p>
        {items.length > 0 && (
          <ul className="mt-auto space-y-2 border-t border-navy-100 pt-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-ink-700">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
