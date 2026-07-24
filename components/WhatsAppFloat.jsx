export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Bonjour ABT, je souhaite avoir des informations sur vos services de transport/logistique."
  );

  return (
    <a
      href={`https://wa.me/237696404963?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.01 3C9.38 3 4 8.32 4 14.87c0 2.36.68 4.55 1.86 6.4L4 29l7.94-2.07a12.9 12.9 0 0 0 4.07.66c6.63 0 12.01-5.32 12.01-11.87C28.02 8.32 22.64 3 16.01 3Zm0 21.62c-1.3 0-2.58-.25-3.78-.75l-.27-.11-4.71 1.23 1.26-4.56-.18-.29a9.63 9.63 0 0 1-1.51-5.27c0-5.35 4.4-9.69 9.8-9.69 5.4 0 9.79 4.34 9.79 9.69s-4.4 9.75-9.4 9.75Zm5.36-7.3c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43a8.72 8.72 0 0 1-1.62-2.01c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.49.1-.19.05-.36-.02-.51-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.39s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.73-.71 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.13-.26-.2-.55-.34Z" />
      </svg>
    </a>
  );
}
