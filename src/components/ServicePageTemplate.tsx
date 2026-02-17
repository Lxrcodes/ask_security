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
      <section className="relative bg-black text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="container-custom relative z-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">{title}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {title} in London & South East
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+447476058050" className="btn-primary py-4 px-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 24/7: +44 7476 058050
              </a>
              <Link href="/contact" className="btn-secondary bg-white text-black border-white hover:bg-transparent hover:text-white">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF8C00] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need This Service */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">When You Need This Service</h2>
              <ul className="space-y-4">
                {whenYouNeed.map((scenario, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-[#FF8C00] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{scenario}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Need Immediate Security?</h3>
              <p className="text-gray-300 mb-6">
                Our team is available 24/7 for emergency security deployment. Contact us now for rapid response.
              </p>
              <a href="tel:+447476058050" className="btn-primary w-full justify-center">
                Call Now: +44 7476 058050
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Our Approach</h2>
          <div className="space-y-6">
            {approach.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guidance */}
      {pricingFrom && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="bg-black text-white rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
                  <p className="text-4xl font-bold text-[#FF8C00] mb-2">{pricingFrom}</p>
                  <p className="text-gray-400 mb-6">Custom quotes based on your specific requirements</p>
                  <h3 className="font-semibold mb-3">What affects pricing:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Number of guards required</li>
                    <li>• Duration and frequency of service</li>
                    <li>• Location and site complexity</li>
                    <li>• Specific security requirements</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Link href="/contact" className="btn-primary text-xl py-5 px-8 w-full md:w-auto">
                    Request a Detailed Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-black cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-[#FF8C00] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-[#F5F5F5] rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-semibold text-black mb-2 group-hover:text-[#FF8C00] transition-colors">
                  {service.name}
                </h3>
                <span className="text-[#FF8C00] text-sm font-medium">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to discuss your {title.toLowerCase()} needs?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447476058050" className="btn-primary py-4 px-8">
              Call 24/7: +44 7476 058050
            </a>
            <Link href="/contact" className="btn-secondary bg-white text-black border-white hover:bg-transparent hover:text-white">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
