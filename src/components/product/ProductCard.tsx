'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/helpers';
import { useCart } from '@/store/cart';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col overflow-hidden" style={{
        background: '#FFFFFF',
        border: '1px solid #E7DFD4',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,146,90,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}>
        {/* Image Container */}
        <div className="relative h-80 w-full overflow-hidden" style={{backgroundColor: '#EFE7DC'}}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {product.imageBadges && product.imageBadges.length > 0 && (
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {product.imageBadges.map((b) => (
                <span key={b} className="text-xs px-3 py-1 rounded-full font-semibold" style={{background: 'rgba(0,0,0,0.6)', color: '#fff'}}>
                  {b}
                </span>
              ))}
            </div>
          )}
          {product.featured && (
            <div className="absolute top-6 right-6 px-4 py-2 text-xs uppercase tracking-widest font-semibold" 
                 style={{
                   backgroundColor: 'rgba(184,146,90,0.15)',
                   border: '1px solid #B8925A',
                   color: '#D6B98C',
                   backdropFilter: 'blur(10px)'
                 }}>
              ★ Curated
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-8 flex flex-col justify-between" style={{
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: '#E7DFD4'
        }}>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'transition-colors' : ''}
                    style={{
                      fill: i < Math.floor(product.rating) ? '#B8925A' : 'transparent',
                      color: i < Math.floor(product.rating) ? '#B8925A' : '#EFE7DC'
                    }}
                  />
                ))}
              </div>
              <span style={{color: '#6B6B6B'}}>
                ({product.reviews})
              </span>
            </div>

            <Link href={`/products/${product.id}`} className="group/link block">
              <h3 className="text-lg font-light mb-3 transition-colors line-clamp-2 leading-tight" 
                  style={{color: '#1F1F1F'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8925A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F1F1F'}>
                {product.name}
              </h3>
            </Link>

            <p className="text-sm mb-4 line-clamp-2 font-light leading-relaxed" style={{color: '#6B6B6B'}}>
              {product.description}
            </p>

            <div className="flex items-center gap-2 text-xs mb-6" style={{color: '#6B6B6B'}}>
              <span>📦 Ships in {product.deliveryTime}</span>
            </div>
              {/* Product tags removed from card (kept on detail page only) */}
          </div>

          {/* Price & Actions */}
          <div className="space-y-4 pt-6" style={{
            borderTopWidth: '1px',
            borderTopColor: '#E7DFD4'
          }}>
            <div className="text-2xl font-light" style={{color: '#1F1F1F'}}>
              {formatPrice(product.price)}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-4 py-3 uppercase text-xs tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  border: '1px solid #B8925A',
                  color: '#B8925A',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(184,146,90,0.08)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(184,146,90,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <ShoppingCart size={14} />
                {isAdded ? 'Added' : 'Add'}
              </button>
              <Link href={`/products/${product.id}`} className="flex-1">
                <button className="w-full px-4 py-3 uppercase text-xs tracking-widest font-semibold transition-all duration-300" 
                        style={{
                          border: '1px solid #E7DFD4',
                          color: '#1F1F1F',
                          background: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(184,146,90,0.08)';
                          e.currentTarget.style.borderColor = '#B8925A';
                          e.currentTarget.style.color = '#B8925A';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.borderColor = '#E7DFD4';
                          e.currentTarget.style.color = '#1F1F1F';
                        }}
                >
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
