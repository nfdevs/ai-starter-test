/**
 * Localized analytics tracking utility
 * Tracks events without third-party services
 */

export type AnalyticsEvent = 
  | 'hero_cta_click'
  | 'waitlist_signup'
  | 'waitlist_form_view'
  | 'scroll_depth'
  | 'how_it_works_view';

interface TrackEventOptions {
  event: AnalyticsEvent;
  metadata?: Record<string, any>;
}

/**
 * Track an analytics event
 */
export async function trackEvent({ event, metadata }: TrackEventOptions): Promise<void> {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ event, metadata }),
    });
  } catch (error) {
    // Fail silently in production, but log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Analytics tracking failed:', error);
    }
  }
}

/**
 * Track hero CTA click
 */
export function trackHeroCtaClick(source: 'hero' | 'final-cta' = 'hero'): void {
  trackEvent({
    event: 'hero_cta_click',
    metadata: { source },
  });
}

/**
 * Track waitlist signup conversion
 */
export function trackWaitlistSignup(source: string): void {
  trackEvent({
    event: 'waitlist_signup',
    metadata: { source },
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  trackEvent({
    event: 'scroll_depth',
    metadata: { depth },
  });
}

