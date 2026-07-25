'use client';

import { useState } from 'react';

const initialState = { name: '', phone: '', email: '', message: '', website: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "L'envoi a échoué.");
      }

      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Une erreur est survenue.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rise-in rounded-2xl border border-navy-100 bg-sand-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-emerald-600"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p className="font-display text-lg font-semibold text-navy-900">Message envoyé</p>
        <p className="mt-2 font-body text-sm text-ink-700">
          Merci, votre demande a bien été transmise à notre équipe. Nous revenons vers vous
          rapidement.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 font-body text-sm font-semibold text-navy-800 underline underline-offset-4"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Champ leurre : invisible et ignoré par les lecteurs d'écran, seuls
          les bots le remplissent — le serveur rejette alors la demande. */}
      <div className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block font-body text-sm font-semibold text-navy-900">
          Nom complet <span className="text-gold-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Votre nom complet"
          className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3.5 font-body text-sm text-ink-900 transition-all duration-200 placeholder:text-ink-500/60 hover:border-navy-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block font-body text-sm font-semibold text-navy-900">
          Téléphone <span className="text-gold-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+237 6xx xxx xxx"
          className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3.5 font-body text-sm text-ink-900 transition-all duration-200 placeholder:text-ink-500/60 hover:border-navy-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-body text-sm font-semibold text-navy-900">
          E-mail <span className="text-gold-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="exemple@email.com"
          className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3.5 font-body text-sm text-ink-900 transition-all duration-200 placeholder:text-ink-500/60 hover:border-navy-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-sm font-semibold text-navy-900">
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez votre besoin : type de marchandise, origine, destination, délais..."
          className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3.5 font-body text-sm text-ink-900 transition-all duration-200 placeholder:text-ink-500/60 hover:border-navy-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="font-body text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-4 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-md active:translate-y-0 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === 'sending' && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            aria-hidden="true"
          />
        )}
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'}
      </button>
    </form>
  );
}
