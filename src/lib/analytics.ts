// Google Analytics (GA4) initialization.
// The measurement ID is provided by the Google Analytics connector as
// VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY. Until it is linked,
// analytics stays disabled and the app works normally.

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

let initialized = false;

export function initAnalytics() {
  if (initialized) return;
  const measurementId = import.meta.env
    .VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;
  if (!measurementId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  gtag("js", new Date());
  gtag("config", measurementId);
  initialized = true;
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!initialized || !window.dataLayer) return;
  window.dataLayer.push(["event", name, params ?? {}]);
}
