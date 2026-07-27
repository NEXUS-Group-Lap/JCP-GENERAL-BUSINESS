// Ambient Cloudflare Worker bindings for this project. Extends the global
// `Env` used by Worker handler signatures and the `Cloudflare.Env` used by
// `cloudflare:workers`' `env` export (see db/index.ts) so both stay in sync.
interface WorkerBindings {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

declare namespace Cloudflare {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging target for `cloudflare:workers`' `env` export
  interface Env extends WorkerBindings {}
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging target for Worker handler `env` parameters
interface Env extends WorkerBindings {}
