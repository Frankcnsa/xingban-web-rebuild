export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About AIProcurer</h1>
        
        <div className="prose prose-lg text-gray-700">
          <p className="text-xl leading-relaxed mb-6">
            AIProcurer believes everyone deserves a companion in the digital age. We connect older
            adults with AI-powered tools that protect, assist, and accompany them through daily life.
          </p>
          
          <p className="mb-6">
            Founded in 2025, our mission is to make AI accessible for everyone, regardless of age
            or tech experience. We believe that technology should serve people, not the other way
            around.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h2>
          <p className="mb-6">
            In a world where scams target vulnerable populations and isolation affects millions of
            seniors, we see an opportunity to use AI as a force for good. Our platform provides:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Protection:</strong> Real-time scam detection and alerts</li>
            <li><strong>Assistance:</strong> Health reminders and daily guidance</li>
            <li><strong>Companionship:</strong> A friendly AI that listens and cares</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Team</h2>
          <p className="mb-6">
            Our team is dedicated to creating technology that respects human dignity while embracing
            the power of artificial intelligence. We come from diverse backgrounds in healthcare,
            technology, and elder care.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Values</h2>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">We prioritize user security and privacy in everything we build.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">Technology should be simple enough for anyone to use.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">We design with empathy, understanding real user needs.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">Clear pricing, honest communication, no hidden fees.</p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions? We'd love to hear from you.
            </p>
            <a
              href="mailto:support@aiprocurer.com"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
