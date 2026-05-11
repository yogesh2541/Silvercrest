'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/27535711/pexels-photo-27535711.jpeg?w=1920&h=1080&fit=crop"
        alt="Premium Furniture"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      
      {/* Dark overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Text overlay content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-start"
      >
        <div className="px-8 md:px-16 lg:px-24 max-w-2xl space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] font-light mb-4" style={{color: '#D6B98C'}}>
              Exquisite Craftsmanship
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6" style={{color: '#FFFFFF'}}>
              Luxury  
              <br />
              <span className="font-serif italic" style={{color: '#D6B98C'}}>Redefined</span>
            </h1>
            <div className="w-16 h-px mb-6" style={{backgroundColor: '#B8925A'}}></div>
            <p className="text-lg font-light leading-relaxed" style={{color: '#FFFFFF'}}>
              Curated pieces from the world's finest designers. Timeless elegance for the discerning homeowner.
            </p>
          </div>

          <div className="flex gap-6 pt-4">
            <Link href="/products">
              <button className="group inline-flex items-center gap-3 px-8 py-4 font-semibold uppercase text-xs tracking-widest transition-all duration-500" 
                      style={{
                        border: '2px solid #B8925A',
                        color: '#FFFFFF',
                        background: '#B8925A'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#D6B98C';
                        e.currentTarget.style.borderColor = '#D6B98C';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(184,146,90,0.35)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#B8925A';
                        e.currentTarget.style.borderColor = '#B8925A';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
              >
                Shop Collection
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 uppercase text-xs tracking-widest font-semibold transition-colors duration-300" 
                      style={{
                        border: '2px solid #FFFFFF',
                        color: '#FFFFFF'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
              >
                Our Story
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest"
        style={{color: '#D6B98C'}}
      >
        ↓ Explore
      </motion.div>
    </section>
  );
}
