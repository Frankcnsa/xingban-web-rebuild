export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-lg text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            AIProcurer is committed to protecting your privacy in compliance with GDPR (EU) and CCPA (California).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information You Provide:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name and email address</li>
            <li>Password (stored securely using hashing)</li>
            <li>Subscription and payment details</li>
            <li>Chat messages</li>
            <li>Contact form submissions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information Collected Automatically:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Usage data and interaction patterns</li>
            <li>Device information and IP address</li>
            <li>Log data and analytics</li>
            <li>Cookies</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and improve our Service</li>
            <li>To process subscriptions and payments</li>
            <li>To generate AI responses via Agnes API</li>
            <li>To communicate with you (support, updates)</li>
            <li>To analyze usage and optimize experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Information Sharing</h2>
          <p>We do <strong>not sell</strong> your personal information. We share data with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Service Providers:</strong> Paddle (payments), Vercel (hosting), Agnes AI (chat), SendGrid (email)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookie Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Necessary Cookies:</strong> Essential for Service operation</li>
            <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
            <li><strong>Preference Cookies:</strong> Remember your settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account data: Retained while account is active</li>
            <li>Chat history: Kept for up to 90 days</li>
            <li>Analytics data: Anonymized after 24 months</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Security</h2>
          <p>
            We use TLS/SSL encryption, access controls, and regular security assessments.
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights (GDPR & CCPA)</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">GDPR Rights:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Right to access, rectify, erase your data</li>
            <li>Right to restrict processing, data portability</li>
            <li>Right to object and withdraw consent</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">CCPA Rights:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Right to know what data we collect</li>
            <li>Right to deletion, opt-out of sale</li>
          </ul>

          <p>Exercise these rights: privacy@aiprocurer.com</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact</h2>
          <p>privacy@aiprocurer.com</p>
        </div>
      </div>
    </div>
  );
}
