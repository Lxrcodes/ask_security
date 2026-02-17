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
      <section className="bg-black text-white py-10 md:py-16">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-6 text-sm">
              Last updated: January 2026
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">Introduction</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              ASK Security London (Ask Prime Security Ltd, Company No. 16436890) is committed to protecting your privacy.
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">Information We Collect</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              We collect information you provide (name, email, phone) and automatically collected data (IP address, browser type).
            </p>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-3 space-y-1 text-sm md:text-base">
              <li>Respond to inquiries and provide quotes</li>
              <li>Fulfill and manage contracts</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">Your Rights (UK GDPR)</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-3 space-y-1 text-sm md:text-base">
              <li>Access, correct, or delete your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-lg md:text-2xl font-bold text-black mt-6 mb-3">Contact Us</h2>
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
