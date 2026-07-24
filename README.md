# Site vitrine ABT — African Business Trade Sarl

Site multi-pages en Next.js 15 (App Router) + Tailwind CSS, mobile-first,
pensé pour être déployé sur Vercel avec un nom de domaine personnalisé.

## Pages

- `/` — Accueil
- `/services` — Les 7 services (douane, transport, manutention, entrepôts, engins BTP, conteneurs, prestations)
- `/a-propos` — Qui sommes-nous
- `/contact` — Formulaire de contact + coordonnées + WhatsApp

## Stack

- **Next.js 15.2.8** (patché contre les CVE React Server Components de déc. 2025)
- **Tailwind CSS** — tokens de marque dans `tailwind.config.js` (navy + or, dérivés du logo et du flyer ABT)
- **Polices** — Space Grotesk (titres), IBM Plex Sans (texte), IBM Plex Mono (labels/coordonnées)
- Formulaire de contact → route API `/api/contact` → envoi d'email via **Resend**
- Bouton WhatsApp flottant + lien direct sur la page Contact

## Lancer en local

```bash
npm install
npm run dev
```
Le site tourne sur http://localhost:3000

## Configurer l'envoi d'email (Resend)

Le formulaire de contact a besoin d'une clé API pour envoyer réellement les emails.

1. Crée un compte gratuit sur [resend.com](https://resend.com)
2. Dashboard → API Keys → génère une clé
3. Copie `.env.example` vers `.env.local` et colle ta clé :
   ```
   RESEND_API_KEY=re_xxxxxxxx
   ```
4. Tant que ton domaine n'est pas vérifié sur Resend, `CONTACT_FROM_EMAIL` peut
   rester sur `onboarding@resend.dev` (fonctionne pour les tests).
   Une fois ton nom de domaine choisi et branché sur Vercel, vérifie-le sur
   Resend (Domains → Add domain, ajoute les enregistrements DNS demandés),
   puis mets à jour `CONTACT_FROM_EMAIL` avec une adresse de ce domaine.
5. Sans clé configurée, le formulaire répond proprement par un message
   d'erreur invitant à contacter via WhatsApp — il ne plante pas.

## Déployer sur Vercel

1. Pousse ce projet sur un repo GitHub (privé ou public)
2. Sur [vercel.com](https://vercel.com) → New Project → importe le repo
3. Vercel détecte Next.js automatiquement, aucune config à toucher
4. Dans **Settings → Environment Variables**, ajoute :
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (optionnel, par défaut africanbusinesstrade@gmail.com)
   - `CONTACT_FROM_EMAIL` (optionnel)
5. Deploy

## Brancher un nom de domaine

Une fois ton nom de domaine acheté :
1. Vercel → ton projet → **Settings → Domains** → ajoute le domaine
2. Vercel te donne les enregistrements DNS à créer chez ton registrar
   (souvent un simple enregistrement A ou CNAME)
3. Propagation DNS : quelques minutes à 24h selon le registrar

## Contenu à personnaliser

- **Textes de la page "Qui sommes-nous"** : rédigés uniquement à partir des
  infos disponibles (logo + flyer). Si tu as des chiffres réels (année de
  création, nombre d'années d'expérience, taille de l'équipe, nombre de
  pays/partenaires), dis-le moi et je les intègre — je n'ai rien inventé.
- **Photos** : le site utilise actuellement un graphique SVG maison (le
  "corridor" Kribi/Douala → Tchad/RCA/Congo) plutôt que des photos, pour
  éviter d'utiliser des images libres de droits non vérifiées. Si tu as des
  photos réelles (port, camions, entrepôt ABT), je peux les intégrer dans
  les héros de page.
- **Logo** : recadré automatiquement à partir de ton flyer (icône seule,
  `public/logo.png`). Si tu as le fichier logo original en haute résolution
  (vecteur ou PNG transparent), envoie-le pour un rendu encore plus net.
