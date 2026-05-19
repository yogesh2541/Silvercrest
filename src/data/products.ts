import { Product } from '@/types/product';
import rawProducts from '../../products.json';

type ShopifyProductRow = {
  Handle: string;
  Title: string;
  'Body (HTML)'?: string;
  'Product Category'?: string;
  Tags?: string;
  'Variant Price'?: string;
  'Variant Compare At Price'?: string;
  'Image Src'?: string;
  'Image Position'?: string;
  [key: string]: unknown;
};

const shopifyData = rawProducts as ShopifyProductRow[];

const sanitizeText = (value: unknown) => {
  const text = String(value ?? '').trim();
  return text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
};

const normalizeCategory = (value: string): Product['category'] => {
  const raw = value.toLowerCase();

  if (raw.includes('sofa')) return 'Sofas';
  if (raw.includes('chair')) return 'Chairs';
  if (raw.includes('bed')) return 'Beds';
  if (raw.includes('table') || raw.includes('dining')) return 'Dining';
  if (raw.includes('wardrobe') || raw.includes('cabinet')) return 'Wardrobes';
  if (raw.includes('office')) return 'Office';
  return 'Decor';
};

const deterministicNumber = (seed: string, min: number, max: number) => {
  const s = String(seed || '');
  const hash = Array.from(s).reduce((acc, ch) => acc * 31 + ch.charCodeAt(0), 7);
  const range = Math.max(1, max - min + 1);
  return min + (Math.abs(hash) % range);
};

const groupedProducts = shopifyData.reduce((acc, row) => {
  const handle = String(row.Handle || '').trim();
  if (!handle) return acc;

  const existing = acc.get(handle) ?? [];
  existing.push(row);
  acc.set(handle, existing);
  return acc;
}, new Map<string, ShopifyProductRow[]>());

export const products: Product[] = Array.from(groupedProducts.values()).map((rows) => {
  const sortedRows = rows.slice().sort((a, b) => {
    const left = Number(a['Image Position'] || '0');
    const right = Number(b['Image Position'] || '0');
    return left - right;
  });

  const primary = sortedRows.find((row) => String(row.Title || '').trim()) ?? sortedRows[0];
  const imageRow = sortedRows.find((row) => String(row['Image Src'] || '').trim()) ?? primary;

  const price = Number(String(primary['Variant Price'] || primary['Variant Compare At Price'] || '0')) || 0;
  const categoryValue = String(primary['Product Category'] || primary.Tags || '');
  const tagsValue = String(primary.Tags || '');
  const tags = tagsValue
    .split(',')
    .map((t) => sanitizeText(t))
    .filter((t) => t.length > 0);

  // Stable fallback tags when Shopify row has no tags
  const fallbackTags = ['Curated', 'Artisans', 'Handmade', 'Limited', 'Bestseller', 'New Arrival'];
  const pickFallbackTags = (seed: string) => {
    // simple deterministic selection based on seed
    const hash = Math.abs(Array.from(seed).reduce((acc, ch) => acc * 31 + ch.charCodeAt(0), 0));
    const count = 1 + (hash % 2); // pick 1 or 2 tags
    const out = new Set<string>();
    for (let i = 0; out.size < count; i++) {
      out.add(fallbackTags[(hash + i) % fallbackTags.length]);
    }
    return Array.from(out);
  };

  const finalTags = tags.length > 0 ? Array.from(new Set(tags)) : pickFallbackTags(String(primary.Handle || primary.Title || ''));

  // Manual image badge assignment for a few selected products only
  const handleKey = String(primary.Handle || '').trim();
  const manualImageBadges: Record<string, string[]> = {
    'the-neytiri-dining-table': ['Curated'],
    'the-furiosa-dining-table': ['Artisans Made'],
    'the-imperator-dining-table': ['Curated'],
    'odyssey-dining-table': ['Artisans Made'],
    'vista-dining-table': ['Curated'],
  };

  const imageBadges = manualImageBadges[handleKey] ?? [];

  const reviewCount = deterministicNumber(String(primary.Handle || primary.Title || ''), 5, 300);

  return {
    id: String(primary.Handle || '').trim() || `${sanitizeText(primary.Title).toLowerCase().replace(/\s+/g, '-')}`,
    name: sanitizeText(primary.Title) || sanitizeText(primary.Handle),
    price,
    image: String(imageRow['Image Src'] || '').trim(),
    category: normalizeCategory(categoryValue),
      tags: finalTags,
      imageBadges,
    description: sanitizeText(primary['Body (HTML)']) || sanitizeText(primary.Title),
    deliveryTime: '5-7 days',
    rating: 4.5,
    reviews: reviewCount,
    featured: false,
    inStock: true,
  };
});

export const categories = ['Sofas', 'Chairs', 'Beds', 'Dining', 'Wardrobes', 'Office', 'Decor'];
