import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about ASK Security services, pricing, guard qualifications, service areas, and more. Find answers to your security questions.',
};

const faqCategories = [
  {
    category: 'General Questions',
    faqs: [
      {
        question: 'What areas do you cover?',
        answer: 'We provide security services throughout London and the South East of England, including all London boroughs, Surrey, Kent, Essex, and Hertfordshire. Contact us to confirm coverage for your specific location.',
      },
      {
        question: 'Are your security guards SIA licensed?',
        answer: 'Yes, all our security guards hold valid SIA (Security Industry Authority) licenses appropriate to their role. Door supervisors hold SIA Door Supervisor licenses, and close protection officers hold SIA Close Protection licenses. We verify all licenses before deployment.',
      },
      {
        question: 'Do you offer 24/7 security services?',
        answer: 'Yes, we provide 24/7 security services including manned guarding, mobile patrols, key holding, and alarm response. Our control room is staffed around the clock, and we can deploy guards at any time of day or night.',
      },
      {
        question: 'How quickly can you deploy security guards?',
        answer: 'For planned requirements, we typically need 24-48 hours notice. For emergency situations, we can often deploy guards within a few hours. Contact us with your requirements and we will do our best to accommodate.',
      },
    ],
  },
  {
    category: 'Pricing & Quotes',
    faqs: [
      {
        question: 'How much do security guards cost?',
        answer: 'Rates vary depending on the type of service, number of guards required, and duration. Standard security guards typically start from £14-17 per hour, while specialist services like close protection have different pricing structures. Contact us for a detailed quote tailored to your requirements.',
      },
      {
        question: 'Do you offer free quotes?',
        answer: 'Yes, we provide free, no-obligation quotes for all security services. We can often provide indicative pricing over the phone, with detailed quotes following a site visit or security assessment if required.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfer, corporate cards, and can set up monthly invoicing for ongoing contracts. Payment terms are discussed when setting up your account.',
      },
      {
        question: 'Are there minimum contract periods?',
        answer: 'We offer flexible contract terms. While some clients prefer ongoing contracts, we also provide ad-hoc security for one-off events or short-term requirements. We will discuss the best arrangement for your needs.',
      },
    ],
  },
  {
    category: 'Guard Qualifications',
    faqs: [
      {
        question: 'What training do your guards receive?',
        answer: 'All guards complete SIA-approved training courses and ongoing professional development. Training covers conflict resolution, first aid, fire safety, emergency procedures, customer service, and role-specific skills. Many of our guards also have backgrounds in police, military, or specialist security roles.',
      },
      {
        question: 'Are your guards DBS checked?',
        answer: 'Yes, all security personnel undergo enhanced DBS (Disclosure and Barring Service) checks before joining our team. We maintain up-to-date records and conduct regular re-checks as required.',
      },
      {
        question: 'Can you provide guards with specific experience?',
        answer: 'Yes, we match guards to assignments based on experience and skills. Whether you need guards with retail experience, construction site knowledge, event security expertise, or hospitality backgrounds, we have suitable personnel available.',
      },
      {
        question: 'Do your guards speak languages other than English?',
        answer: 'We have guards who speak various languages. If you require multilingual guards for your location, let us know your requirements and we will do our best to accommodate.',
      },
    ],
  },
  {
    category: 'Service Areas',
    faqs: [
      {
        question: 'What response time can I expect for alarm callouts?',
        answer: 'Our typical response times are 15-20 minutes for Central London, 20-30 minutes for Greater London, and 30-45 minutes for surrounding areas. Exact times depend on location and traffic conditions.',
      },
      {
        question: 'Do you provide security outside London?',
        answer: 'Yes, we cover the South East of England including Surrey, Kent, Essex, and Hertfordshire. For locations further afield, contact us to discuss your requirements.',
      },
      {
        question: 'Can you secure multiple sites?',
        answer: 'Absolutely. We provide multi-site security for businesses with multiple locations. Mobile patrols are particularly cost-effective for covering several sites, and we can design patrol routes to maximize efficiency.',
      },
    ],
  },
  {
    category: 'Emergency Services',
    faqs: [
      {
        question: 'What happens if I have an emergency outside business hours?',
        answer: 'Our control room is staffed 24/7. For emergencies, call our main number and you will be connected to an operator who can dispatch guards immediately or provide guidance.',
      },
      {
        question: 'Can you provide same-day security?',
        answer: 'In many cases, yes. If you have an urgent security requirement, contact us immediately and we will do everything possible to accommodate. We maintain a pool of available guards for emergency deployments.',
      },
      {
        question: 'What should I do if I discover intruders on my property?',
        answer: 'Do not confront intruders yourself. Leave the area if safe to do so and call 999 for police assistance. Then contact us for immediate security support and to prevent further incidents.',
      },
    ],
  },
  {
    category: 'Licensing & Insurance',
    faqs: [
      {
        question: 'Are you properly insured?',
        answer: 'Yes, we carry comprehensive insurance including public liability cover up to £10 million, employer\'s liability insurance, and professional indemnity insurance. Insurance certificates are available on request.',
      },
      {
        question: 'What is BS7984 compliance?',
        answer: 'BS7984 is the British Standard for key holding and response services. Our key holding service meets this standard, ensuring we follow best practices for key storage, response procedures, and documentation.',
      },
      {
        question: 'What certifications do you hold?',
        answer: 'We are an SIA Approved Contractor and hold ACT (Action Counters Terrorism) certification. Our key holding services are BS7984 compliant. All guards hold valid SIA licenses appropriate to their roles.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">FAQ</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our security services, pricing, qualifications, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.category} className={categoryIndex > 0 ? 'mt-12 pt-12 border-t' : ''}>
                <h2 className="text-2xl font-bold text-black mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className="bg-[#F5F5F5] rounded-lg p-6 group">
                      <summary className="font-semibold text-black cursor-pointer flex items-center justify-between">
                        <span className="pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-[#FF8C00] transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-gray-700">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447476058050" className="btn-primary py-4 px-8">
              Call: +44 7476 058050
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
