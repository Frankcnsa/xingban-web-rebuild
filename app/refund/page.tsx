export default function RefundPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

        <div className="prose prose-lg text-gray-700">
          <div className="bg-accent-50 border-l-4 border-accent p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mt-0">Our 14-Day Money-Back Guarantee</h2>
            <p className="mb-0">
              If you&apos;re not completely satisfied, request a full refund within 14 days of purchase—no questions asked.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Request a Refund</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Send an email to support@aiprocurer.com</li>
            <li>Include your account email and purchase date</li>
            <li>We will respond within 2 business days</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Eligibility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request made within 14 days of purchase</li>
            <li>Request by the account holder</li>
            <li>Subscription obtained legitimately</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Non-Refundable</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Requests made after 14 days</li>
            <li>Consumed subscription benefits</li>
            <li>Fraudulently obtained subscriptions</li>
            <li>Fees incurred after the 14-day period</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processing Time</h2>
          <p>Refunds processed within 5-10 business days via Paddle.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
          <p>support@aiprocurer.com</p>
        </div>
      </div>
    </div>
  );
}
