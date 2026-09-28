/**
 * Fiverse Systems Analytics & Telemetry Engine
 * Privacy-respecting client analytics with zero PII leakage.
 * Dispatches to dataLayer (Google Tag Manager / GA4) and custom browser events.
 */

export type AnalyticsEventName =
  | 'start_project_click'
  | 'view_work_click'
  | 'talk_to_ai_expert_click'
  | 'service_view'
  | 'case_study_view'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'calendar_booking'
  | 'email_click'
  | 'phone_click'
  | 'linkedin_click'
  | 'guide_download_click'
  | 'article_read_click';

export interface UTMParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

// In-memory cache of initial landing and UTM parameters
let cachedUTM: UTMParameters | null = null;

export const getSessionAttribution = (): UTMParameters => {
  if (cachedUTM) return cachedUTM;

  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const attribution: UTMParameters = {
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
      referrer: document.referrer || undefined,
      landing_page: window.location.pathname
    };

    // Store in sessionStorage for session persistence if available
    try {
      const stored = sessionStorage.getItem('fiverse_attribution');
      if (stored) {
        cachedUTM = JSON.parse(stored);
        return cachedUTM!;
      }
      sessionStorage.setItem('fiverse_attribution', JSON.stringify(attribution));
    } catch {
      // Storage unavailable or disabled
    }

    cachedUTM = attribution;
    return attribution;
  } catch {
    return {};
  }
};

/**
 * Dispatches a typed conversion or engagement event.
 * Never forwards personal information like email, phone, or message body.
 */
export const trackEvent = (
  eventName: AnalyticsEventName,
  eventProperties: Record<string, string | number | boolean | undefined> = {}
): void => {
  if (typeof window === 'undefined') return;

  const attribution = getSessionAttribution();
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...attribution,
    ...eventProperties
  };

  // 1. Google Tag Manager / GA4 dataLayer
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // 2. Direct gtag if mounted
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  // 3. Custom DOM event for decoupled integrations & logging
  try {
    const customEvent = new CustomEvent('fiverse:analytics', { detail: payload });
    window.dispatchEvent(customEvent);
  } catch {
    // CustomEvent dispatch failed
  }

  // Development logger
  if (import.meta.env.DEV) {
    console.debug(`[Analytics Event] ${eventName}`, payload);
  }
};
