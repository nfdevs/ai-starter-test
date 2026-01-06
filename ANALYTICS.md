# Analytics Tracking

## Overview

This project includes a localized analytics system that tracks key conversion metrics without requiring third-party services. All analytics data is stored locally in JSON files.

## Tracked Events

### 1. Hero CTA Clicks (`hero_cta_click`)
- Tracks when users click the primary "Join the Early Access Waitlist" button in the hero section
- Metadata includes: `source` ('hero' or 'final-cta')

### 2. Waitlist Signups (`waitlist_signup`)
- Tracks successful waitlist form submissions (conversions)
- Metadata includes: `source` (where the signup originated)

### 3. Scroll Depth (`scroll_depth`)
- Tracks user engagement by monitoring scroll milestones
- Tracks at: 25%, 50%, 75%, 90%, 100% scroll depth
- Metadata includes: `depth` (percentage)

## Storage Location

Analytics events are stored in:

```
/data/analytics.json
```

This file is automatically created when the first event is tracked.

## File Format

The `analytics.json` file contains an array of events:

```json
[
  {
    "event": "hero_cta_click",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "metadata": {
      "source": "hero"
    },
    "userAgent": "Mozilla/5.0...",
    "referer": "https://example.com"
  },
  {
    "event": "waitlist_signup",
    "timestamp": "2024-01-15T10:31:00.000Z",
    "metadata": {
      "source": "hero-cta"
    }
  }
]
```

## API Endpoints

### POST `/api/analytics`

Track a new analytics event.

**Request Body:**
```json
{
  "event": "hero_cta_click",
  "metadata": {
    "source": "hero"
  }
}
```

**Response:**
```json
{
  "success": true,
  "location": "/path/to/data/analytics.json"
}
```

### GET `/api/analytics`

View analytics data and summary statistics.

**Query Parameters:**
- `event` (optional): Filter by event type (e.g., `?event=hero_cta_click`)

**Response:**
```json
{
  "summary": {
    "totalEvents": 150,
    "eventCounts": {
      "hero_cta_click": 100,
      "waitlist_signup": 25,
      "scroll_depth": 25
    },
    "heroCtaClicks": 100,
    "waitlistConversions": 25,
    "conversionRate": "25.00"
  },
  "events": [...],
  "location": "/path/to/data/analytics.json"
}
```

## Key Metrics

The analytics system automatically calculates:

- **Total Events**: Total number of tracked events
- **Hero CTA Clicks**: Number of hero button clicks
- **Waitlist Conversions**: Number of successful signups
- **Conversion Rate**: Percentage of CTA clicks that result in signups

## Viewing Analytics

### During Development

1. Start the dev server: `bun dev` or `npm run dev`
2. Visit: `http://localhost:3000/api/analytics`
3. Or check the file directly: `cat data/analytics.json`

### Filter by Event Type

View only hero CTA clicks:
```
http://localhost:3000/api/analytics?event=hero_cta_click
```

View only conversions:
```
http://localhost:3000/api/analytics?event=waitlist_signup
```

## Usage in Code

### Track Hero CTA Click

```typescript
import { trackHeroCtaClick } from '@/app/lib/analytics';

trackHeroCtaClick('hero'); // or 'final-cta'
```

### Track Waitlist Signup

```typescript
import { trackWaitlistSignup } from '@/app/lib/analytics';

trackWaitlistSignup('hero-cta');
```

### Track Custom Event

```typescript
import { trackEvent } from '@/app/lib/analytics';

trackEvent({
  event: 'custom_event',
  metadata: { key: 'value' }
});
```

## Performance

- Events are tracked asynchronously and won't block the UI
- The analytics file is limited to the last 10,000 events to prevent excessive growth
- Failed tracking attempts fail silently in production

## Privacy

- No third-party services are used
- All data is stored locally
- No cookies or tracking pixels
- User IP addresses are not stored
- Only event type, timestamp, and optional metadata are recorded

## Production Considerations

For production use, consider:

1. **Database**: Migrate from JSON files to a proper database (PostgreSQL, MongoDB)
2. **Rate Limiting**: Add rate limiting to prevent abuse
3. **Data Retention**: Implement data retention policies
4. **Aggregation**: Pre-aggregate metrics for faster queries
5. **Backup**: Set up automated backups of analytics data
6. **Privacy Compliance**: Ensure GDPR/CCPA compliance if applicable

