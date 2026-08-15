import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-primary">
              AIProcurer
            </Link>
            <p className="mt-3 text-base text-gray-600">
              Your AI Companion for a Safer, Brighter Life.
              Designed for life after 50.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-base text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-base text-gray-600 hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-800">Contact</h3>
            <p className="text-base text-gray-600">
              Support Email:
              <br />
              <a href="mailto:support@aiprocurer.com" className="text-primary hover:underline">
                support@aiprocurer.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2025 AIProcurer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
