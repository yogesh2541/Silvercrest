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
              <p className="font-light leading-relaxed mt-4">
                We evaluate refund eligibility on a case-by-case basis. Claims must be supported with photographic evidence and a clear description of the issue. For partial damages, we may offer a partial refund or replacement depending on the severity of the defect and availability of replacement parts.
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
              7. Return Shipping Process
            </h2>
            <p className="font-light leading-relaxed mb-4">
              When a return is authorized, we will provide clear instructions for packaging and returning the item. Items should be returned in secure packaging to prevent further damage during transit.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• We will provide a return authorization number and, where applicable, a prepaid return label.</li>
              <li>• Pack all original accessories and documentation with the product.</li>
              <li>• Notify us once the return is dispatched and provide the tracking number for monitoring.</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Customers are responsible for ensuring the return is packed according to the instructions. We are not responsible for damage that occurs due to improper packaging during return transit.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              8. Restocking, Deductions & Partial Refunds
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Refunds may be adjusted for restocking fees, damage discovered upon return, or missing accessories. Partial refunds are applied in situations where the returned product is not in a resaleable condition.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Restocking fees may apply for change-of-mind returns depending on the product category.</li>
              <li>• Deductions for damages that exceed normal inspection wear will be itemized and communicated.</li>
              <li>• In the event of partial refunds, the customer will receive an itemized breakdown of deductions.</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              9. Replacements & Repair Options
            </h2>
            <p className="font-light leading-relaxed mb-4">
              For defective or damaged items, we may offer a repair or replacement instead of a refund where feasible. Repair timelines depend on part availability and the nature of the repair.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Replacement: Issued when an identical item is available in stock.</li>
              <li>• Repair: We may coordinate with manufacturers or authorised service partners to repair defects.</li>
              <li>• If replacement or repair is not possible, a refund will be processed following verification.</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              10. Fraud Prevention, Abuse & Dispute Resolution
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We reserve the right to investigate suspected fraud or abuse of the returns process. Any evidence of fraudulent behaviour may result in denial of the refund and further actions including account suspension.
            </p>
            <p className="font-light leading-relaxed mt-2">
              For disputes, customers should contact support first. If a resolution cannot be reached, parties may pursue mediation or arbitration as described in our Terms and Conditions.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              11. Frequently Asked Questions (Refunds)
            </h2>
            <p className="font-light leading-relaxed mb-3">
              Q: How long will it take to receive my refund?
            </p>
            <p className="font-light leading-relaxed mb-3">
              A: After we receive and verify the returned item, refunds are typically processed within 5–7 working days. The time to reflect in your account depends on the payment provider.
            </p>
            <p className="font-light leading-relaxed mb-3">
              Q: What if the courier loses the return shipment?
            </p>
            <p className="font-light leading-relaxed">
              A: If a prepaid return is lost in transit and we have tracking evidence, we will work with the carrier to trace the parcel and determine next steps which may include reissuing the return label or processing a refund after investigation.
            </p>
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
              <p className="font-light leading-relaxed mt-4">
                To initiate a refund, please contact our support team with your order number and supporting images. We will log your request, provide a return authorization where applicable, and guide you through the return shipping process including the issuance of return labels when appropriate.
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
              <p className="font-light leading-relaxed mt-4">
                We may request additional information, such as proof of purchase, closer photographs, or videos demonstrating the defect. In cases of shipping damage, the courier may be involved in the verification process.
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
              <p className="font-light leading-relaxed mt-4">
                Refunds will be processed to the original payment method where possible. Bank transfer refunds may require additional verification and can take longer to appear in your account depending on the bank.
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
              <p className="font-light leading-relaxed mt-4">
                If an item is returned due to customer change-of-mind and is eligible for return under our terms, a restocking fee may be charged. The item must be returned in original condition with packaging to qualify for any refund.
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
                Email: info@silvercrestcommerce.com<br />
                Phone: +91 93581 43890<br />
              Business Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
