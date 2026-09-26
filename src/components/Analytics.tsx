import { useEffect } from 'react';

/**
 * Privacy-friendly analytics placeholder.
 *
 * This is a lightweight, consent-based pageview tracker that respects
 * Do Not Track and does not set cookies. Replace the no-op trackPageView
 * function with your analytics provider integration (Plausible,
 * Umami, PostHog, etc.) when ready.
 */
export function trackPageView(path: string) {
  if (typeof window === 'undefined') return;

  const dnt = navigator.doNotTrack || (window as unknown as { doNotTrack?: string }).doNotTrack;
  if (dnt === '1' || dnt === 'yes') return;

  // Placeholder: integrate your privacy-friendly analytics here.
  // Example for Plausible: window.plausible('pageview', { url: path })
  // Example for Umami: umami.trackView(path)
}

export function Analytics() {
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return null;
}
