'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BestSellers() {
  const featuredProducts = products.filter((p) => p.featured);
  const bestSellers = (featuredProducts.length > 0 ? featuredProducts : products)
    .slice(0, 4);

  return (
    <section className="py-32 px-4" style={{backgroundColor: '#F8F5F0'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header with background image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center relative"
        >
          {/* Subtle background image accent */}
          <div className="absolute inset-0 opacity-5 -m-20 hidden md:block">
            <Image
              src="https://images.pexels.com/photos/8135260/pexels-photo-8135260.jpeg?w=1200&h=400&fit=crop"
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.2em] font-light mb-6" style={{color: '#B8925A'}}>
              Curated Selection
            </p>
            <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{color: '#1F1F1F'}}>
              Featured Pieces
              <br />
              <span className="font-serif italic" style={{color: '#D6B98C'}}>For Discerning Tastes</span>
            </h2>
            <div className="w-12 h-px mx-auto my-8" style={{backgroundColor: '#B8925A'}}></div>
            <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed" style={{color: '#6B6B6B'}}>
              Handpicked collections from master craftsmen around the world. Each piece represents the pinnacle of design and comfort.
            </p>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pt-8" 
          style={{borderTopColor: '#E7DFD4', borderTopWidth: '1px'}}
        >
          <Link href="/products">
            <button className="group inline-flex items-center gap-3 px-8 py-4 font-semibold uppercase text-xs tracking-widest transition-all duration-300" 
                    style={{
                      borderBottom: '2px solid #B8925A',
                      color: '#B8925A'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#D6B98C'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#B8925A'}
            >
              View Complete Collection
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
