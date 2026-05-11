'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const categoryImages: { [key: string]: string } = {
  'Sofas': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop',
  'Chairs': 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop',
  'Beds': 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=800&fit=crop',
  'Dining': 'https://images.unsplash.com/photo-1538182143081-c8c51d4b759f?w=800&h=800&fit=crop',
  'Wardrobes': 'https://images.unsplash.com/photo-1578500494198-246f612d782d?w=800&h=800&fit=crop',
  'Office': 'https://images.unsplash.com/photo-1533139502658-0198f920d8db?w=800&h=800&fit=crop',
};

export default function FeaturedCategories() {
  const featuredCats = categories.slice(0, 4);

  return (
    <section className="py-32 px-4" style={{backgroundColor: '#EFE7DC'}}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-6" style={{color: '#B8925A'}}>
            Shop by Collection
          </p>
          <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{color: '#1F1F1F'}}>
            Curated
            <br />
            <span className="font-serif italic" style={{color: '#D6B98C'}}>Categories</span>
          </h2>
          <div className="w-12 h-px mx-auto" style={{backgroundColor: '#B8925A'}}></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {featuredCats.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden"
            >
              <Link href={`/products?category=${category}`}>
                <div className="relative h-80 overflow-hidden cursor-pointer rounded-lg" 
                     style={{backgroundColor: '#E7DFD4'}}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,146,90,0.2)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = 'none';
                     }}>
                  {/* Category image */}
                  <Image
                    src={categoryImages[category] || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop'}
                    alt={category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Luxury grid pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(184,146,90,0.1) 25%, rgba(184,146,90,0.1) 26%, transparent 27%, transparent 74%, rgba(184,146,90,0.1) 75%, rgba(184,146,90,0.1) 76%, transparent 77%, transparent), 
                      linear-gradient(90deg, transparent 24%, rgba(184,146,90,0.1) 25%, rgba(184,146,90,0.1) 26%, transparent 27%, transparent 74%, rgba(184,146,90,0.1) 75%, rgba(184,146,90,0.1) 76%, transparent 77%, transparent)`,
                      backgroundSize: '50px 50px'
                    }}></div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 transition-colors duration-500" 
                       style={{
                         background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(239,231,220,0.6) 100%)'
                       }}>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-light" style={{color: '#B8925A'}}>Collection</p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-light mb-4 transition-colors group-hover:text-amber-600" 
                          style={{color: '#1F1F1F'}}>
                        {category}
                      </h3>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                           style={{color: '#B8925A'}}>
                        Explore
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
