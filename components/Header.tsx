'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          AIProcurer
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link href="/chat" className="text-base text-gray-700 hover:text-primary transition-colors">
            Chat
          </Link>
          <Link href="/pricing" className="text-base text-gray-700 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-base text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-base text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="rounded-lg bg-primary px-5 py-2 text-base font-medium text-white transition-colors hover:bg-primary-700"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
