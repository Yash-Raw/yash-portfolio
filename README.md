# yash-portfolio

Personal site. Vite + React + TypeScript, plain CSS, no UI framework.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Editing the content

Everything the page says lives in `src/data.ts`:

- `projects` — the work list. A project with an empty `links` array renders as
  "in progress" instead of a link.
- `skills` — each entry sits at `level` 1–4 on the shared scale defined by
  `LEVELS` (read about it → tried it → can build with it → comfortable).
  The positions are a self-assessment; change them here.
- `contact` — email and profile links.

## Layout

```
src/
  main.tsx              entry
  App.tsx               section order
  data.ts               all copy and content
  types.ts
  styles.css            design tokens + every rule
  components/
    Header.tsx
    Hero.tsx
    Work.tsx
    Calibration.tsx     the skill scale
    Contact.tsx
    Icons.tsx           inlined SVGs
```

Colours, type and spacing are CSS custom properties at the top of
`styles.css`. Type is Hanken Grotesk + IBM Plex Mono, loaded from Google Fonts.

The dev server runs on 5173 rather than 3000 on purpose — a service worker from
another local project claims `localhost:3000`.
