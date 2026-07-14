# Portfolio — Industrial Designer
> Next.js · TypeScript · Tailwind CSS · Framer Motion

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── cv/
│   │   └── cv-yourname.pdf          ← PUT YOUR CV HERE
│   ├── images/
│   │   ├── about/
│   │   │   └── portrait.jpg         ← Your portrait
│   │   ├── projects/
│   │   │   ├── alpina/              ← Alpina project images
│   │   │   ├── mario-hernandez/     ← Mario Hernandez images
│   │   │   └── fragmentos/          ← Fragmentos images
│   │   └── og-image.jpg             ← Social share image (1200×630)
├── src/
│   ├── app/
│   │   ├── [lang]/                  ← All pages (en/es)
│   │   │   ├── page.tsx             ← Home page
│   │   │   ├── work/page.tsx        ← Work overview
│   │   │   ├── about/page.tsx       ← About page
│   │   │   ├── contact/page.tsx     ← Contact page
│   │   │   └── project/[slug]/      ← Dynamic project pages
│   │   ├── layout.tsx               ← Root layout (fonts, metadata)
│   │   └── globals.css              ← Global styles, CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx              ← Navigation
│   │   │   └── Footer.tsx           ← Footer
│   │   └── ui/
│   │       ├── FadeIn.tsx           ← Scroll-triggered fade animation
│   │       └── ProjectCard.tsx      ← Project card component
│   ├── lib/
│   │   ├── config.ts                ← ★ SITE CONFIG (name, email, CV path)
│   │   ├── translations.ts          ← ★ ALL TEXT in EN + ES
│   │   └── projects.ts              ← ★ ALL PROJECT DATA
│   └── hooks/
│       └── useTranslation.ts
```

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/en`.

---

## ✏️ How to Edit Content

### Change your name, email, CV path
Edit **`src/lib/config.ts`** — everything is labeled clearly.

### Change any text (EN or ES)
Edit **`src/lib/translations.ts`** — all interface text is here.

### Edit a project (title, description, images, sections)
Edit **`src/lib/projects.ts`** — each project is a self-contained object.

### Add a new project
1. Open `src/lib/projects.ts`
2. Copy any existing project object (e.g. `alpina`)
3. Change the `slug` (must be unique, lowercase, no spaces — use hyphens)
4. Fill in all fields
5. Add it to the `projects` array at the bottom
6. Create a folder `public/images/projects/your-slug/` and add images

### Remove a project
Delete its object from `projects.ts` and remove it from the `projects` array.

### Replace your CV
1. Place your PDF at `public/cv/cv-yourname.pdf`
2. Update the path in `src/lib/config.ts` → `cvPath`

### Add project images
Place images inside:
```
public/images/projects/[slug]/
```
Then reference them in `projects.ts` like:
```
src: '/images/projects/alpina/hero.jpg'
```

### Add your portrait (About page)
1. Place image at `public/images/about/portrait.jpg`
2. Uncomment the `<Image>` tag in `src/app/[lang]/about/page.tsx`

---

## 🚀 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```
Follow the prompts. On first deploy, Vercel detects Next.js automatically.

### Option B — GitHub + Vercel Dashboard
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Your site is live at `yourname.vercel.app`

### Deploy future updates
```bash
git add .
git commit -m "Update project content"
git push
```
Vercel auto-deploys on every push to `main`.

---

## 🌐 Custom Domain + DNS

### Step 1 — Add domain in Vercel
1. Go to your Vercel project → Settings → Domains
2. Type your domain (e.g. `yourname.com`) → Add
3. Vercel shows you DNS records to add

### Step 2 — Point DNS at your registrar
Go to your domain registrar (Namecheap, GoDaddy, Google Domains, etc.) and add:

**If using root domain (`yourname.com`):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**If using subdomain (`www.yourname.com` only):**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

> DNS changes propagate in 5–48 hours. Vercel auto-provisions SSL (HTTPS).

### Step 3 — Set primary domain in Vercel
In Vercel → Domains, mark your preferred domain as primary. Vercel will redirect the other automatically.

---

## 🖼️ Image Recommendations

- **Hero images**: 2400×1600px minimum, JPG, <500KB
- **Thumbnails**: 800×1000px, JPG, <200KB
- **Gallery images**: 1200×900px, JPG, <300KB
- **Portrait**: 800×1067px, JPG, <200KB
- **OG image**: exactly 1200×630px, JPG

Use [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) to compress images.

---

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 App Router | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Google Fonts (Cormorant + Outfit) | Typography |

---

## 💡 Future Improvements

- Add a contact form (Formspree or Resend)
- Add project filtering by category on Work page
- Add transition animations between pages
- Add Open Graph images per project
- Add password-protected project pages for NDA work
- Add a blog or writing section
- Connect Sanity or Contentlayer for CMS editing
