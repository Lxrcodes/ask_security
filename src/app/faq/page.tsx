import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about ASK Security services, pricing, guard qualifications, service areas, and more.',
};

const faqCategories = [
  {
    category: 'General',
    faqs: [
      { question: 'What areas do you cover?', answer: 'We cover London and the South East, including all London boroughs, Surrey, Kent, Essex, and Hertfordshire.' },
      { question: 'Are your guards SIA licensed?', answer: 'Yes, all guards hold valid SIA licenses and are DBS checked before deployment.' },
      { question: 'Do you offer 24/7 services?', answer: 'Yes, we provide 24/7 manned guarding, mobile patrols, key holding, and alarm response.' },
      { question: 'How quickly can you deploy guards?', answer: 'Planned requirements need 24-48 hours notice. Emergency deployments can be arranged within hours.' },
    ],
  },
  {
    category: 'Pricing',
    faqs: [
      { question: 'How much do security guards cost?', answer: 'Standard guards start from £14-17/hour. Contact us for a detailed quote based on your requirements.' },
      { question: 'Do you offer free quotes?', answer: 'Yes, we provide free, no-obligation quotes for all services.' },
      { question: 'Are there minimum contract periods?', answer: 'We offer flexible terms including ad-hoc security for one-off events or short-term needs.' },
    ],
  },
  {
    category: 'Qualifications',
    faqs: [
      { question: 'What training do guards receive?', answer: 'All guards complete SIA-approved training covering conflict resolution, first aid, fire safety, and customer service.' },
      { question: 'Are guards DBS checked?', answer: 'Yes, all personnel undergo enhanced DBS checks before joining our team.' },
      { question: 'Can you provide experienced guards?', answer: 'Yes, we match guards to assignments based on relevant experience in retail, construction, events, or hospitality.' },
    ],
  },
  {
    category: 'Insurance & Compliance',
    faqs: [
      { question: 'Are you properly insured?', answer: 'Yes, we carry £10M public liability, employer\'s liability, and professional indemnity insurance.' },
      { question: 'What certifications do you hold?', answer: 'We are SIA Approved Contractors, ACT certified, and our key holding is BS7984 compliant.' },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#e8821e]">FAQ</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 font-display uppercase tracking-wide">Frequently Asked Questions</h1>
            <p className="text-base md:text-xl text-gray-300">
              Answers to common questions about our security services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.category} className={categoryIndex > 0 ? 'mt-8 pt-8 border-t' : ''}>
                <h2 className="text-lg md:text-2xl font-bold text-black mb-4 font-display uppercase tracking-wide">{category.category}</h2>
                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className="bg-paper-2 rounded-lg p-4 group">
                      <summary className="font-medium text-black cursor-pointer flex items-center justify-between text-sm md:text-base">
                        <span className="pr-4">{faq.question}</span>
                        <svg className="w-4 h-4 text-[#e8821e] transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-paper-2">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-3 font-display uppercase tracking-wide">Still Have Questions?</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">Our team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447476058050" className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="bg-ink text-white py-3 px-6 rounded font-semibold hover:bg-ink-2 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
