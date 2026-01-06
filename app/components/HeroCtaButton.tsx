'use client';

import { trackHeroCtaClick } from '../lib/analytics';

interface HeroCtaButtonProps {
  href: string;
  children: React.ReactNode;
  source?: 'hero' | 'final-cta';
  className?: string;
}

export default function HeroCtaButton({ 
  href, 
  children, 
  source = 'hero',
  className = '' 
}: HeroCtaButtonProps) {
  const handleClick = () => {
    trackHeroCtaClick(source);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={source === 'hero' ? 'Join the early access waitlist' : 'Join the waitlist'}
    >
      {children}
    </a>
  );
}

