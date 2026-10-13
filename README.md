# ScaleVia Website

Landing page for **scalevia.net** — Next.js 15, Tailwind CSS 4, Framer Motion.
Arabic (RTL) and English, dark and light mode.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  →  redirects to /ar or /en
```

## Where to edit

| What | File |
| --- | --- |
| All page text (Arabic + English) | `src/i18n/dictionaries.ts` |
| Email, phones, WhatsApp, cities, social links, tech logos | `src/config/site.ts` |
| Portfolio categories and projects | `src/content/projects.ts` |
| Colors, fonts, effects | `src/app/globals.css` |
| Sections | `src/components/sections/` |
| Logos, favicon | `public/brand/`, `public/favicon.ico` |

Content still marked as a placeholder (shown with a yellow "Placeholder" badge on the page):
testimonials and pricing.

## Adding a project

Each category on the home page opens `/ar/work/<category>` and `/en/work/<category>`.
Add an entry to `projects` in `src/content/projects.ts` (the commented example shows every field)
and put its screenshots in `public/projects/`. A category with no projects shows a "coming soon" message.

## Contact form → Google Sheet + email

The form posts to `/api/contact`, which forwards to a Google Apps Script.
Follow the steps at the top of `docs/google-apps-script.gs`, then set these on Vercel:

```
GOOGLE_SCRIPT_URL=...
CONTACT_SECRET=...
```

## Deploy (Vercel)

1. Import the GitHub repo in Vercel (framework is detected automatically).
2. Add the environment variables above.
3. Project → Settings → Domains → add `scalevia.net` and follow the DNS instructions.
