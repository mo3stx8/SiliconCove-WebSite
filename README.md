# SiliconCove — Official Website

Professional bilingual (Arabic/English) corporate website for **SiliconCove**, a tech company specializing in software development and integrated digital solutions.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion + AOS |
| Icons | Lucide React |
| Fonts | next/font (IBM Plex Sans Arabic + Inter) |
| Backend | Next.js API Routes (replaces the old Laravel API) |

## Project Structure

```
SiliconCove-Project/
└── src/
    ├── app/
    │   ├── api/contact/route.ts  # Contact form API
    │   ├── about/page.tsx
    │   ├── services/page.tsx
    │   ├── contact/page.tsx
    │   ├── layout.tsx            # Root layout (fonts, metadata, RTL)
    │   ├── page.tsx              # Home
    │   └── globals.css
    ├── components/
    │   ├── layout/     # AppShell, Navbar, Footer, LoadingScreen
    │   ├── home/       # Hero, AboutPreview, ServicesPreview, etc.
    │   ├── services/   # ServiceCard
    │   ├── about/      # MissionVision
    │   ├── contact/    # ContactForm, ContactInfo
    │   └── common/     # Button, SectionTitle, GlowCard
    ├── context/        # LanguageContext (AR default, RTL)
    ├── i18n/           # translations.ts, serviceIcons.ts
    └── types/          # AOS attribute types
```

## Prerequisites

- **Node.js** >= 20.9
- **npm** >= 10

## Setup Commands

```bash
npm install
npm run dev          # http://localhost:3000
```

### Production

```bash
npm run build
npm run start        # http://localhost:3000
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Key Features

- **Arabic default (RTL)** — Site opens in Arabic; English (LTR) activates via the language toggle
- **Mobile-first responsive** design
- **Smooth scrolling** and scroll-triggered AOS animations
- **Framer Motion** micro-interactions on buttons and cards
- **Contact form API** at `POST /api/contact`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |

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
- `201` — Message received successfully
- `422` — Validation errors (`{ success: false, errors: { field: message } }`)
- `400` — Invalid JSON body

## License

Proprietary — SiliconCove © 2026
