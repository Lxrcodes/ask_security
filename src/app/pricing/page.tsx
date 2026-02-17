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
      <section className="bg-black text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Pricing</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              Security Guard Pricing
            </h1>
            <p className="text-base md:text-xl text-gray-300">
              Transparent pricing. All rates include SIA-licensed guards and insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 text-center">Manned Security Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-4 md:p-6 ${
                  tier.popular ? 'bg-black text-white ring-2 ring-[#FF8C00]' : 'bg-[#F5F5F5] text-black'
                }`}
              >
                {tier.popular && (
                  <div className="text-center mb-3">
                    <span className="bg-[#FF8C00] text-white text-xs font-bold px-2 py-1 rounded-full">POPULAR</span>
                  </div>
                )}
                <h3 className="text-base md:text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-3">
                  <span className="text-2xl md:text-3xl font-bold">{tier.price}</span>
                  <span className={tier.popular ? 'text-gray-400' : 'text-gray-500'}> {tier.unit}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {tier.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start text-xs md:text-sm">
                      <svg className="w-4 h-4 text-[#FF8C00] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-2 px-4 rounded font-semibold text-sm transition-colors ${
                    tier.popular ? 'bg-[#FF8C00] text-white hover:bg-[#E67E00]' : 'bg-black text-white hover:bg-gray-800'
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
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 text-center">Additional Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <div key={service.service} className="bg-white rounded-lg p-3 md:p-4">
                <h3 className="font-bold text-black text-sm mb-1">{service.service}</h3>
                <span className="text-[#FF8C00] font-bold text-sm">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-8 md:py-16 bg-black text-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {['SIA-Licensed', 'DBS Checked', '£10M Insurance', '24/7 Support'].map((item) => (
              <div key={item} className="flex items-center justify-center text-sm">
                <svg className="w-4 h-4 text-[#FF8C00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-3">Ready for a Quote?</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">No-obligation quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447476058050" className="bg-[#FF8C00] text-white py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="bg-black text-white py-3 px-6 rounded font-semibold hover:bg-gray-800 transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
