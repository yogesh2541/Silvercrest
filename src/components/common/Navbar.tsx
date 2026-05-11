'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/store/cart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { getItemCount } = useCart();
  const cartCount = mounted ? getItemCount() : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm" 
         style={{
           backgroundColor: 'rgba(255,255,255,0.98)',
           borderBottom: '1px solid #E7DFD4'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-light uppercase tracking-widest" 
                style={{
                  background: `linear-gradient(135deg, #B8925A 0%, #D6B98C 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
            Silvercrest
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className="font-light transition-colors text-sm uppercase tracking-wider" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              Home
            </Link>
            <Link href="/about" className="font-light transition-colors text-sm uppercase tracking-wider" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              About
            </Link>
            <Link href="/products" className="font-light transition-colors text-sm uppercase tracking-wider" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              Shop
            </Link>
            <Link href="/contact" className="font-light transition-colors text-sm uppercase tracking-wider" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative p-2 transition-colors" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px]" 
                      style={{
                        backgroundColor: '#B8925A',
                        color: '#FFFFFF'
                      }}>
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              style={{color: '#1F1F1F'}}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1" style={{borderTop: '1px solid #E7DFD4'}}>
            <Link href="/" className="block px-4 py-2 rounded text-sm uppercase tracking-wider font-light transition-colors" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 rounded text-sm uppercase tracking-wider font-light transition-colors" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              About
            </Link>
            <Link href="/products" className="block px-4 py-2 rounded text-sm uppercase tracking-wider font-light transition-colors" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              Shop
            </Link>
            <Link href="/contact" className="block px-4 py-2 rounded text-sm uppercase tracking-wider font-light transition-colors" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
