import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { join } from 'path';

interface WaitlistEntry {
  email: string;
  timestamp: string;
  source?: string;
}

const DATA_DIR = join(process.cwd(), 'data');
const WAITLIST_FILE = join(DATA_DIR, 'waitlist.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist, that's fine
  }
}

// Read existing waitlist entries
async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    await ensureDataDir();
    const data = await readFile(WAITLIST_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Write waitlist entries
async function writeWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await ensureDataDir();
  await writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Read existing entries
    const entries = await readWaitlist();

    // Check for duplicate email
    if (entries.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      source: source || 'unknown',
    };

    entries.push(newEntry);

    // Write back to file
    await writeWaitlist(entries);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist',
        location: WAITLIST_FILE 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to view waitlist (for development/testing)
export async function GET() {
  try {
    const entries = await readWaitlist();
    return NextResponse.json({
      count: entries.length,
      entries,
      location: WAITLIST_FILE,
    });
  } catch (error) {
    console.error('Waitlist read error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

