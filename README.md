# Red Sky Pet Care — Pet Sitting Website

Marketing site for Red Sky Pet Care in Santa Clarita, CA 91387 (and surrounding areas): hero landing page, services, about/trust, and a booking inquiry form.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server on port 4321 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Notes

- The contact form is **client-side only** (validation + success state). No auth or database.
- Brand name **Red Sky Pet Care** (lockup: Red Sky / Pet Care); location is Santa Clarita, CA 91387 + surrounding areas. Colors, rates, phone, and contact email are still open for Travis to customize.
- Typography: Syne (display) + Karla (body).
- Hero and about images live in `/public`.
