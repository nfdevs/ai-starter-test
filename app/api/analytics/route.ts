import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { join } from 'path';

interface AnalyticsEvent {
  event: string;
  timestamp: string;
  metadata?: Record<string, any>;
  userAgent?: string;
  referer?: string;
}

const DATA_DIR = join(process.cwd(), 'data');
const ANALYTICS_FILE = join(DATA_DIR, 'analytics.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist, that's fine
  }
}

// Read existing analytics events
async function readAnalytics(): Promise<AnalyticsEvent[]> {
  try {
    await ensureDataDir();
    const data = await readFile(ANALYTICS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Write analytics events
async function writeAnalytics(events: AnalyticsEvent[]): Promise<void> {
  await ensureDataDir();
  await writeFile(ANALYTICS_FILE, JSON.stringify(events, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, metadata } = body;

    if (!event || typeof event !== 'string') {
      return NextResponse.json(
        { error: 'Event name is required' },
        { status: 400 }
      );
    }

    // Read existing events
    const events = await readAnalytics();

    // Create new event
    const newEvent: AnalyticsEvent = {
      event,
      timestamp: new Date().toISOString(),
      metadata: metadata || {},
      userAgent: request.headers.get('user-agent') || undefined,
      referer: request.headers.get('referer') || undefined,
    };

    events.push(newEvent);

    // Keep only last 10,000 events to prevent file from growing too large
    const trimmedEvents = events.slice(-10000);

    // Write back to file
    await writeAnalytics(trimmedEvents);

    return NextResponse.json(
      { 
        success: true,
        location: ANALYTICS_FILE 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to view analytics (for development/testing)
export async function GET(request: NextRequest) {
  try {
    const events = await readAnalytics();
    const { searchParams } = new URL(request.url);
    const eventType = searchParams.get('event');

    let filteredEvents = events;
    if (eventType) {
      filteredEvents = events.filter((e) => e.event === eventType);
    }

    // Calculate summary statistics
    const summary = {
      totalEvents: events.length,
      eventCounts: events.reduce((acc, e) => {
        acc[e.event] = (acc[e.event] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      heroCtaClicks: events.filter((e) => e.event === 'hero_cta_click').length,
      waitlistConversions: events.filter((e) => e.event === 'waitlist_signup').length,
      conversionRate: events.filter((e) => e.event === 'hero_cta_click').length > 0
        ? (events.filter((e) => e.event === 'waitlist_signup').length / 
           events.filter((e) => e.event === 'hero_cta_click').length * 100).toFixed(2)
        : '0.00',
    };

    return NextResponse.json({
      summary,
      events: filteredEvents,
      location: ANALYTICS_FILE,
    });
  } catch (error) {
    console.error('Analytics read error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

