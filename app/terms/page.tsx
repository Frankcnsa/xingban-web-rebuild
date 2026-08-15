export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-lg text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the AIProcurer platform (&quot;Service&quot;), you agree to be
            bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p>
            AIProcurer provides an AI-powered personal assistant platform offering health guidance,
            scam alerts, daily reminders, and conversational companionship for users aged 50+.
          </p>
          <p className="font-medium text-red-600">
            IMPORTANT: AIProcurer does not provide medical advice, diagnosis, or treatment.
            Always consult qualified healthcare professionals for medical concerns.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
          <p>
            You must create an account to use certain features. You are responsible for
            maintaining the confidentiality of your credentials and for all activities under
            your account. AIProcurer reserves the right to suspend accounts that violate
            these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Subscriptions and Payment</h2>
          <p>
            Plans: Basic ($9.99/mo), Plus ($14.99/mo), Family ($24.99/mo). Billed through Paddle.
            Subscription fees are non-refundable except as provided in our Refund Policy.
            Prices may change with 30 days&apos; written notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Refund Policy</h2>
          <p>
            14-day money-back guarantee. Contact support@aiprocurer.com within 14 days of purchase.
            Refunds processed within 5-10 business days. See our full Refund Policy for details.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Service for illegal purposes</li>
            <li>Transmit harmful, threatening, or defamatory content</li>
            <li>Attempt to access other users&apos; accounts</li>
            <li>Reverse engineer or modify the Service</li>
            <li>Use the Service to harm minors or vulnerable populations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
          <p>
            All content, trademarks, and materials are owned by or licensed to AIProcurer.
            You retain ownership of your content but grant us a license to use it to provide the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimer</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND.
            AIProcurer does not guarantee the accuracy or completeness of AI-generated responses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIProcurer&apos;S TOTAL LIABILITY SHALL NOT EXCEED
            THE AMOUNT PAID BY YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h2>
          <p>
            We may terminate accounts for Terms violations. You may cancel anytime via account settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact</h2>
          <p>Questions? Email support@aiprocurer.com.</p>
        </div>
      </div>
    </div>
  );
}
