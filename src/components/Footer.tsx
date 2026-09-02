import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Quote', href: '/quote' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Left — Logo + Tagline */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <AppLogo size={36} />
              <span className="font-display font-semibold text-lg tracking-tight text-foreground">
                Stel LLC
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional lawncare for Conesville, IA and surrounding areas. Every yard, every season.
            </p>
          </div>

          {/* Right — Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Stel LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+15632728491" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Icon name="PhoneIcon" size={14} />
              +1 563 272 8491
            </a>
            <a href="mailto:stelllc1@proton.me" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Icon name="EnvelopeIcon" size={14} />
              stelllc1@proton.me
            </a>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}