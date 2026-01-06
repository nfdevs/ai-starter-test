# Waitlist Signup Storage

## Location

Waitlist signups are stored locally in a JSON file at:

```
/data/waitlist.json
```

This file is automatically created when the first signup is received.

## File Format

The `waitlist.json` file contains an array of signup entries:

```json
[
  {
    "email": "user@example.com",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "source": "hero-cta"
  },
  {
    "email": "another@example.com",
    "timestamp": "2024-01-15T11:45:00.000Z",
    "source": "final-cta"
  }
]
```

## API Endpoints

### POST `/api/waitlist`

Submit a new waitlist signup.

**Request Body:**
```json
{
  "email": "user@example.com",
  "source": "hero-cta" // optional
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "location": "/path/to/data/waitlist.json"
}
```

**Response (Error):**
```json
{
  "error": "Email already registered"
}
```

### GET `/api/waitlist`

View all waitlist entries (for development/testing).

**Response:**
```json
{
  "count": 2,
  "entries": [...],
  "location": "/path/to/data/waitlist.json"
}
```

## Security Note

The `/data` directory is excluded from git (see `.gitignore`). In production, consider:
- Using a proper database (PostgreSQL, MongoDB, etc.)
- Adding rate limiting to prevent abuse
- Implementing email verification
- Adding CAPTCHA to prevent bots

## Development

To view signups during development:

1. Start the dev server: `bun dev` or `npm run dev`
2. Visit: `http://localhost:3000/api/waitlist`
3. Or check the file directly: `cat data/waitlist.json`

