import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN ?? "https://eb16c3d79b71189f02a7522be76181b1@o4511998804819968.ingest.us.sentry.io/4512503800987648",
  // Em desenvolvimento nada vai para o Sentry.
  enabled: process.env.NODE_ENV !== "development",
  tracesSampleRate: 0.1,
});
