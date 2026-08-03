# SiliconCove — Official Website

<div align="center">

**Bilingual (Arabic / English) corporate website for SiliconCove** — a tech company specializing in software development and integrated digital solutions for government, private sector, and individuals.

</div>

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Animations | [Framer Motion](https://www.framer.com/motion/) + [AOS](https://michalsnik.github.io/aos/) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | `next/font` — IBM Plex Sans Arabic + Inter |
| Deployment | Static export (`output: 'export'`) on [GitHub Pages](https://pages.github.com) via GitHub Actions |
| Code Quality | ESLint (`eslint-config-next`) + TypeScript strict |

## Getting Started

### Prerequisites

- **Node.js** >= 20.9
- **npm** >= 10

### Installation

```bash
git clone https://github.com/mo3stx8/SiliconCove-Website.git
cd SiliconCove-Website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
SiliconCove-Website/
├── .github/workflows/    # GitHub Pages deployment
├── public/                  # Static assets (favicon, icons)
└── src/
    ├── app/                 # App Router
    │   ├── page.tsx              # Home
    │   ├── about/page.tsx        # About
    │   ├── services/page.tsx     # Services
    │   ├── contact/page.tsx      # Contact
    │   ├── layout.tsx            # Root layout (fonts, metadata, RTL)
    │   ├── icon.svg              # Favicon
    │   └── globals.css           # Tailwind + global styles
    ├── components/
    │   ├── layout/               # AppShell, Navbar, Footer, LoadingScreen
    │   ├── home/                 # Hero, AboutPreview, ServicesPreview, etc.
    │   ├── services/             # ServiceCard
    │   ├── about/                # MissionVision
    │   ├── contact/              # ContactForm, ContactInfo
    │   └── common/               # Button, SectionTitle, GlowCard
    ├── context/                  # LanguageContext (Arabic default, RTL)
    ├── i18n/                     # translations.ts, serviceIcons.ts
    └── types/                    # AOS attribute type declarations
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server on `http://localhost:3000` |
| `npm run build` | Create a static export in `out/` |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Deployment — GitHub Pages

The project is configured for static export and deploys to GitHub Pages automatically on every push to `main`.

### How it works

- `next.config.ts` uses `output: 'export'` and reads the Pages base path from the `PAGES_BASE_PATH` environment variable, so links and assets are correctly prefixed for `https://<user>.github.io/<repo>/`.
- `.github/workflows/deploy.yml` builds the site and deploys the `out/` directory using the official `actions/deploy-pages` workflow.

### Manual deployment

```bash
npm run build
npx serve out     # preview the static build locally
```

### First-time setup (once)

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (no branch needed — the workflow deploys).
4. The site will be available at `https://<user>.github.io/SiliconCove-Website/` after the first successful run.

## Contact Form

The contact form is currently **inactive** and will be activated later.

- It reads the endpoint from the `NEXT_PUBLIC_CONTACT_ENDPOINT` environment variable.
- Until that variable is set, submitting the form shows a "coming soon" notice and sends nothing.
- To activate, point it at any service that accepts a `POST` request with a JSON body (e.g. EmailJS, Formspree) and rebuild.

**Example:**

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/your-id npm run build
```

## Key Features

- **Arabic default (RTL)** — The site opens in Arabic with right-to-left layout; English (LTR) activates via the language toggle in the navbar
- **Mobile-first responsive** design
- **Smooth scrolling** and scroll-triggered AOS animations
- **Framer Motion** micro-interactions on buttons, cards, and the loading screen
- **Loading screen** with branded progress animation
- **Contact form** — ready for activation via `NEXT_PUBLIC_CONTACT_ENDPOINT`

## License

Proprietary — SiliconCove © 2026
