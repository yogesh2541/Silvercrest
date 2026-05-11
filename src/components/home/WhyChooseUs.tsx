'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Truck, RotateCcw, Shield, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Fast and reliable delivery to your doorstep',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '30-day hassle-free return policy',
  },
  {
    icon: Shield,
    title: '100% Authentic',
    description: 'Guaranteed genuine furniture from trusted brands',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Dedicated customer service team',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-4 relative overflow-hidden" style={{backgroundColor: '#F8F5F0'}}>
      {/* Background image accent */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-6" style={{color: '#B8925A'}}>
            Why Choose Us
          </p>
          <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{color: '#1F1F1F'}}>
            The Silvercrest
            <br />
            <span className="font-serif italic" style={{color: '#D6B98C'}}>Difference</span>
          </h2>
          <div className="w-12 h-px mx-auto" style={{backgroundColor: '#B8925A'}}></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-6" style={{color: '#B8925A'}} />
                <h3 className="font-light text-lg mb-3 uppercase tracking-widest" style={{color: '#1F1F1F'}}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed font-light" style={{color: '#6B6B6B'}}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
