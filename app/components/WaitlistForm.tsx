'use client';

import { useState, FormEvent } from 'react';

interface WaitlistFormProps {
  source?: string;
  className?: string;
}

export default function WaitlistForm({ source = 'page', className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks! You\'re on the waitlist.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:max-w-md sm:mx-auto">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 rounded-full border border-[#d1d5db] bg-white px-6 py-4 text-base text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'error-message' : undefined}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="rounded-full bg-[#4a90e2] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#3a7bc8] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
        </button>
      </div>
      {message && (
        <p
          id={status === 'error' ? 'error-message' : undefined}
          className={`mt-4 text-sm ${
            status === 'error' ? 'text-red-600' : 'text-green-600'
          }`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </form>
  );
}

