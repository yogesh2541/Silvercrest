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
              <p className="font-light leading-relaxed mt-4">
                Our logistics partners are selected based on their experience handling large-format and fragile items. Furniture shipments often include specialized packaging and handling instructions to minimize transit damage. For bulky or high-value items, we may offer white-glove delivery which includes inside delivery and basic assembly for an additional fee.
              </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              8. Packaging & Handling Standards
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We apply industry-standard packaging protocols designed specifically for furniture and large-format items. Each unit is evaluated and packaged according to its shape, material, and fragility.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Multi-layer protection using corrugated boards, bubble wrap, and corner protectors</li>
              <li>• Reinforced crates for delicate or highly valuable pieces</li>
              <li>• Clear labeling for fragile items and orientation markings</li>
              <li>• Instruction slips for carrier handling and assembly notes when required</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              Our packaging standards are regularly reviewed and updated in partnership with logistics specialists to reduce transit damage and ensure safe arrival.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              9. Insurance, Liability & Claims
            </h2>
            <p className="font-light leading-relaxed mb-4">
              We maintain transit insurance for shipments managed by our logistics partners. Insurance coverage, claim thresholds, and procedures vary by shipment type and declared value.
            </p>
            <p className="font-light leading-relaxed mt-2">
              If your shipment arrives damaged, please follow the damage reporting process in the Refund Policy section. For high-value shipments, consider purchasing additional insurance at checkout where available.
            </p>
            <ul className="space-y-2 ml-6 font-light mt-4">
              <li>• Our liability is limited to the declared value of the goods at time of shipment.</li>
              <li>• We are not liable for delays caused by force majeure or third-party carrier failures beyond our reasonable control.</li>
              <li>• Claims for concealed damage (damage discovered after unpacking) must be reported promptly with photographic evidence.</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              10. Order Modifications & Cancellations
            </h2>
            <p className="font-light leading-relaxed mb-4">
              You may request order modifications or cancellations within a short window after placing the order. Once the item has entered the fulfillment stage or been handed to the carrier, modifications may not be possible.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• Cancellation requests within 1 hour of placing the order: full refund where payment was already captured.</li>
              <li>• Cancellation requests after processing but before shipment: refund may be subject to a processing fee.</li>
              <li>• For custom or made-to-order items, cancellation may not be possible once production has started.</li>
            </ul>
            <p className="font-light leading-relaxed mt-4">
              To modify or cancel an order, contact our support team with your order number as soon as possible. We will confirm whether the requested change is feasible and any fees that may apply.
            </p>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              11. Delivery Acceptance, Refusal & Returns to Sender
            </h2>
            <p className="font-light leading-relaxed mb-4">
              At the time of delivery, please inspect the packaging for visible signs of damage before accepting the shipment. If damage is evident, note it on the delivery receipt and refuse delivery when necessary.
            </p>
            <ul className="space-y-2 ml-6 font-light">
              <li>• If you accept a damaged delivery, report the damage within 24 hours with photos to initiate a claim.</li>
              <li>• If you refuse delivery due to obvious transit damage, the shipment will be returned to us and our team will contact you to arrange a replacement or refund.</li>
              <li>• Returned-to-sender items due to incorrect address or unavailability may be subject to additional shipping charges for re-delivery.</li>
            </ul>
          </section>

          <section style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
              12. Frequently Asked Questions (Shipping)
            </h2>
            <p className="font-light leading-relaxed mb-3">
              Q: Can I change the delivery address after placing an order?
            </p>
            <p className="font-light leading-relaxed mb-3">
              A: Address changes are possible only if the order has not yet been handed to the carrier. Contact customer support immediately with your order number and new address.
            </p>
            <p className="font-light leading-relaxed mb-3">
              Q: Can I request an evening or weekend delivery?
            </p>
            <p className="font-light leading-relaxed mb-3">
              A: Special delivery time requests may be accommodated depending on carrier availability and may incur an additional fee. Please contact support to request scheduling preferences prior to shipment.
            </p>
            <p className="font-light leading-relaxed">
              Q: Do you ship internationally?
            </p>
            <p className="font-light leading-relaxed mt-2">
              A: Currently we ship only within India. For international enquiries, contact our support team for options and estimated timelines.
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
              <p className="font-light leading-relaxed mt-2">
                Orders will undergo a quality check and may require scheduling if the item is custom-made or back-ordered. For made-to-order items, please allow additional production time; our product pages will indicate if an item is custom and its estimated lead time.
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
              <p className="font-light leading-relaxed mt-2">
                Delivery estimates are provided as a guideline and may be affected by weekends, public holidays, or unforeseen local restrictions. For multi-item orders shipped from multiple warehouses, you may receive separate shipments with separate tracking numbers and delivery timings.
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
              <p className="font-light leading-relaxed mt-2">
                We recommend tracking your shipment and arranging availability at the delivery address to avoid missed deliveries. If you are unavailable, our courier may attempt redelivery or leave instructions for collection at a nearby service point.
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
              <p className="font-light leading-relaxed mt-2">
                In the event of significant delays we will proactively update you via email and phone. You may also contact our logistics team for expedited handling where feasible.
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
              <p className="font-light leading-relaxed mt-2">
                For bulky or heavy items, shipping costs are estimated using dimensional weight and may include additional surcharges for remote locations. Promotional free-shipping offers are subject to terms and may not apply to oversized items.
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
                Email: info@silvercrestcommerce.com<br />
                Phone: +91 89558 35661<br />
              Business Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
