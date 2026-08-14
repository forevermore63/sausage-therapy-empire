import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode for reliable Vercel deploy without peer dependency conflicts
  ssr: false,
} satisfies Config;
