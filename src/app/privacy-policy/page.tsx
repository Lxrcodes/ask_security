import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ASK Security London privacy policy. Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              ASK Security London (trading name of Ask Prime Security Ltd, Company No. 16436890) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways:</p>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">Personal Data</h3>
            <p className="text-gray-700 mb-4">
              When you contact us or request a quote, we may collect personally identifiable information such as your name, email address, telephone number, company name, and any other information you choose to provide.
            </p>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Prepare and send quotes for our services</li>
              <li>Fulfill and manage orders and contracts</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Disclosure of Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If required by law or in response to valid legal process</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              <li><strong>Service Providers:</strong> With third parties that perform services for us or on our behalf</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Security of Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use administrative, technical, and physical security measures to protect your personal information. However, no transmission over the Internet or electronic storage is completely secure.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
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
