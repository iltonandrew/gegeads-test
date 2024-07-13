import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
google.com, pub-2097704436920678, DIRECT, f08c47fec0942fa0
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
