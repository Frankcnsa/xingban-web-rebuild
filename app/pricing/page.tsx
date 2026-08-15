import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    period: '/mo',
    description: 'Perfect for getting started',
    features: ['AI Chat with Clara', 'Daily Scam Alerts', 'Basic Health Reminders', 'Email Support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Plus',
    price: '$14.99',
    period: '/mo',
    description: 'Our most popular plan',
    features: [
      'Everything in Basic',
      'Advanced Health Tracking',
      'Priority Support',
      'Custom Reminders',
      'Family Sharing (2 members)',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Family',
    price: '$24.99',
    period: '/mo',
    description: 'Protect your whole family',
    features: [
      'Everything in Plus',
      'Up to 5 family members',
      'Family Activity Dashboard',
      'Dedicated Account Manager',
      'Advanced Security Features',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that works best for you. All prices in USD.
          </p>
          <p className="mt-2 text-sm text-gray-500">14-day money-back guarantee · Cancel anytime</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-primary bg-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="my-4">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-lg">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-base text-gray-700">
                    <span className="text-accent font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/register"
                className={`block w-full rounded-lg py-3 text-center text-base font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-700'
                    : 'border-2 border-primary text-primary hover:bg-primary-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">We offer a 14-day money-back guarantee. If you're not satisfied, get a full refund.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">How do I cancel?</h3>
              <p className="text-gray-600">You can cancel anytime from your account settings. No questions asked.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/auth/register"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-primary-700"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}
