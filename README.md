# Nor

Mission: TBD — see NOR-1.

Generic engineering bootstrap (NOR-2). Next.js 15 + TypeScript on Vercel, with GitHub Actions CI.

## Quickstart (under 10 minutes)

Requirements: Node 22 (`nvm use`), pnpm 10 (`corepack enable`).

```bash
git clone <this-repo-url> nor
cd nor
cp .env.example .env.local
pnpm install
pnpm dev
```

Open http://localhost:3000. Health check: http://localhost:3000/api/health.

## Scripts

- `pnpm dev` — local dev server
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — ESLint
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm test` — Vitest unit tests
- `pnpm format` — Prettier write

## Deploy

`main` is auto-deployed by Vercel on push. CI (lint + typecheck + test + build)
runs on every push and PR via GitHub Actions; merges should wait on green CI.

## Stack

See [`docs/stack.md`](./docs/stack.md).
