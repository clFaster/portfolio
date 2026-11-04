# Portfolio

My personal portfolio site. It is a small React + Vite app with a projects page and a short about section.

Live: https://moritzreis.dev

## Tech

- React 18 + TypeScript
- Vite
- styled-components
- framer-motion (page transitions)
- react-router + react-helmet-async

## Local Development

```sh
corepack enable
pnpm install
pnpm dev
```

Useful scripts:

```sh
pnpm build
pnpm preview
pnpm lint
```

TypeScript 7 is installed as `@typescript/native`; the `typescript` dependency
uses the TypeScript 6 compatibility package for tools such as `typescript-eslint`
that have not yet added TypeScript 7 support.

## Content Updates

Most copy lives here:

- `src/data/data.ts` (homepage/about/projects data)
- `src/data/seo.ts` (meta descriptions)
- `src/data/impressum.json` and `src/data/datenschutz.json` (legal pages)

## License

MIT - see `LICENSE`.
