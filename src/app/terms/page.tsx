'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms & <span className="font-serif italic" style={{color: '#D6B98C'}}>Conditions</span>
          </h1>
          <p className="text-sm font-light" style={{color: '#6B6B6B'}}>
            Effective Date: May 2026 | Governing Law: India
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
              1. Agreement to Terms
            </h2>
            <p className="font-light leading-relaxed">
              By accessing and using Silvercrest Commerce's website, you accept and agree to be bound by these Terms & Conditions. These terms are applicable to all users, visitors, and others who access the site. If you do not agree to abide by these terms, please do not use this service.
            </p>
            <p className="font-light leading-relaxed mt-4">
              These Terms govern your purchase and use of our products, the use of our website, and any services offered through the site. They form the entire agreement between you and Silvercrest Commerce regarding your use of the website and supersede any prior agreements or communications.
            </p>
            <p className="font-light leading-relaxed mt-4">
              We may update these Terms from time to time to reflect changes in our business, legal requirements, or online practices. Updated terms will be posted on this page with a revised effective date. Continued use of the website following any changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              2. Product Availability & Pricing
            </h2>
            <p className="font-light leading-relaxed mb-4">
              All products are subject to availability. Silvercrest Commerce reserves the right to:
            </p>
            <p className="font-light leading-relaxed mt-4">
              Pricing displayed on the website is for informational purposes and may be updated to reflect supply chain costs, seasonal offers, or changes in taxation. Prices shown at checkout are the final prices for your order; however, in rare cases of pricing errors, we reserve the right to cancel orders and notify customers promptly.
            </p>
            <p className="font-light leading-relaxed mt-4">
              Taxes, duties and other government levies may apply depending on your delivery address. Where applicable, such charges will be computed and displayed during checkout. Shipping and handling charges are calculated separately and will be clearly displayed before you confirm payment.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Discontinue any product at any time</li>
              <li>• Modify product specifications without prior notice</li>
              <li>• Revise prices at any time without notice</li>
              <li>• Limit quantities available for purchase</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Prices displayed on our website are in INR (Indian Rupees). All prices are subject to change without notice.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              3. User Responsibility
            </h2>
            <p className="font-light leading-relaxed mb-4">
              You are responsible for providing accurate information when placing orders, including:
            </p>
            <p className="font-light leading-relaxed mt-4">
              Please ensure that the shipping address, contact number and any special delivery instructions are correct. Incorrect or incomplete addresses may lead to delivery delays or additional charges. It is your responsibility to review your order confirmation and notify us of any discrepancies as soon as possible.
            </p>
            <p className="font-light leading-relaxed mt-4">
              Customers are expected to inspect products upon delivery. Any damage or missing parts should be reported within the timeframe specified in our refund and shipping policies to ensure timely resolution. Failure to report issues may limit the remedies available.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Correct name, address, and contact information</li>
              <li>• Valid payment details</li>
              <li>• Accurate communication of special requirements</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Silvercrest Commerce is not responsible for delays or incorrect deliveries resulting from inaccurate customer information.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              4. Fraudulent Activity
            </h2>
            <p className="font-light leading-relaxed">
              Any attempt at fraudulent activity, including unauthorized payment methods, misrepresentation of identity, or chargebacks without legitimate cause, will result in account termination, legal action, and reporting to relevant authorities.
            </p>
            <p className="font-light leading-relaxed mt-4">
              We maintain monitoring and anti-fraud measures and may refuse or cancel orders where fraud is suspected. In such cases we may request additional identity verification and documentation prior to fulfilling an order.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              5. Intellectual Property Rights
            </h2>
            <p className="font-light leading-relaxed mb-4">
              All content on this website, including text, images, designs, logos, and product descriptions, is protected by copyright and intellectual property laws. Unauthorized reproduction, modification, or distribution is strictly prohibited.
            </p>
            <p className="font-light leading-relaxed mt-4">
              Product images and design elements are either owned by Silvercrest Commerce or used under licence from partners and artists. You may not use our images for commercial purposes without prior written permission.
            </p>
            <p className="font-light leading-relaxed mt-4">
              You may view and print portions of the website for your personal, non-commercial use, provided you retain all copyright and other proprietary notices. Any suggestion or feedback you provide may be used without restriction.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              6. Limitation of Liability
            </h2>
            <p className="font-light leading-relaxed">
              To the fullest extent permitted by law, Silvercrest Commerce shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or products purchased through it, even if advised of the possibility of such damages.
            </p>
            <p className="font-light leading-relaxed mt-4">
              Our total liability for any direct damages arising from or in connection with your purchase or use of our services shall be limited to the amount you paid for the product in question. This limitation applies regardless of the cause of action.
            </p>
            <p className="font-light leading-relaxed mt-4">
              Nothing in these Terms limits liability for gross negligence, willful misconduct, or death or personal injury caused by our proven negligence to the extent such liability cannot be excluded under applicable law.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              7. Governing Law
            </h2>
            <p className="font-light leading-relaxed">
              These Terms & Conditions are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these terms shall be brought exclusively in the courts of India.
            </p>
            <p className="font-light leading-relaxed mt-4">
              If any provision of these Terms is found to be invalid, illegal or unenforceable, the remaining provisions shall remain in full force and effect. The parties shall seek to replace any invalid provision with a valid one that reflects the original intent.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              8. Contact Information
            </h2>
            <p className="font-light leading-relaxed">
              For inquiries regarding these Terms & Conditions, contact:<br /><br />
              <strong style={{color: '#B8925A'}}>Silvercrest Commerce (OPC) Private Limited</strong><br />
              Email: info@silvercrestcommerce.com<br />
              Address: C/O Manak Coworking Space, 2nd Floor, Opp. New Power House, New Power House Road, Jodhpur, Rajasthan - 342001, India
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
