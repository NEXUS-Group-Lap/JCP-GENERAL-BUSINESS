import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1"
    ? {
        output: "export",
        // Not using Next's `basePath` here: vinext's static prerenderer
        // requests routes without the basePath prefix, so combining
        // `output: "export"` with `basePath` makes every route 404 during
        // `vinext build`. Subpath hosting (e.g. floresnexus.cards/JCP) is
        // instead handled via the BASE_PATH / NEXT_PUBLIC_BASE_PATH env vars
        // read directly in layout.tsx / page.tsx, plus a post-build rewrite
        // of the framework's own /assets/ references.
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
