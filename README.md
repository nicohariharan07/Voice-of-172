# Voice of 172

A bilingual (English and Tamil) civic-service website for reporting and tracking local issues. The report forms include area and street/place options based on the supplied neighbourhood list.

## Run locally

Requirements: Node.js 20+ and pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Vite prints the local development URL when the server starts.

## Build

```bash
pnpm install --frozen-lockfile
pnpm run build
```

The static site output is written to `dist/`. Preview the production build with:

```bash
pnpm run preview
```

The app is a static frontend. Form and tracking experiences are the frontend behavior provided in this repository; no backend or database is included.
