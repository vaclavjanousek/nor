import { describe, expect, it } from "vitest";
import { GET } from "../src/app/api/health/route";

describe("/api/health", () => {
  it("returns ok=true with a sha and timestamp", async () => {
    const res = GET();
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(typeof body.sha).toBe("string");
    expect(typeof body.ts).toBe("string");
  });
});
