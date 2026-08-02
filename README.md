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
| Backend | Next.js API Routes (replaces the former Laravel API) |
| Code Quality | ESLint (`eslint-config-next`) + TypeScript strict |

## Getting Started

### Prerequisites

- **Node.js** >= 20.9
- **npm** >= 10

### Installation

```bash
git clone https://github.com/lagdaSec/SiliconCove-Project.git
cd SiliconCove-Project
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production

```bash
npm run build
npm run start
```

## Project Structure

```
SiliconCove-Project/
├── public/                  # Static assets (favicon, icons)
└── src/
    ├── app/                 # App Router
    │   ├── api/contact/route.ts  # Contact form API (POST /api/contact)
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
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Key Features

- **Arabic default (RTL)** — The site opens in Arabic with right-to-left layout; English (LTR) activates via the language toggle in the navbar
- **Mobile-first responsive** design
- **Smooth scrolling** and scroll-triggered AOS animations
- **Framer Motion** micro-interactions on buttons, cards, and the loading screen
- **Loading screen** with branded progress animation
- **Contact form** wired to a built-in API route

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit the contact form |

**Request body:**

```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Responses:**

| Status | Body | Meaning |
|--------|------|---------|
| `201` | `{ "success": true, "message": "Message received successfully." }` | Message accepted |
| `422` | `{ "success": false, "errors": { "field": "message" } }` | Validation failed |
| `400` | `{ "success": false, "message": "Invalid JSON body." }` | Malformed request |

## License

Proprietary — SiliconCove © 2026
