import * as Sentry from "@sentry/nextjs";

// Erros do navegador vão para o Sentry (projeto dabitech-institucional), que avisa por e-mail e pelo app.
// O DSN é público por natureza (vai no JavaScript do site); NEXT_PUBLIC_SENTRY_DSN sobrescreve.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "https://eb16c3d79b71189f02a7522be76181b1@o4511998804819968.ingest.us.sentry.io/4512503800987648",
  // Em desenvolvimento nada vai para o Sentry: HMR e erros de hidratação só geram ruído.
  enabled: process.env.NODE_ENV !== "development",
  tracesSampleRate: 0.1,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
