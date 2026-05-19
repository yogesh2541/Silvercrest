'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { useState, useMemo } from 'react';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [sortBy, setSortBy] = useState('featured');

  const tags = Array.from(new Set(products.flatMap((p) => p.tags || [])));


  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedTag !== 'All') {
      filtered = filtered.filter((p) => (p.tags || []).includes(selectedTag));
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    // price filter removed — only Tag, Search, and Sort remain

    return filtered;
  }, [selectedTag, searchTerm, sortBy]);

  return (
    <div className="min-h-screen py-12 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Our Products
        </motion.h1>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 dark:bg-slate-800 dark:border-slate-700"
            />
            {/* Category filter removed - keeping Tag, Search, and Sort */}
            <Select value={selectedTag} onValueChange={(value) => setSelectedTag(value || 'All')}>
              <SelectTrigger className="w-full md:w-48 dark:bg-slate-800 dark:border-slate-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                <SelectItem value="All">All Tags</SelectItem>
                {tags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Price range filter removed */}
            <Select value={sortBy} onValueChange={(value) => setSortBy(value || 'featured')}>
              <SelectTrigger className="w-full md:w-48 dark:bg-slate-800 dark:border-slate-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No products found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
