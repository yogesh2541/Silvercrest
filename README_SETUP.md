# Silvercrest - Premium Furniture Ecommerce Website

A modern, production-ready furniture ecommerce platform built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI.

## 🌟 Features

- **Modern Design**: Premium minimalist aesthetic with smooth animations (Framer Motion)
- **Responsive UI**: Mobile-first design that works on all devices
- **Product Catalog**: 20 mock products across 7 categories with advanced filtering and search
- **Shopping Cart**: Zustand-based state management with localStorage persistence
- **Product Details**: Detailed product pages with related products and reviews
- **Contact Page**: Contact form with WhatsApp integration for direct customer inquiries
- **Dark/Light Mode**: Full theme support with next-themes
- **SEO Optimized**: OpenGraph metadata and semantic HTML
- **Policy Pages**: Complete legal pages (Privacy, Terms, Shipping, Refund)
- **Skeleton Loaders**: Smooth loading states for better UX
- **Toast Notifications**: User feedback system

## 📁 Project Structure

```
silvercrest-commerce/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── products/
│   │   │   ├── page.tsx            # Products listing with filters
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Product details page
│   │   ├── cart/
│   │   │   └── page.tsx            # Shopping cart page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact form page
│   │   ├── privacy-policy/
│   │   │   └── page.tsx            # Privacy policy
│   │   ├── terms/
│   │   │   └── page.tsx            # Terms & conditions
│   │   ├── shipping-policy/
│   │   │   └── page.tsx            # Shipping policy
│   │   └── refund-policy/
│   │       └── page.tsx            # Refund policy
│   │
│   ├── components/
│   │   ├── Providers.tsx           # Theme provider wrapper
│   │   ├── ui/                     # Shadcn/UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── drawer.tsx
│   │   │   └── badge.tsx
│   │   ├── common/
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   └── Footer.tsx          # Footer component
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── FeaturedCategories.tsx  # Category showcase
│   │   │   ├── BestSellers.tsx     # Best sellers section
│   │   │   ├── WhyChooseUs.tsx     # Features section
│   │   │   ├── Testimonials.tsx    # Customer testimonials
│   │   │   └── Newsletter.tsx      # Newsletter signup
│   │   ├── product/
│   │   │   └── ProductCard.tsx     # Product card component
│   │   └── cart/
│   │       └── CartDrawer.tsx      # Cart drawer (optional)
│   │
│   ├── data/
│   │   └── products.ts             # Mock product data (20 products)
│   │
│   ├── types/
│   │   └── product.ts              # TypeScript interfaces
│   │
│   ├── store/
│   │   └── cart.ts                 # Zustand cart store
│   │
│   ├── hooks/
│   │   └── useLocalStorage.ts      # LocalStorage hook
│   │
│   ├── utils/
│   │   └── helpers.ts              # Utility functions
│   │
│   └── lib/
│       └── utils.ts                # Tailwind CSS utilities
│
├── public/                          # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── next.config.ts
├── components.json                 # Shadcn/UI config
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Local Setup

1. **Clone/Navigate to the project:**
```bash
cd silvercrest-commerce
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:3000`

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint and fix code
npm run lint
```

### Adding New Pages

1. Create a new folder in `src/app/[page-name]/`
2. Add `page.tsx` file
3. The page will automatically route to `/[page-name]`

### Adding New Components

1. Create component in appropriate folder in `src/components/`
2. Import and use in pages
3. Use Shadcn/UI components for consistency

### Adding New Products

Edit `src/data/products.ts` and add to the products array:
```typescript
{
  id: '21',
  name: 'Product Name',
  price: 999,
  image: 'https://images.unsplash.com/...',
  category: 'Sofas',
  description: 'Product description',
  deliveryTime: '5-7 days',
  rating: 4.5,
  reviews: 45,
  featured: true,
  inStock: true,
}
```

## 🎨 Customization

### Colors & Branding

1. **Company Name**: Search for "Silvercrest" and replace globally
2. **Contact Information**: Update in `src/components/common/Footer.tsx` and `src/app/contact/page.tsx`
   - Phone: `+1 (555) 123-4567`
   - Email: `info@silvercrest.com`
   - Address: `123 Design Street, New York, NY`
3. **WhatsApp Integration**: Update phone number in `src/app/contact/page.tsx`
4. **Tailwind Colors**: Edit `tailwind.config.ts` for theme colors
5. **Logo**: Replace with actual logo in `src/components/common/Navbar.tsx`

### Images

Replace Unsplash image URLs with your own furniture product images:
- In `src/data/products.ts` - update product images
- In `src/components/home/Hero.tsx` - update hero background if needed

## 📦 Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/UI** - High-quality React components
- **Framer Motion** - Smooth animations
- **Zustand** - Lightweight state management
- **next-themes** - Dark mode support
- **Lucide Icons** - Icon library
- **React Hook Form** - Form management
- **Zod** - Schema validation

## 🛒 Cart Management

The cart uses Zustand for state management and persists to localStorage automatically:

```typescript
import { useCart } from '@/store/cart';

const { items, addToCart, removeFromCart, getTotal } = useCart();
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Environment Variables** (if needed):
   - Add any API keys or secrets in Vercel dashboard

### Other Platforms

The project can also be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted servers

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm start
```

## 🔐 Important - Before Going Live

1. **Update Meta Information**
   - Title and description in `src/app/layout.tsx`
   - OpenGraph images

2. **Replace Placeholder Data**
   - Company name (search & replace "Silvercrest")
   - Contact information
   - Product images (use high-quality furniture images)
   - Product descriptions and pricing

3. **Add Payment Integration**
   - Update WhatsApp integration to use your business number
   - Or add Stripe/PayPal integration for direct payments

4. **SEO Setup**
   - Add robots.txt to `/public/`
   - Create sitemap
   - Add metadata to all pages

5. **Analytics**
   - Add Google Analytics
   - Add Facebook Pixel

6. **Security**
   - Enable HTTPS
   - Set up CORS properly
   - Validate form inputs server-side

## 📧 Contact Form Integration

The contact form currently uses WhatsApp for customer inquiries. To use email instead:

1. Install Nodemailer or use a service like SendGrid
2. Create an API route in `src/app/api/contact/route.ts`
3. Update the contact form submission handler

## 🎯 Key Features Explained

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts

### Dark Mode
- Toggle in navbar
- Persists to localStorage
- Applied to all components

### Product Filtering
- Filter by category
- Search by name/description
- Sort by price, rating, featured

### Cart Persistence
- Automatically saves to localStorage
- Persists across browser sessions
- Updates in real-time

### Smooth Animations
- Page transitions with Framer Motion
- Hover effects on components
- Scroll animations for sections

## 📄 License

This project is provided as-is for commercial use.

## 🆘 Support

For issues or questions:
- Email: info@silvercrestcommerce.com
- Phone: +91 89558 35661
- Website: https://silvercrest.com

---

**Built with ❤️ for modern furniture commerce**
