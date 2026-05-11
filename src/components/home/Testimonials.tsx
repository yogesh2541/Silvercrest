'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    text: 'Silvercrest offers the finest selection of premium furniture. The quality and design are unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Homeowner',
    text: 'I furnished my entire home with Silvercrest. Delivery was fast and the pieces are absolutely beautiful.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'Architect',
    text: 'Working with Silvercrest for my client projects has been seamless. Highly professional team.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4" style={{backgroundColor: '#EFE7DC'}}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-6" style={{color: '#B8925A'}}>
            Client Testimonials
          </p>
          <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{color: '#1F1F1F'}}>
            Trusted by
            <br />
            <span className="font-serif italic" style={{color: '#D6B98C'}}>Design Professionals</span>
          </h2>
          <div className="w-12 h-px mx-auto" style={{backgroundColor: '#B8925A'}}></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E7DFD4',
                borderRadius: '8px',
                color: '#1F1F1F'
              }}>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} style={{fill: '#B8925A', color: '#B8925A'}} />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-8 font-light italic" style={{color: '#D6B98C'}}>
                &quot;{testimonial.text}&quot;
              </p>
              <div className="pt-6" style={{borderTop: '1px solid #E7DFD4'}}>
                <p className="font-light mb-1" style={{color: '#1F1F1F'}}>
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{color: '#B8925A'}}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
