import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Guard Pricing',
  description: 'Security guard service pricing in London. Transparent pricing for manned guarding, mobile patrols, event security & more. Get a free quote from ASK Security.',
};

const pricingTiers = [
  {
    name: 'Standard Security',
    price: 'From £14',
    unit: 'per hour',
    description: 'Professional security for general premises protection',
    features: [
      'SIA-licensed security guards',
      'Uniformed presence',
      'Access control',
      'Regular patrols',
      'Incident reporting',
      'Basic first aid trained',
    ],
    ideal: 'Warehouses, industrial sites, car parks',
    popular: false,
  },
  {
    name: 'Corporate Security',
    price: 'From £16',
    unit: 'per hour',
    description: 'Enhanced security with customer service focus',
    features: [
      'All Standard features',
      'Professional appearance',
      'Visitor management',
      'Reception duties',
      'CCTV monitoring',
      'Emergency response trained',
    ],
    ideal: 'Offices, retail, hotels, reception areas',
    popular: true,
  },
  {
    name: 'Specialist Security',
    price: 'From £18',
    unit: 'per hour',
    description: 'Specialist skills for demanding environments',
    features: [
      'All Corporate features',
      'Event-specific training',
      'Crowd management',
      'VIP awareness',
      'Conflict resolution',
      'Industry-specific experience',
    ],
    ideal: 'Events, film productions, high-profile venues',
    popular: false,
  },
];

const additionalServices = [
  {
    service: 'Mobile Patrols',
    price: 'From £12 per visit',
    description: 'Scheduled patrol visits to your property',
  },
  {
    service: 'Key Holding & Alarm Response',
    price: 'From £15 per response',
    description: 'Secure key holding and rapid alarm response',
  },
  {
    service: 'Door Supervisors',
    price: 'From £16 per hour',
    description: 'Licensed door staff for venues',
  },
  {
    service: 'Close Protection',
    price: 'From £350 per day',
    description: 'Personal protection for individuals',
  },
];

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
    description: 'Sites in central London or remote locations may have adjusted pricing',
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
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Pricing</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Security Guard Service Pricing
            </h1>
            <p className="text-xl text-gray-300">
              Transparent, competitive pricing for professional security services.
              All rates include SIA-licensed guards and comprehensive insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Manned Security Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-6 ${
                  tier.popular
                    ? 'bg-black text-white ring-2 ring-[#FF8C00]'
                    : 'bg-[#F5F5F5] text-black'
                }`}
              >
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-[#FF8C00] text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className={tier.popular ? 'text-gray-400' : 'text-gray-500'}> {tier.unit}</span>
                </div>
                <p className={`text-sm mb-6 ${tier.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${tier.popular ? 'text-[#FF8C00]' : 'text-[#FF8C00]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-sm mb-6 ${tier.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                  <strong>Ideal for:</strong> {tier.ideal}
                </p>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-4 rounded font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-[#FF8C00] text-white hover:bg-[#E67E00]'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <div key={service.service} className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-black">{service.service}</h3>
                  <span className="text-[#FF8C00] font-bold">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">What Affects Pricing?</h2>
            <p className="text-gray-600 text-center mb-8">
              Security pricing is tailored to your specific requirements. Here are the main factors that influence quotes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingFactors.map((item) => (
                <div key={item.factor} className="bg-[#F5F5F5] rounded-lg p-6">
                  <h3 className="font-bold text-black mb-2">{item.factor}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">What&apos;s Included in All Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'SIA-Licensed Guards',
                'DBS Background Checks',
                '£10M Insurance Cover',
                'Incident Reporting',
                'Uniform & Equipment',
                'Management Support',
                '24/7 Control Room',
                'No Hidden Fees',
              ].map((item) => (
                <div key={item} className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FF8C00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Ready for a Detailed Quote?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us with your requirements and we&apos;ll provide a detailed, no-obligation quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447476058050" className="btn-primary py-4 px-8">
              Call: +44 7476 058050
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
