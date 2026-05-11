'use client';

import { motion } from 'framer-motion';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{backgroundColor: '#F8F5F0'}}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-4" style={{color: '#B8925A'}}>
            Logistics
          </p>
          <h1 className="text-6xl font-light mb-4" style={{color: '#1F1F1F'}}>
            Shipping <span className="font-serif italic" style={{color: '#D6B98C'}}>Policy</span>
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
              1. Delivery Coverage
            </h2>
            <p className="font-light leading-relaxed mb-4">
              <strong style={{color: '#B8925A'}}>Pan India Delivery</strong>
            </p>
            <p className="font-light leading-relaxed">
              Silvercrest Commerce provides delivery services across India. We partner with trusted logistics providers to ensure safe and timely delivery of your furniture to any address within India.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              2. Processing Timeline
            </h2>
            <p className="font-light leading-relaxed mb-4">
              After order placement:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• <strong style={{color: '#B8925A'}}>Processing Time:</strong> 1–3 business days</li>
              <li>• Orders are carefully inspected and prepared for shipping</li>
              <li>• Tracking information will be sent to your registered email</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              3. Delivery Estimates
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Standard delivery timeframe after shipment:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• <strong style={{color: '#B8925A'}}>Delivery Time:</strong> 4–10 business days</li>
              <li>• Metro cities: 4–6 business days</li>
              <li>• Tier 2 & Tier 3 cities: 6–10 business days</li>
              <li>• Remote/hilly areas: May take up to 15 business days</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              These estimates are based on normal conditions and may vary.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              4. Shipping Updates
            </h2>
            <p className="font-light leading-relaxed mb-4">
              You will receive:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Order confirmation email immediately after purchase</li>
              <li>• Shipment notification with tracking link</li>
              <li>• Regular delivery updates via email and SMS</li>
              <li>• Delivery confirmation upon arrival</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              5. Delays & Unforeseen Circumstances
            </h2>
            <p className="font-light leading-relaxed mb-4">
              While we strive for on-time delivery, delays may occur due to:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Logistics partner delays or vehicle breakdowns</li>
              <li>• Adverse weather conditions</li>
              <li>• Natural disasters or emergencies</li>
              <li>• Unexpected circumstances beyond our control</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              In such cases, we will notify you promptly and provide updated delivery estimates.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              6. Shipping Costs
            </h2>
            <p className="font-light leading-relaxed mb-4">
              Shipping costs are calculated based on:
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Product size and weight</li>
              <li>• Destination location</li>
              <li>• Distance from warehouse</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Shipping charges will be clearly displayed before checkout. We offer occasional promotional free shipping offers.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              7. Contact Support
            </h2>
            <p className="font-light leading-relaxed">
              For shipping-related inquiries, contact:<br /><br />
              <strong style={{color: '#B8925A'}}>Silvercrest Commerce Logistics Support</strong><br />
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
