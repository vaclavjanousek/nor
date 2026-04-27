export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    ok: true,
    sha: process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GITHUB_SHA ?? "dev",
    ts: new Date().toISOString(),
  });
}
