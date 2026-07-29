export const dynamic = "force-static";

export function GET() {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://amitesh2022.github.io/belleza-salon-indore";
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
