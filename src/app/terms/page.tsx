import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'ASK Security London terms of service. Terms and conditions for using our security services.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-10 md:py-16">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Terms of Service</li>
            </ol>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold">Terms of Service</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-6 text-sm">Last updated: January 2026</p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              By using ASK Security London (Ask Prime Security Ltd) services, you agree to these Terms.
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">2. Services</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              We provide manned guarding, mobile patrols, key holding, alarm response, event security, door supervision, and close protection.
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">3. Pricing & Payment</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              Prices are subject to written confirmation. Payment terms are specified in your service agreement.
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">4. Liability & Insurance</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              We maintain comprehensive insurance. Liability is limited to our insurance policy terms.
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">5. Governing Law</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              These Terms are governed by the laws of England and Wales.
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">6. Contact</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Ask Prime Security Ltd, 3rd Floor, 86-90 Paul Street, London, EC2A 4NE<br />
              Email: contact@asksecurity.co.uk | Phone: +44 7476 058050
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
