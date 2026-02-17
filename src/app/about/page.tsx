import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ASK Security London - 20+ years protecting London businesses with SIA-licensed, ex-police and ex-military security professionals. Company #16436890.',
};

const certifications = [
  {
    name: 'SIA Approved Contractor',
    description: 'Approved by the Security Industry Authority for our high standards of operation, management, and training.',
  },
  {
    name: 'ACT Certified',
    description: 'Action Counters Terrorism certified, with staff trained to identify and respond to terrorist threats.',
  },
  {
    name: 'BS7984 Compliant',
    description: 'Our key holding services meet the British Standard for key holding and response services.',
  },
  {
    name: 'Fully Insured',
    description: 'Comprehensive public liability insurance up to £10M, providing complete peace of mind for our clients.',
  },
];

const coverageAreas = [
  'Central London',
  'North London',
  'South London',
  'East London',
  'West London',
  'City of London',
  'Westminster',
  'Camden',
  'Islington',
  'Hackney',
  'Tower Hamlets',
  'Southwark',
  'Lambeth',
  'Greater London',
  'Surrey',
  'Kent',
  'Essex',
  'Hertfordshire',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">About Us</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About ASK Security - Protecting London for 20+ Years
            </h1>
            <p className="text-xl text-gray-300">
              Professional security services delivered by SIA-licensed, ex-police and ex-military professionals who understand what it takes to keep people and property safe.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                ASK Security was founded with a simple mission: to provide professional, reliable security services that businesses and individuals can trust. With over two decades of experience protecting London and the South East, we have grown from a small team to one of the region&apos;s most respected security providers.
              </p>
              <p>
                Our growth has been built on a foundation of professionalism, integrity, and exceptional service. We believe that effective security is about more than just having guards on site—it&apos;s about having the right people, with the right training, deployed in the right way.
              </p>
              <p>
                Today, ASK Security provides comprehensive security solutions for businesses of all sizes, from small retail shops to major construction projects, from intimate private events to large public gatherings. Whatever your security needs, we have the expertise and resources to protect what matters most to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Ex-Police & Ex-Military Professionals</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Our security team is drawn from some of the most demanding backgrounds in security and protection. Many of our officers have served in the police, military, or specialist security services, bringing invaluable experience and training to every assignment.
                </p>
                <p>
                  This background means our team understands threat assessment, situational awareness, and emergency response at the highest level. But it also means they bring discipline, professionalism, and a commitment to service that sets ASK Security apart.
                </p>
                <p>
                  Every member of our team is SIA-licensed and DBS-checked. They receive ongoing training in the latest security techniques, customer service, and emergency procedures to ensure they deliver the highest standards of protection and professionalism.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Our Standards</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF8C00] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All officers SIA-licensed and DBS-checked</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF8C00] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular training and professional development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF8C00] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>First aid and emergency response trained</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF8C00] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conflict resolution and de-escalation skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF8C00] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customer service excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Certifications & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-[#F5F5F5] rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-black mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Coverage Areas</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            We provide security services throughout London and the South East of England, covering all major areas and boroughs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {coverageAreas.map((area) => (
              <span
                key={area}
                className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/coverage-areas" className="text-[#FF8C00] font-medium hover:underline">
              View Full Coverage Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="font-bold text-black mb-4">Legal Details</h3>
                <dl className="space-y-2 text-gray-700">
                  <div>
                    <dt className="text-sm text-gray-500">Trading Name</dt>
                    <dd className="font-medium">ASK Security London</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Registered Name</dt>
                    <dd className="font-medium">Ask Prime Security Ltd</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Company Number</dt>
                    <dd className="font-medium">16436890</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="font-bold text-black mb-4">Registered Address</h3>
                <address className="text-gray-700 not-italic">
                  3rd Floor<br />
                  86-90 Paul Street<br />
                  London<br />
                  EC2A 4NE
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for experienced, SIA-licensed security professionals to join our team.
            If you share our commitment to professionalism and excellence, we&apos;d like to hear from you.
          </p>
          <Link href="/contact" className="btn-primary py-4 px-8">
            Contact Us About Opportunities
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your security requirements. We provide free consultations and no-obligation quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447476058050" className="btn-primary py-4 px-8">
              Call: +44 7476 058050
            </a>
            <Link href="/contact" className="btn-secondary">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
