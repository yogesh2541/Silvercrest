'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { formatPrice } from '@/utils/helpers';
import { useCart } from '@/store/cart';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = (params?.id as string) || '';
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product || !productId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/products"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft size={20} /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {product.category}
                  </span>
                  {product.featured && (
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {product.description}
              </p>

              <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
                <p className="text-5xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(product.price)}
                </p>
              </div>

              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <Truck size={20} />
                  <span>Delivery: {product.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw size={20} />
                  <span>30-Day Return Policy</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-gray-900 dark:text-white font-semibold">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 dark:border-slate-700 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 dark:text-gray-400"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 text-gray-900 dark:text-white font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 dark:text-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    {isAdded ? 'Added to Cart!' : 'Add to Cart'}
                  </Button>
                  <Button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    variant="outline"
                    className="px-6 dark:border-slate-700"
                  >
                    <Heart
                      size={20}
                      className={isWishlisted ? 'fill-red-500 text-red-500' : ''}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Related Products
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
