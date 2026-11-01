// Medição da landing. Os eventos só são enviados quando o visitante deu consentimento
// (localStorage "dabi-analytics-consent" = "granted") e não ativou "Do Not Track".
// Sem consentimento, nada é gravado nem enviado. Os eventos vão para window.dataLayer,
// que pode ser lido por GTM, GA4 ou outra ferramenta quando ela for adicionada.

type Params = Record<string, string | undefined>;
type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export function hasConsent(): boolean {
  try {
    if (navigator.doNotTrack === "1") return false;
    return window.localStorage.getItem("dabi-analytics-consent") === "granted";
  } catch {
    return false;
  }
}

export function readUtm(): Params {
  const query = new URLSearchParams(window.location.search);
  const utm: Params = {};
  for (const key of UTM_KEYS) {
    const value = query.get(key);
    if (value) utm[key] = value.slice(0, 100);
  }
  return utm;
}

export function track(event: string, params: Params = {}): void {
  if (!hasConsent()) return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...readUtm(), ...params });
}
