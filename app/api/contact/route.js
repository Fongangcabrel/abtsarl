import { NextResponse } from 'next/server';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'africanbusinesstrade@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'ABT Site <onboarding@resend.dev>';

const LIMITS = { name: 100, phone: 40, email: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

// Fenêtre glissante en mémoire : filtre les envois répétés depuis une même IP.
// Sur Vercel chaque instance a sa propre Map, donc c'est un garde-fou contre les
// bots naïfs, pas une protection contre une attaque distribuée.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  // Champ leurre invisible pour l'utilisateur : seul un bot le remplit.
  // On répond ok pour ne pas lui signaler qu'il a été filtré.
  if (clean(body?.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body?.name, LIMITS.name);
  const phone = clean(body?.phone, LIMITS.phone);
  const email = clean(body?.email, LIMITS.email);
  const message = clean(body?.message, LIMITS.message);

  if (!name || !phone || !email || !message) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 400 });
  }

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'inconnu';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Trop de demandes envoyées. Réessayez plus tard ou contactez-nous par WhatsApp.' },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY manquante — voir .env.example');
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré. Merci de contacter ABT par WhatsApp ou téléphone." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nouvelle demande de devis — ${name.replace(/\s+/g, ' ')}`,
        text: [
          `Nouvelle demande via le site ABT`,
          ``,
          `Nom: ${name}`,
          `Téléphone: ${phone}`,
          `E-mail: ${email}`,
          ``,
          `Message:`,
          message,
        ].join('\n'),
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error('Resend error:', errData);
      return NextResponse.json({ error: "L'envoi a échoué. Réessayez ou contactez-nous par WhatsApp." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Une erreur est survenue. Réessayez plus tard.' }, { status: 500 });
  }
}
