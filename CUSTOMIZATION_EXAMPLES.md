# 🛠️ Customization Examples - Copy & Paste Code

This file contains ready-to-use code snippets for common customizations.

---

## 1. Update Company Name (Global Search & Replace)

### Search For:
```
Silvercrest
```

### Replace With:
```
Your Company Name
```

**Files to Update:**
- `src/components/common/Navbar.tsx` (Line 20)
- `src/components/common/Footer.tsx` (Line 7)
- `src/app/layout.tsx` (Line 20-21)
- `src/app/about/page.tsx` (Line 14)
- `src/app/contact/page.tsx` (Line 50-53)
- `README.md`, `README_SETUP.md`, documentation files

---

## 2. Update Contact Information

### File: `src/components/common/Footer.tsx`

**Original:**
```typescript
<li><Phone size={16} /> +1 (555) 123-4567</li>
<li><Mail size={16} /> info@silvercrest.com</li>
<li><MapPin size={16} /> 123 Design St, NYC</li>
```

**Replace With:**
```typescript
<li><Phone size={16} /> +1 (YOUR) PHONE-NUMBER</li>
<li><Mail size={16} /> your-email@yourcompany.com</li>
<li><MapPin size={16} /> Your Address, City, State</li>
```

### File: `src/app/contact/page.tsx`

**Original:**
```typescript
<p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
<p className="text-gray-600 dark:text-gray-400">info@silvercrest.com</p>
<p className="text-gray-600 dark:text-gray-400">123 Design Street, New York, NY 10001</p>
```

**Replace With:**
```typescript
<p className="text-gray-600 dark:text-gray-400">+1 (YOUR) PHONE-NUMBER</p>
<p className="text-gray-600 dark:text-gray-400">your-email@yourcompany.com</p>
<p className="text-gray-600 dark:text-gray-400">Your Full Address</p>
```

---

## 3. Update WhatsApp Business Number

### File: `src/app/contact/page.tsx`

**Original:**
```typescript
const whatsappLink = generateWhatsAppLink('919876543210', 'Hi, I am interested in your furniture products.');
```

**Replace With:**
```typescript
const whatsappLink = generateWhatsAppLink('91XXXXXXXXXX', 'Hi, I am interested in your furniture products.');
// For US: '1XXXXXXXXXX' (without +)
// For India: '91XXXXXXXXXX'
// For UK: '441632960000'
// Format: Country code + Number without +
```

**Alternative with formatted message:**
```typescript
const whatsappLink = generateWhatsAppLink(
  'YOUR_COUNTRY_CODE_AND_NUMBER',
  `Hello! I'm interested in learning more about your premium furniture collection. 
   Could you please provide more details about your products and pricing?`
);
```

---

## 4. Add New Product

### File: `src/data/products.ts`

**Original:**
```typescript
export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Sectional Sofa',
    // ... existing products
  },
];
```

**Add New:**
```typescript
export const products: Product[] = [
  // ... existing products
  {
    id: '21',
    name: 'Premium Leather Sofa',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    category: 'Sofas',
    description: 'Luxurious leather sofa with reclining feature and storage.',
    deliveryTime: '7-10 days',
    rating: 4.9,
    reviews: 156,
    featured: true,
    inStock: true,
  },
];
```

---

## 5. Update Product

### File: `src/data/products.ts`

**Find the product by ID and update fields:**

```typescript
{
  id: '1',
  name: 'Modern Sectional Sofa',      // Change name
  price: 1499,                         // Change price
  image: 'new-image-url',              // Update image
  category: 'Sofas',                   // Change category
  description: 'New description',      // Update description
  deliveryTime: '3-5 days',           // Update delivery time
  rating: 4.9,                         // Update rating
  reviews: 150,                        // Update review count
  featured: false,                     // Toggle featured
  inStock: true,                       // Update stock status
}
```

---

## 6. Change Color Scheme

### File: `tailwind.config.ts`

**Original:**
```typescript
export default {
  theme: {
    extend: {
      colors: {
        // Uses Tailwind defaults
      },
    },
  },
}
```

**Add custom colors:**
```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#YOUR-HEX-COLOR',    // e.g., '#6366f1'
        secondary: '#YOUR-HEX-COLOR',
        accent: '#YOUR-HEX-COLOR',
      },
      backgroundColor: {
        dark: '#0a0e27',               // Custom dark background
      },
      textColor: {
        light: '#f5f5f5',              // Custom light text
      },
    },
  },
}
```

**Common Color Combinations:**

```typescript
// Luxury/Premium
primary: '#C9A961',     // Gold
secondary: '#1a1a1a',   // Deep black

// Modern
primary: '#5B21B6',     // Purple
secondary: '#F3F4F6',   // Light gray

// Nature
primary: '#10B981',     // Emerald
secondary: '#F0FDF4',   // Green tint

// Professional
primary: '#0369A1',     // Blue
secondary: '#F8FAFC',   // Slate
```

---

## 7. Update Home Page Hero Text

### File: `src/components/home/Hero.tsx`

**Original:**
```typescript
<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
  Premium Furniture for Modern Living
</h1>

<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
  Discover our curated collection of elegant, sustainable, and timeless furniture pieces designed to elevate your space.
</p>
```

**Replace With:**
```typescript
<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
  Your Custom Hero Title
</h1>

<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
  Your custom hero subtitle goes here. Make it compelling and benefit-focused.
</p>
```

---

## 8. Add Newsletter Integration (Email Service)

### File: `src/components/home/Newsletter.tsx`

**Add email service (example with SendGrid):**

```typescript
const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  } catch (error) {
    console.error('Subscription error:', error);
  }
};
```

**Create API route: `src/app/api/subscribe/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  
  // Add email to your mailing list
  // Using SendGrid, Mailchimp, or your service
  
  return NextResponse.json({ success: true });
}
```

---

## 9. Enable Stripe Payment

### Installation:
```bash
npm install stripe @stripe/react-js
```

### File: `src/app/cart/page.tsx`

**Update checkout button:**

```typescript
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const handleCheckout = async () => {
  const stripe = await loadStripe('YOUR_PUBLISHABLE_KEY');
  
  const response = await fetch('/api/checkout', {
    method: 'POST',
    body: JSON.stringify({
      items: items,
      total: getTotal(),
    }),
  });
  
  const { sessionId } = await response.json();
  await stripe?.redirectToCheckout({ sessionId });
};
```

---

## 10. Add Google Analytics

### File: `src/app/layout.tsx`

**Add to imports:**
```typescript
import { GoogleAnalytics } from '@next/third-parties/google';
```

**Add to JSX (before closing body tag):**
```typescript
<body>
  {/* Your content */}
  <GoogleAnalytics gaId="G-YOUR_MEASUREMENT_ID" />
</body>
```

Get Measurement ID from Google Analytics dashboard.

---

## 11. Add Meta Image for Social Sharing

### File: `src/app/layout.tsx`

**Update metadata:**
```typescript
export const metadata: Metadata = {
  title: 'Your Company - Premium Furniture',
  description: 'Your description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourcompany.com',
    title: 'Your Company - Premium Furniture',
    description: 'Your description',
    siteName: 'Your Company Name',
    images: [
      {
        url: 'https://yourcompany.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Company',
      },
    ],
  },
};
```

---

## 12. Create New Page

### Example: Blog Page

**Create: `src/app/blog/page.tsx`**

```typescript
'use client';

import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Blog
        </motion.h1>

        <div className="grid gap-8">
          {/* Your blog posts here */}
        </div>
      </div>
    </div>
  );
}
```

**Add to navbar: `src/components/common/Navbar.tsx`**

```typescript
<Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
  Blog
</Link>
```

---

## 13. Change Font

### File: `src/app/layout.tsx`

**Replace:**
```typescript
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
```

**With:**
```typescript
import { Playfair_Display, Lato } from 'next/font/google';

const playFair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const lato = Lato({
  variable: '--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
});
```

**Update className:**
```typescript
className={`${playFair.variable} ${lato.variable}`}
```

---

## 14. Add Search Analytics

### File: `src/app/products/page.tsx`

**Track searches:**
```typescript
const handleSearch = (term: string) => {
  setSearchTerm(term);
  
  // Track in analytics
  if (window.gtag) {
    window.gtag('event', 'search', {
      search_term: term,
    });
  }
};
```

---

## 15. Configure Environment Variables

### Create: `.env.local`

```
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
DATABASE_URL=your_database_url
EMAIL_SERVICE_API_KEY=your_email_api_key
GOOGLE_ANALYTICS_ID=your_ga_id
```

**Use in code:**
```typescript
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
const secretKey = process.env.STRIPE_SECRET_KEY;
```

---

## Quick Reference Commands

```bash
# Development
npm run dev                 # Start dev server

# Production
npm run build             # Build for production
npm start                 # Start production server
npm run lint              # Check code quality

# Deployment
git add .
git commit -m "Your message"
git push origin main      # Deploy to Vercel

# Clean up
rm -rf .next             # Clear build cache
rm -rf node_modules      # Clear dependencies
npm install              # Reinstall dependencies
```

---

## Testing Your Changes

```bash
# After making changes:
npm run dev

# Check for errors:
npm run lint

# Build to catch issues:
npm run build

# Test specific page:
# Visit http://localhost:3000/your-page
```

---

## Common Gotchas

1. **Always restart dev server** after changing environment variables
2. **Clear browser cache** if styles don't update
3. **Use absolute imports** (e.g., `@/components/...`)
4. **Images must be accessible URLs** - use Unsplash, Cloudinary, etc.
5. **Phone numbers for WhatsApp must be without `+` or `-`**

---

**Happy Customizing! 🎨**
