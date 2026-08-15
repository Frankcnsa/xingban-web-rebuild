import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Talk to your personal AI companion.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Get health guidance, scam alerts, daily reminders, and a friendly chat — all in one place.
            Designed for life after 50.
          </p>
          <p className="mt-3 text-base text-primary font-medium">
            Your AI Companion for a Safer, Brighter Life
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/auth/register"
              className="rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
            >
              Sign Up Free
            </Link>
            <Link
              href="/about"
              className="rounded-lg border-2 border-primary px-8 py-3 text-base font-medium text-primary transition-colors hover:bg-primary-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Everything you need, nothing you don't
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-gray-200 p-8 text-center transition-shadow hover:shadow-lg">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900">AI Scam Shield</h3>
              <p className="mt-3 text-base text-gray-600">
                Real-time tips to spot scams and stay safe online. Our AI helps you identify
                suspicious messages, calls, and websites before they harm you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-gray-200 p-8 text-center transition-shadow hover:shadow-lg">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900">Daily Wellness</h3>
              <p className="mt-3 text-base text-gray-600">
                Gentle health reminders and simple wellness advice. Stay on track with medication
                reminders, hydration prompts, and daily activity suggestions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-gray-200 p-8 text-center transition-shadow hover:shadow-lg">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900">Friendly Chat</h3>
              <p className="mt-3 text-base text-gray-600">
                A companion who listens, remembers, and cares. Ask questions, share your day,
                or just have a conversation. No judgment, always here for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Basic */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-700">Basic</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-gray-900">$9.99</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-2 text-base text-gray-600">
                <li>✅ AI Chat with Clara</li>
                <li>✅ Daily Scam Alerts</li>
                <li>✅ Basic Health Reminders</li>
              </ul>
              <Link
                href="/auth/register"
                className="mt-6 inline-block rounded-lg border-2 border-primary px-6 py-2 text-base font-medium text-primary transition-colors hover:bg-primary-50"
              >
                Get Started
              </Link>
            </div>

            {/* Plus */}
            <div className="rounded-xl border-2 border-primary bg-white p-8 text-center shadow-lg">
              <div className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Plus</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-gray-900">$14.99</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-2 text-base text-gray-600">
                <li>✅ Everything in Basic</li>
                <li>✅ Health Tracking</li>
                <li>✅ Priority Support</li>
              </ul>
              <Link
                href="/auth/register"
                className="mt-6 inline-block rounded-lg bg-primary px-6 py-2 text-base font-medium text-white transition-colors hover:bg-primary-700"
              >
                Get Started
              </Link>
            </div>

            {/* Family */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-700">Family</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-gray-900">$24.99</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-2 text-base text-gray-600">
                <li>✅ Up to 5 family members</li>
                <li>✅ All Plus features</li>
                <li>✅ Family Activity Dashboard</li>
              </ul>
              <Link
                href="/auth/register"
                className="mt-6 inline-block rounded-lg border-2 border-primary px-6 py-2 text-base font-medium text-primary transition-colors hover:bg-primary-50"
              >
                Get Started
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            All prices in USD. Cancel anytime. 14-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Start your free trial today
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Join thousands of users who trust AIProcurer for safety, health, and companionship.
          </p>
          <Link
            href="/auth/register"
            className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
          >
            Sign Up Free
          </Link>
        </div>
      </section>
    </>
  );
}
