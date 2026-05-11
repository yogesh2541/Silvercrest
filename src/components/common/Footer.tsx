'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#FFFFFF', color: '#1F1F1F'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-16 mb-16 pb-16" style={{borderBottom: '1px solid #E7DFD4'}}>
          <div>
            <h3 className="text-xl font-light mb-8" style={{
              background: `linear-gradient(135deg, #B8925A 0%, #D6B98C 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ✨ Silvercrest
            </h3>
            <p className="font-light leading-relaxed text-sm" style={{color: '#6B6B6B'}}>
              Premium Furniture & Home Decor Ecommerce. Curating luxury collections from the world's finest craftsmen.
            </p>
            <div className="mt-6 pt-6 space-y-2 text-xs font-light" style={{
              borderTop: '1px solid #E7DFD4',
              color: '#6B6B6B'
            }}>
              <p><strong style={{color: '#B8925A'}}>CIN:</strong> U47912RJ2026OPC113399</p>
              <p><strong style={{color: '#B8925A'}}>GSTIN:</strong> 08ABTCS3743F1ZX</p>
            </div>
          </div>

          <div>
            <h4 className="font-light mb-8 uppercase text-xs tracking-widest" style={{color: '#B8925A'}}>Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>Home</Link></li>
              <li><Link href="/products" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>Products</Link></li>
              <li><Link href="/about" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>About</Link></li>
              <li><Link href="/contact" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-8 uppercase text-xs tracking-widest" style={{color: '#B8925A'}}>Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>Privacy</Link></li>
              <li><Link href="/terms" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>Terms</Link></li>
              <li><Link href="/shipping-policy" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>Shipping</Link></li>
              <li><Link href="/refund-policy" className="font-light text-sm transition-colors" 
                        style={{color: '#6B6B6B'}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}>Refunds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-8 uppercase text-xs tracking-widest" style={{color: '#B8925A'}}>Contact</h4>
            <ul className="space-y-3 text-sm font-light" style={{color: '#6B6B6B'}}>
              <li className="flex items-center gap-3"><Mail size={14} style={{color: '#B8925A'}} /> support@silvercrest.com</li>
              <li className="flex items-center gap-3"><Phone size={14} style={{color: '#B8925A'}} /> [+91-XXXX-XXXX-XXX]</li>
              <li className="flex items-start gap-3"><MapPin size={14} style={{color: '#B8925A', marginTop: '2px'}} />
                <span>C/O Manak Coworking Space, Jodhpur, Rajasthan - 342001, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-light text-xs uppercase tracking-widest" style={{color: '#6B6B6B'}}>
            © 2026 Silvercrest Commerce (OPC) Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
