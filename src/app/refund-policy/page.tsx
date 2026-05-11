'use client';

import { motion } from 'framer-motion';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{backgroundColor: '#F8F5F0'}}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-4" style={{color: '#B8925A'}}>
            Customer Support
          </p>
          <h1 className="text-6xl font-light mb-4" style={{color: '#1F1F1F'}}>
            Refund <span className="font-serif italic" style={{color: '#D6B98C'}}>Policy</span>
          </h1>
          <p className="text-sm font-light" style={{color: '#6B6B6B'}}>
            Effective Date: May 2026
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
              1. Refund Eligibility
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Refunds are available only for the following conditions:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Damaged or defective products upon delivery</li>
              <li>• Incorrect items shipped (not matching order)</li>
              <li>• Missing components or accessories</li>
              <li>• Manufacturing defects discovered within 7 days of delivery</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              2. Refund Request Window
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Refund requests must be initiated within <strong style={{color: '#B8925A'}}>7 days of delivery</strong>. Requests submitted after 7 days will not be eligible for refunds, though product replacement may be considered.
            </p>
            <p className="font-light leading-relaxed">
              To request a refund, contact our support team with:
            </p>
            <ul className="space-y-2 ml-6 font-light mt-3">
              <li>• Order number</li>
              <li>• Detailed description of the issue</li>
              <li>• High-quality photographs of the damage/defect</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              3. Verification Process
            </h2>
            <p className="font-light leading-relaxed mb-4">
              All refund claims are subject to verification. Our team will:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Review photographic evidence</li>
              <li>• Assess the validity of the claim</li>
              <li>• Contact you for clarification if needed</li>
              <li>• Approve or deny the refund request</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Verification typically takes 2-3 business days.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              4. Refund Processing Timeline
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Once a refund is approved:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• A prepaid return label will be provided</li>
              <li>• You must ship the item within 3 business days</li>
              <li>• Upon receipt and verification, refund will be processed</li>
              <li>• Refund will be credited within <strong style={{color: '#B8925A'}}>5–7 working days</strong></li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Refund amount depends on the condition of the product upon return.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              5. Non-Refundable Items
            </h2>
            <p className="font-light leading-relaxed mb-4">
              The following items are NOT eligible for refunds:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Customized or made-to-order furniture (unless defective)</li>
              <li>• Items with signs of regular use or wear</li>
              <li>• Products damaged due to misuse or accidents</li>
              <li>• Items returned without original packaging or accessories</li>
              <li>• Clearance or final-sale items</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              6. Contact Support
            </h2>
            <p className="font-light leading-relaxed">
              For refund-related inquiries, contact:<br /><br />
              <strong style={{color: '#B8925A'}}>Silvercrest Commerce Support</strong><br />
              Email: support@silvercrest.com<br />
              Phone: [+91-XXXX-XXXX-XXX]<br />
              Business Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
