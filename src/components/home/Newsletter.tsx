'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden" 
             style={{
               backgroundColor: '#F8F5F0',
               borderTop: '1px solid #E7DFD4'
             }}>
      {/* Background image accent */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&h=600&fit=crop"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-6" style={{color: '#B8925A'}}>
            Stay Informed
          </p>
          <h2 className="text-5xl md:text-7xl font-light mb-4 leading-tight" style={{color: '#1F1F1F'}}>
            Exclusive Updates
            <br />
            <span className="font-serif italic" style={{color: '#D6B98C'}}>for Members</span>
          </h2>
          <p className="mt-6 font-light text-lg max-w-xl mx-auto leading-relaxed" style={{color: '#6B6B6B'}}>
            Receive invitations to new collections, design insights, and early access to limited releases.
          </p>

          <form onSubmit={handleSubscribe} className="mt-12 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 focus:outline-none transition-colors"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E7DFD4',
                color: '#1F1F1F'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#B8925A';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(184,146,90,0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#E7DFD4';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              className="px-8 py-4 font-semibold uppercase text-xs tracking-widest transition-all duration-300 whitespace-nowrap"
              style={{
                background: '#B8925A',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#D6B98C';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(184,146,90,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#B8925A';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              {subscribed ? 'Subscribed ✓' : 'Subscribe'}
            </button>
          </form>
          <p className="text-xs mt-6 font-light tracking-widest uppercase" style={{color: '#6B6B6B'}}>No spam. Exclusive content only.</p>
        </motion.div>
      </div>
    </section>
  );
}
