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
              2. Use of Information
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Your information is used for:
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
              Contact us at support@silvercrest.com to exercise these rights.
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
              Email: support@silvercrest.com<br />
              Address: C/O Manak Coworking Space, 2nd Floor, Opp. New Power House, New Power House Road, Jodhpur, Rajasthan - 342001, India
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
