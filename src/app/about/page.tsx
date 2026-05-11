'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{backgroundColor: '#F8F5F0'}}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-4" style={{color: '#B8925A'}}>
            About Us
          </p>
          <h1 className="text-6xl md:text-7xl font-light mb-4" style={{color: '#1F1F1F'}}>
            Silvercrest <span className="font-serif italic" style={{color: '#D6B98C'}}>Commerce</span>
          </h1>
          <p className="text-lg font-light max-w-3xl mx-auto" style={{color: '#6B6B6B'}}>
            Premium Furniture & Home Decor Ecommerce
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Company Overview */}
          <div style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '3rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-3xl font-light mb-6" style={{color: '#1F1F1F'}}>
              Our Story
            </h2>
            <p className="leading-relaxed text-lg font-light mb-4" style={{color: '#6B6B6B'}}>
              Silvercrest Commerce is a premium furniture and home decor ecommerce platform dedicated to bringing curated, high-quality furniture from around the world to discerning homeowners and design professionals across India.
            </p>
            <p className="leading-relaxed text-lg font-light" style={{color: '#6B6B6B'}}>
              We believe that every home deserves pieces that combine timeless elegance with contemporary design. Our carefully curated collection represents the finest craftsmanship, offering our customers an unparalleled shopping experience.
            </p>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div style={{
              background: '#FFFFFF',
              
              border: '1px solid #E7DFD4',
              padding: '2rem',
              borderRadius: '8px'
            }}>
              <h3 className="text-xl font-light mb-6" style={{color: '#1F1F1F'}}>
                Company Information
              </h3>
              <div className="space-y-4 text-sm font-light" style={{color: '#6B6B6B'}}>
                <div>
                  <p style={{color: '#B8925A'}} className="font-semibold mb-1">Company Name</p>
                  <p>Silvercrest Commerce (OPC) Private Limited</p>
                </div>
                <div>
                  <p style={{color: '#B8925A'}} className="font-semibold mb-1">CIN</p>
                  <p>U47912RJ2026OPC113399</p>
                </div>
                <div>
                  <p style={{color: '#B8925A'}} className="font-semibold mb-1">GSTIN</p>
                  <p>08ABTCS3743F1ZX</p>
                </div>
                <div>
                  <p style={{color: '#B8925A'}} className="font-semibold mb-1">PAN</p>
                  <p>ABTCS3743F</p>
                </div>
                <div>
                  <p style={{color: '#B8925A'}} className="font-semibold mb-1">Director</p>
                  <p>Abdul Rasid</p>
                </div>
                <div>
                  <p style={{color: '#B8925A'}} className="font-semibold mb-1">Business Type</p>
                  <p>Furniture & Home Decor Ecommerce</p>
                </div>
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              
              border: '1px solid #E7DFD4',
              padding: '2rem',
              borderRadius: '8px'
            }}>
              <h3 className="text-xl font-light mb-6" style={{color: '#1F1F1F'}}>
                Registered Address
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{color: '#6B6B6B'}}>
                C/O Manak Coworking Space,<br />
                2nd Floor, Opp. New Power House,<br />
                New Power House Road,<br />
                Jodhpur, Rajasthan - 342001,<br />
                <strong style={{color: '#B8925A'}}>India</strong>
              </p>
              <div className="mt-8 pt-6" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
                <h4 className="text-sm font-semibold mb-2" style={{color: '#B8925A', textTransform: 'uppercase', letterSpacing: '0.1em'}}>
                  Regulatory Status
                </h4>
                <ul className="space-y-2 text-xs font-light" style={{color: '#6B6B6B'}}>
                  <li>✓ Registered under Companies Act, 2013</li>
                  <li>✓ Company Limited by Shares</li>
                  <li>✓ GST Registered Business</li>
                  <li>✓ Operating Across India</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div style={{
            background: '#FFFFFF',
            
            border: '1px solid #E7DFD4',
            padding: '3rem',
            borderRadius: '8px'
          }}>
            <h2 className="text-3xl font-light mb-6" style={{color: '#1F1F1F'}}>
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p style={{color: '#B8925A'}} className="font-semibold mb-3 uppercase text-sm tracking-widest">
                  Quality
                </p>
                <p className="text-sm font-light leading-relaxed" style={{color: '#6B6B6B'}}>
                  We ensure every piece meets our stringent quality standards, providing only authentic, premium furniture.
                </p>
              </div>
              <div>
                <p style={{color: '#B8925A'}} className="font-semibold mb-3 uppercase text-sm tracking-widest">
                  Elegance
                </p>
                <p className="text-sm font-light leading-relaxed" style={{color: '#6B6B6B'}}>
                  Our curated collection combines timeless design with contemporary aesthetics for the discerning home.
                </p>
              </div>
              <div>
                <p style={{color: '#B8925A'}} className="font-semibold mb-3 uppercase text-sm tracking-widest">
                  Reliability
                </p>
                <p className="text-sm font-light leading-relaxed" style={{color: '#6B6B6B'}}>
                  We stand behind every product with exceptional customer service and reliable logistics support.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
