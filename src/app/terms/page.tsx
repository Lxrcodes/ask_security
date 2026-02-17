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
      <section className="bg-black text-white py-16">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Terms of Service</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the services of ASK Security London (trading as Ask Prime Security Ltd), you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Services</h2>
            <p className="text-gray-700 mb-4">
              ASK Security provides professional security services including but not limited to manned guarding, mobile patrols, key holding, alarm response, event security, door supervision, and close protection services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Service Agreements</h2>
            <p className="text-gray-700 mb-4">
              All security services are subject to a separate service agreement that specifies the scope of work, pricing, duration, and other relevant terms. These Terms of Service supplement any service agreement.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Pricing and Payment</h2>
            <p className="text-gray-700 mb-4">
              Prices quoted are subject to confirmation in writing. Payment terms are as specified in your service agreement. We reserve the right to suspend services for non-payment.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Cancellation</h2>
            <p className="text-gray-700 mb-4">
              Cancellation terms are specified in your service agreement. Short-notice cancellations may be subject to charges.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Liability</h2>
            <p className="text-gray-700 mb-4">
              ASK Security maintains comprehensive insurance coverage. Our liability is limited to the terms of our insurance policies and as specified in your service agreement.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              We maintain strict confidentiality regarding client information and security arrangements. Our staff are bound by confidentiality agreements.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Website Use</h2>
            <p className="text-gray-700 mb-4">
              This website is provided for informational purposes. While we strive to keep information accurate and up-to-date, we make no representations or warranties about the completeness or accuracy of information on this site.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              Ask Prime Security Ltd<br />
              3rd Floor, 86-90 Paul Street<br />
              London, EC2A 4NE<br />
              Email: contact@asksecurity.co.uk<br />
              Phone: +44 7476 058050
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
