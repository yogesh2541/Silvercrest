'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{backgroundColor: '#F8F5F0'}}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-4" style={{color: '#B8925A'}}>
            Legal
          </p>
          <h1 className="text-6xl font-light mb-4" style={{color: '#1F1F1F'}}>
            Privacy <span className="font-serif italic" style={{color: '#D6B98C'}}>Policy</span>
          </h1>
          <p className="text-sm font-light" style={{color: '#6B6B6B'}}>
            Effective Date: May 2026 | Last Updated: May 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
          style={{color: '#6B6B6B'}}
        >
          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              1. Data Collection
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Silvercrest Commerce collects information necessary to process your orders, improve our services, and communicate with you about your purchases. This includes:
            </p>
              <p className="font-light leading-relaxed mt-4">
                We collect information to ensure accurate order fulfilment, improve product recommendations, and personalise your experience. We endeavour to collect only the data necessary for these purposes and retain it only as long as required for legal, tax, or business needs.
              </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Personal Information: Name, email address, phone number, shipping address</li>
              <li>• Payment Information: Processed securely through authorized payment gateways</li>
              <li>• Order Details: Product preferences, purchase history, delivery information</li>
              <li>• Device Information: IP address, browser type, pages visited (for analytics)</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              8. Data Sources & Legal Basis
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We collect personal data directly from you when you interact with our website, register an account, place an order, subscribe to marketing communications, or contact customer support. We may also obtain data from third parties such as payment providers and logistics partners.
            </p>
            <p className="font-light leading-relaxed mt-2">
              Our primary legal bases for processing personal data include performance of a contract (order fulfilment), legitimate interests (fraud prevention, product improvement), and consent (marketing communications). Where special consent is required by local law, we will obtain it before processing.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              9. International Transfers & Processing
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Some of our third-party providers may process or store data in jurisdictions outside India. When this occurs, we implement appropriate safeguards such as standard contractual clauses, data processing agreements, and other technical and organisational measures to protect your rights.
            </p>
            <p className="font-light leading-relaxed mt-2">
              If you are located in a jurisdiction with data transfer restrictions, contact us to request further details about the safeguards applied to your data transfers.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              10. Automated Decisions & Profiling
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We may use automated systems to personalise product recommendations and email content. These automated processes use non-sensitive data and are intended to improve customer experience. We do not use automated decision-making that produces legal effects concerning you.
            </p>
            <p className="font-light leading-relaxed mt-2">
              If you have concerns about profiling or automated processing, contact us and we will explain the logic involved and review your preferences.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              11. Data Retention & Deletion
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We retain personal data only for as long as necessary to fulfil the purposes described in this policy, to comply with legal obligations, to resolve disputes, and to enforce our agreements.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Transactional/order data: retained for at least 7 years for tax and legal compliance.</li>
              <li>• Account data: retained while your account is active and for a reasonable period after account closure.</li>
              <li>• Marketing consents: retained until you withdraw consent.</li>
              <li>• Analytics data: aggregated and anonymized for long-term analysis; raw logs are retained for a limited period.</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              To request deletion of personal data beyond what is required for legal or business needs, contact us and we will guide you through the verification and deletion process.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              12. How to Exercise Your Rights (Step-by-Step)
            </h2>
            <ol className="space-y-2 ml-6 font-light">
              <li>1. Identify the right you wish to exercise (access, correction, deletion, portability, objection).</li>
              <li>2. Send a request to info@silvercrestcommerce.com including your order number and registered email/phone.</li>
              <li>3. We will verify your identity to protect your privacy (this may require a copy of the order confirmation or ID).</li>
              <li>4. We will respond to most verifiable requests within 30 days. If more time is required, we will inform you with a justification.</li>
            </ol>
            <p className="font-light leading-relaxed mt-4">
              If you are not satisfied with our response, you may escalate the matter to local data protection authorities as applicable.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              13. Children & Minors
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Our services are not intended for children under the age of 16. We do not knowingly collect personal data from children without parental consent. If you believe a child under 16 has provided us with personal data, contact us to request deletion.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              14. Policy Updates
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on our website with a revised "Last Updated" date and, where appropriate, notify you by email.
            </p>
            <p className="font-light leading-relaxed">
              For questions about this policy or our practices, contact:<br /><br />
              <strong style={{color: '#B8925A'}}>Data Protection Contact</strong><br />
              Email: info@silvercrestcommerce.com<br />
              Phone: +91 93581 43890
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              2. Use of Information
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Your information is used for:
            </p>
              <p className="font-light leading-relaxed mt-4">
                We may use anonymized and aggregated data for analytics and to improve site features. For marketing communications, we will obtain your consent where required and always provide an option to unsubscribe.
              </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Order Processing: Fulfillment, shipping, and delivery</li>
              <li>• Customer Support: Responding to inquiries and providing assistance</li>
              <li>• Marketing Communications: Newsletters and promotional updates (opt-out available)</li>
              <li>• Service Improvement: Analytics and feedback to enhance user experience</li>
              <li>• Legal Compliance: Meeting regulatory and legal obligations</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              3. Third-Party Sharing
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Your information may be shared with trusted partners only when necessary:
            </p>
              <p className="font-light leading-relaxed mt-4">
                When sharing data with service providers, we ensure contractual protections are in place to prevent misuse. Some partners may process data outside India; where this occurs, we apply appropriate safeguards to protect your privacy rights.
              </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Logistics Partners: For order delivery and tracking</li>
              <li>• Payment Processors: Securely handling payment transactions</li>
              <li>• Service Providers: Analytics and customer service support</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              We do NOT sell or share your personal data for marketing purposes without your explicit consent.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              4. Cookies & Analytics
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We use basic analytics cookies to understand how users interact with our website. This helps us improve:
            </p>
              <p className="font-light leading-relaxed mt-4">
                Cookies are used to remember your preferences, keep you signed in, and deliver tailored content. You can manage cookie preferences via your browser settings; please note disabling cookies may affect site functionality.
              </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Website performance and user experience</li>
              <li>• Content relevance and product recommendations</li>
              <li>• Navigation efficiency and site features</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              You can disable cookies in your browser settings, though this may affect site functionality.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              5. Data Protection
            </h2>
            <p className="font-light leading-relaxed">
              Silvercrest Commerce implements industry-standard security measures to protect your data from unauthorized access, alteration, or loss. However, no method of transmission over the internet is 100% secure. We recommend maintaining strong passwords and protecting your account credentials.
            </p>
              <p className="font-light leading-relaxed mt-4">
                We employ encryption for data in transit and secure storage practices for sensitive information. Access to personal data is limited to authorised personnel only and subject to internal controls and periodic audits.
              </p>
              <p className="font-light leading-relaxed mt-4">
                Data retention periods vary by data type; transactional records and tax-related information are retained to comply with legal obligations. If you request deletion, we will remove personal data that is not required for legal or legitimate business purposes.
              </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              6. Your Rights
            </h2>
            <p className="font-light leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Access your personal information stored with us</li>
              <li>• Request corrections or deletions of inaccurate data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Request data portability in a standard format</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Contact us at info@silvercrestcommerce.com to exercise these rights. When submitting a request, include relevant identifiers like order numbers or registered email to help us process your request more quickly.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              7. Contact Us
            </h2>
            <p className="font-light leading-relaxed">
              For privacy-related inquiries, contact:<br /><br />

              <strong style={{color: '#B8925A'}}>Silvercrest Commerce (OPC) Private Limited</strong><br />
              Email: info@silvercrestcommerce.com<br />
              Phone: +91 93581 43890<br />
              Address: C/O Manak Coworking Space, 2nd Floor, Opp. New Power House, New Power House Road, Jodhpur, Rajasthan - 342001, India
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
