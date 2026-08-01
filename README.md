# SiliconCove — Official Website

Professional bilingual (Arabic/English) corporate website for **SiliconCove**, a tech company specializing in software development and integrated digital solutions.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | PHP / Laravel 12 |
| Frontend | React + Vite + React Router DOM |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion + AOS |
| Icons | Lucide React |

## Project Structure

```
SiliconeCove_full_site/
├── backend/          # Laravel API
│   ├── app/Http/Controllers/Api/
│   └── routes/api.php
└── frontend/         # React SPA
    └── src/
        ├── components/
        │   ├── layout/     # Navbar, Footer, LoadingScreen
        │   ├── home/       # Hero, AboutPreview, ServicesPreview, etc.
        │   ├── services/   # ServiceCard
        │   ├── about/      # MissionVision
        │   ├── contact/    # ContactForm, ContactInfo
        │   └── common/     # Button, SectionTitle, GlowCard
        ├── context/        # LanguageContext (AR default, RTL)
        ├── i18n/           # translations.js
        └── pages/          # Home, About, Services, Contact
```

## Prerequisites

- **PHP** >= 8.2 (with extensions: mbstring, openssl, pdo, tokenizer, xml, ctype, json)
- **Composer** >= 2.x
- **Node.js** >= 18
- **npm** >= 9

## Setup Commands

### 1. Backend (Laravel)

```bash
cd backend
composer install
copy .env.example .env        # Windows
# cp .env.example .env        # macOS/Linux
php artisan key:generate
php artisan serve             # http://localhost:8000
```

### 2. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev                   # http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `http://localhost:8000`.

### 3. Production Build

```bash
cd frontend
npm run build                 # Output: frontend/dist/
```

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

## Development Workflow

Run both servers in separate terminals:

```bash
# Terminal 1 — Backend
cd backend && php artisan serve

# Terminal 2 — Frontend
cd frontend && npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## License

Proprietary — SiliconCove © 2026
