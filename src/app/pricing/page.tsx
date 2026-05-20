import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Guard Pricing',
  description: 'Competitive security guard pricing across Hertfordshire, Bedfordshire, North London & Central London. Get a free tailored quote from ASK Security.',
};

const pricingFactors = [
  {
    factor: 'Number of Guards',
    description: 'More guards may attract volume discounts for ongoing contracts',
  },
  {
    factor: 'Duration & Frequency',
    description: 'Long-term contracts and regular bookings may have preferential rates',
  },
  {
    factor: 'Location',
    description: 'Your specific location within our coverage area may affect pricing',
  },
  {
    factor: 'Timing',
    description: 'Overnight shifts, weekends, and bank holidays may have premium rates',
  },
  {
    factor: 'Specialist Requirements',
    description: 'Specific skills, experience, or certifications may affect rates',
  },
  {
    factor: 'Site Complexity',
    description: 'Large or complex sites may require additional guards or supervision',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#e8821e]">Pricing</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 font-display uppercase tracking-wide">
              Competitive Pricing
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-8">
              We offer highly competitive pricing tailored to your specific security requirements. Get in touch for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+447476058050" className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-colors text-center">
                Call 24/7
              </a>
              <Link href="/contact" className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors text-center">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get a Quote */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold text-black mb-4 font-display uppercase tracking-wide">Tailored to Your Needs</h2>
            <p className="text-sm md:text-base text-gray-700 mb-8">
              Every security requirement is different. We provide competitive, bespoke pricing based on your specific situation — ensuring you only pay for what you need and receive the best value for your investment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'No Hidden Fees', description: 'Transparent, all-inclusive quotes with no surprises' },
                { title: 'Flexible Contracts', description: 'Short-term and long-term options to suit your requirements' },
                { title: 'Volume Discounts', description: 'Competitive rates for multiple guards or long-term contracts' },
              ].map((item) => (
                <div key={item.title} className="bg-paper-2 rounded-lg p-4 md:p-6">
                  <h3 className="font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Pricing */}
      <section className="py-8 md:py-16 bg-paper-2">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 text-center font-display uppercase tracking-wide">Factors That Affect Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
            {pricingFactors.map((item) => (
              <div key={item.factor} className="bg-white rounded-lg p-4 md:p-6">
                <h3 className="font-bold text-black mb-2 text-sm md:text-base">{item.factor}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-8 md:py-16 bg-ink text-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center font-display uppercase tracking-wide">Always Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {['SIA-Licensed', 'DBS Checked', '£10M Insurance', '24/7 Support'].map((item) => (
              <div key={item} className="flex items-center justify-center text-sm">
                <svg className="w-4 h-4 text-[#e8821e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-paper-2">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-3 font-display uppercase tracking-wide">Ready for Your Free Quote?</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">No-obligation quote within 24 hours. Competitive pricing guaranteed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447476058050" className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="bg-ink text-white py-3 px-6 rounded font-semibold hover:bg-ink-2 transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
