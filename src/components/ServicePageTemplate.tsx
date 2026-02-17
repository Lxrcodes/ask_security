import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  heroDescription: string;
  benefits: string[];
  whenYouNeed: string[];
  approach: string[];
  faqs: FAQ[];
  relatedServices: { name: string; href: string }[];
  pricingFrom?: string;
}

export default function ServicePageTemplate({
  title,
  description,
  heroDescription,
  benefits,
  whenYouNeed,
  approach,
  faqs,
  relatedServices,
  pricingFrom,
}: ServicePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-10 md:py-20">
        <div className="container-custom relative z-10">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">{title}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              {title}
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+447476058050" className="bg-[#FF8C00] text-white py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors text-center">
                Call 24/7
              </a>
              <Link href="/contact" className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors text-center">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-3xl font-bold text-black mb-4">Overview</h2>
            <p className="text-sm md:text-base text-gray-700">{description}</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-start">
                <svg className="w-5 h-5 text-[#FF8C00] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-black mb-4">When You Need This</h2>
              <ul className="space-y-2">
                {whenYouNeed.map((scenario, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base">
                    <svg className="w-4 h-4 text-[#FF8C00] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{scenario}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black text-white rounded-lg p-4 md:p-6">
              <h3 className="font-bold mb-2">Need Immediate Security?</h3>
              <p className="text-gray-300 text-sm mb-4">24/7 emergency deployment available.</p>
              <a href="tel:+447476058050" className="bg-[#FF8C00] text-white py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors block text-center">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4">Our Approach</h2>
          <div className="space-y-3 max-w-4xl">
            {approach.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base text-gray-700">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {pricingFrom && (
        <section className="py-8 md:py-16 bg-white">
          <div className="container-custom">
            <div className="bg-black text-white rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Pricing</h2>
                  <p className="text-2xl md:text-3xl font-bold text-[#FF8C00] mb-2">{pricingFrom}</p>
                  <p className="text-gray-400 text-sm">Custom quotes based on your requirements</p>
                </div>
                <div className="text-center md:text-right">
                  <Link href="/contact" className="bg-[#FF8C00] text-white py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors inline-block">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6">FAQ</h2>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-4 group">
                <summary className="font-medium text-black cursor-pointer flex items-center justify-between text-sm md:text-base">
                  {faq.question}
                  <svg className="w-4 h-4 text-[#FF8C00] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-[#F5F5F5] rounded-lg p-4 hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-semibold text-black text-sm md:text-base group-hover:text-[#FF8C00]">
                  {service.name}
                </h3>
                <span className="text-[#FF8C00] text-xs md:text-sm">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3">Ready to discuss your needs?</h2>
          <p className="text-sm md:text-base text-gray-300 mb-6">Free consultation and no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447476058050" className="bg-[#FF8C00] text-white py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
