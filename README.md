# Dhinesh V — Developer Portfolio

Modern, responsive React portfolio for college placement applications.

## Requirements
Node.js 20 or newer is recommended.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Customization
- Edit `src/data.js` for your skills, project descriptions, and links.
- Edit `src/components/` for section layouts.
- Replace `public/resume.pdf` with the latest resume (note: it will be publicly downloadable when deployed).
- Adjust colors in `tailwind.config.js` and `src/index.css`.

## Deployment
Push the project to GitHub, then import it into Vercel (framework: Vite; build command: `npm run build`; output: `dist`).

## Accessibility
Animations respect `prefers-reduced-motion`. All external links use `rel="noreferrer"`.
