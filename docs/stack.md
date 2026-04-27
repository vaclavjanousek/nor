# Stack

Bootstrap stack chosen for NOR-2. Boring, proven, low-friction commit → live URL.

## Choices

| Layer        | Pick                          | Why                                                      |
| ------------ | ----------------------------- | -------------------------------------------------------- |
| Language     | TypeScript                    | Type safety, broad hire pool                             |
| Framework    | Next.js 15 (App Router)       | SSR + SPA + API in one box; Vercel-native                |
| Runtime      | Node 22 LTS                   | Current LTS                                              |
| Pkg manager  | pnpm 10                       | Fast, deterministic, monorepo-ready                      |
| Lint/Format  | ESLint (next preset) + Prettier | Standard                                                 |
| Tests        | Vitest                        | Fast, ESM-first, Jest-compatible API                     |
| CI           | GitHub Actions                | Free for public repos, native to GitHub                  |
| Hosting      | Vercel (Hobby)                | Git-push-to-deploy, zero infra, free tier                |
| Repo host    | GitHub                        | Default                                                  |

## Trade-offs

- Next.js + Vercel is the lowest-friction path. If product direction turns out
  to be CLI-only, mobile, or a heavy backend service in another language, we
  swap before features land. Sunk cost is hours, not days.
- Vercel Hobby is free up to fair-use; production traffic later may need Pro
  ($20/seat/mo). Will flag before any paid upgrade.
- Drop-in alt deploy targets if Vercel becomes undesirable: Cloudflare Pages,
  Fly.io, Netlify.

## Deferred until product direction lands

- Database, auth provider, payment stack
- UI kit, analytics, feature-flag service
- Staging environments beyond Vercel's free branch previews
