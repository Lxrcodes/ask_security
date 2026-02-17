import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ASK Security London - 20+ years protecting London businesses with SIA-licensed, ex-police and ex-military security professionals. Company #16436890.',
};

const certifications = [
  { name: 'SIA Approved', description: 'Approved by the Security Industry Authority' },
  { name: 'ACT Certified', description: 'Action Counters Terrorism certified' },
  { name: 'BS7984 Compliant', description: 'British Standard for key holding' },
  { name: 'Fully Insured', description: '£10M public liability insurance' },
];

const coverageAreas = [
  'Central London', 'North London', 'South London', 'East London', 'West London',
  'City of London', 'Westminster', 'Greater London', 'Surrey', 'Kent', 'Essex', 'Hertfordshire',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">About Us</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              About ASK Security
            </h1>
            <p className="text-base md:text-xl text-gray-300">
              20+ years protecting London with SIA-licensed, ex-police and ex-military professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-3xl font-bold text-black mb-4">Our Story</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700">
              <p>
                ASK Security was founded to provide professional, reliable security services that businesses and individuals can trust. With over two decades protecting London and the South East, we&apos;ve grown into one of the region&apos;s most respected providers.
              </p>
              <p>
                Today, we provide comprehensive security solutions for businesses of all sizes, from retail shops to major construction projects, from private events to large public gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-black mb-3">Ex-Police & Ex-Military</h2>
              <div className="space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Our team is drawn from demanding backgrounds—police, military, and specialist security services—bringing invaluable experience to every assignment.
                </p>
                <p>
                  Every member is SIA-licensed and DBS-checked, receiving ongoing training in security techniques, customer service, and emergency procedures.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-4 md:p-6">
              <h3 className="font-bold mb-3 md:mb-4">Our Standards</h3>
              <ul className="space-y-2 text-sm">
                {['SIA-licensed & DBS-checked', 'Regular training', 'First aid trained', 'Conflict resolution', 'Customer service excellence'].map((item) => (
                  <li key={item} className="flex items-center">
                    <svg className="w-4 h-4 text-[#FF8C00] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 text-center">Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-[#F5F5F5] rounded-lg p-4 text-center">
                <h3 className="font-bold text-black text-sm md:text-base mb-1">{cert.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4 text-center">Coverage Areas</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {coverageAreas.map((area) => (
              <span key={area} className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs md:text-sm border border-gray-200">
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/coverage-areas" className="text-[#FF8C00] font-medium hover:underline text-sm">
              View Full Coverage →
            </Link>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-black mb-6 text-center">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5F5F5] rounded-lg p-4">
                <h3 className="font-bold text-black mb-2 text-sm md:text-base">Legal Details</h3>
                <dl className="space-y-1 text-sm text-gray-700">
                  <div><dt className="text-xs text-gray-500">Trading Name</dt><dd>ASK Security London</dd></div>
                  <div><dt className="text-xs text-gray-500">Registered Name</dt><dd>Ask Prime Security Ltd</dd></div>
                  <div><dt className="text-xs text-gray-500">Company Number</dt><dd>16436890</dd></div>
                </dl>
              </div>
              <div className="bg-[#F5F5F5] rounded-lg p-4">
                <h3 className="font-bold text-black mb-2 text-sm md:text-base">Registered Address</h3>
                <address className="text-sm text-gray-700 not-italic">
                  3rd Floor, 86-90 Paul Street<br />
                  London, EC2A 4NE
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3">Ready to Work With Us?</h2>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Free consultations and no-obligation quotes.
          </p>
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
