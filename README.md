# Belleza Salon

Independent Next.js website exported as static files and deployed through GitHub Pages.

## Content source

The service menu and prices are transcribed from
`Hitesh_Salon_Price_List.xlsx`, supplied for the July 2026 site update.

The workbook does not contain a phone number, street address, opening hours,
email address, website/domain, map link, social profile, logo, staff details or
business description. Those details are intentionally not published until they
can be confirmed by the salon owner.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Pushes to `main` deploy automatically through `.github/workflows/pages.yml`.
