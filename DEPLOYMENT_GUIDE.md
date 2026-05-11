# Silvercrest Commerce - Complete Setup & Deployment Guide

## 📋 Project Overview

**Silvercrest** is a production-ready premium furniture ecommerce website built with:
- Next.js 15 + TypeScript
- Tailwind CSS + Shadcn/UI
- Framer Motion for animations
- Zustand for cart state management
- localStorage for persistence

## ✅ What's Included

### Pages (10 Total)
1. ✓ **Home** - Hero, categories, best sellers, testimonials, newsletter
2. ✓ **About** - Company information and values
3. ✓ **Products** - Catalog with search, filtering, and sorting
4. ✓ **Product Details** - Individual product pages with related items
5. ✓ **Cart** - Shopping cart with quantity management
6. ✓ **Contact** - Contact form + WhatsApp integration
7. ✓ **Privacy Policy** - Legal compliance
8. ✓ **Terms & Conditions** - Legal compliance
9. ✓ **Shipping Policy** - Shipping information
10. ✓ **Refund Policy** - Return policy

### Features
- ✓ 20 mock furniture products (7 categories)
- ✓ Responsive mobile-first design
- ✓ Dark/Light mode toggle
- ✓ Product search and filtering
- ✓ Shopping cart with persistence
- ✓ Smooth Framer Motion animations
- ✓ SEO optimized with metadata
- ✓ Sticky navbar with cart badge
- ✓ Product ratings and reviews
- ✓ Breadcrumbs on detail pages
- ✓ Newsletter subscription
- ✓ Contact form with validation
- ✓ WhatsApp integration for inquiries
- ✓ Professional minimalist design

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js 18+ (`node --version`)
- npm 9+ (`npm --version`)

### 2. Navigate to Project
```bash
cd silvercrest-commerce
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open in Browser
```
http://localhost:3000
```

### 6. Stop Server
Press `Ctrl + C` in terminal

## 🎨 Customization Before Launch

### Company Information
**File:** `src/components/common/Navbar.tsx` and `src/components/common/Footer.tsx`

Update:
```typescript
// Replace "Silvercrest" with your brand name
// Update company details, phone, email, address
```

### Contact Information
**File:** `src/app/contact/page.tsx`

Update:
```typescript
const whatsappLink = generateWhatsAppLink('919876543210', 'Hi, I am interested...');
// Change phone number to your WhatsApp number
// Update address, email, phone in contact section
```

### Product Images
**File:** `src/data/products.ts`

Replace Unsplash URLs with your product images:
```typescript
image: 'https://your-cdn.com/product-1.jpg'
```

### Product Data
Add, edit, or remove products from `src/data/products.ts`:
```typescript
{
  id: '21',
  name: 'Your Product Name',
  price: 1299,
  image: 'your-image-url',
  category: 'Sofas', // One of 7 categories
  description: 'Product description',
  deliveryTime: '5-7 days',
  rating: 4.8,
  reviews: 124,
  featured: true,
  inStock: true,
}
```

### Color Scheme
**File:** `tailwind.config.ts`

Customize colors, fonts, and spacing for your brand.

### Meta Tags
**File:** `src/app/layout.tsx`

Update:
```typescript
export const metadata: Metadata = {
  title: 'Your Company - Premium Furniture',
  description: 'Your company description',
  openGraph: {
    title: 'Your Company - Premium Furniture',
    description: 'Your company description',
  },
};
```

## 🏗️ Folder Structure Explained

```
src/
├── app/                 # Pages and routes
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   ├── globals.css     # Global styles
│   └── [page]/page.tsx # Dynamic routes
│
├── components/         # Reusable React components
│   ├── ui/            # Shadcn/UI components
│   ├── common/        # Navbar, Footer
│   ├── home/          # Home page sections
│   ├── product/       # Product components
│   └── Providers.tsx  # Theme provider
│
├── data/              # Static data
│   └── products.ts    # Mock products
│
├── types/             # TypeScript definitions
│   └── product.ts     # Product interfaces
│
├── store/             # State management
│   └── cart.ts        # Zustand cart store
│
├── hooks/             # Custom React hooks
│   └── useLocalStorage.ts
│
└── utils/             # Helper functions
    └── helpers.ts
```

## 📦 Build for Production

### 1. Create Optimized Build
```bash
npm run build
```

This creates:
- Optimized JavaScript bundles
- Static HTML exports where possible
- Image optimization
- Tree-shaking of unused code

### 2. Test Production Build Locally
```bash
npm run build
npm start
```

Open `http://localhost:3000`

## 🌐 Deploy to Vercel (Recommended)

### Method 1: Via Git
1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial Silvercrest Commerce launch"
git push origin main
```

2. **Deploy via Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Vercel automatically detects Next.js
   - Deployment starts automatically

3. **Domain Setup:**
   - Vercel provides free domain: `*.vercel.app`
   - Add custom domain in Vercel settings
   - Point DNS to Vercel nameservers

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Vercel Environment Variables
If you add API keys (for email, payments, etc.):
1. Go to Project Settings
2. Environment Variables
3. Add `KEY=VALUE` pairs
4. Redeploy

## 🚀 Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### AWS Amplify
1. Connect GitHub repo
2. Use Next.js preset
3. Auto-deploys on push

### Self-Hosted (VPS/Server)
```bash
# On your server
git clone <repo>
cd silvercrest-commerce
npm install
npm run build
npm start
```

Use PM2 to keep process running:
```bash
npm install -g pm2
pm2 start npm -- start
```

## 🔒 Pre-Launch Checklist

- [ ] Replace "Silvercrest" with your brand name (global search & replace)
- [ ] Update company contact info (phone, email, address)
- [ ] Update WhatsApp business number
- [ ] Replace all product images with your furniture photos
- [ ] Update product names, descriptions, and prices
- [ ] Verify all links work (navbar, footer, pages)
- [ ] Test cart functionality
- [ ] Test contact form submission
- [ ] Check dark mode functionality
- [ ] Test on mobile devices
- [ ] Verify responsive design
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics (optional)
- [ ] Set up favicon
- [ ] Enable HTTPS on custom domain

## 📱 Testing Checklist

### Desktop
- [ ] Chrome, Firefox, Safari, Edge
- [ ] All pages load correctly
- [ ] Forms submit properly
- [ ] Dark mode works
- [ ] Animations smooth

### Mobile
- [ ] iPhone (iOS)
- [ ] Android phones
- [ ] Tablet view
- [ ] Navigation works
- [ ] Buttons are touch-friendly

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Performance Optimization

The project includes:
- ✓ Image optimization (Next.js Image component)
- ✓ Code splitting
- ✓ Tree-shaking
- ✓ CSS minification
- ✓ JavaScript minification
- ✓ Lazy loading

Check performance:
```bash
npm run build
# Check .next/static for bundle sizes
```

## 🔐 Security

- ✓ TypeScript for type safety
- ✓ No sensitive data in code
- ✓ Form validation (client-side)
- ✓ XSS protection via React/Next.js
- ✓ CSRF protection enabled

For production:
- Add server-side form validation
- Use environment variables for secrets
- Enable HTTPS (automatic on Vercel)
- Set CSP headers
- Add rate limiting on contact form

## 🆘 Common Issues & Solutions

### Issue: Products not loading
**Solution:** Check `src/data/products.ts` - ensure data is exported correctly

### Issue: Cart doesn't persist
**Solution:** Check browser localStorage is enabled
**File:** `src/store/cart.ts` uses localStorage

### Issue: Dark mode not working
**Solution:** Clear browser cache and restart dev server

### Issue: Images not loading
**Solution:** Check image URLs are accessible
**Pro tip:** Use Unsplash or Cloudinary for free hosting

### Issue: Slow build
**Solution:** 
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`

## 📞 Support & Further Development

### To Add Payment Gateway (Stripe)
1. Install: `npm install stripe`
2. Create API routes
3. Update checkout page
4. Test with Stripe test mode

### To Add Email Notifications
1. Install: `npm install nodemailer`
2. Create API route for emails
3. Add environment variables
4. Update contact form

### To Add Blog
1. Create `src/app/blog/[slug]/page.tsx`
2. Add blog data/CMS
3. Create blog layout component

### To Add User Accounts
1. Install: `npm install next-auth`
2. Set up authentication
3. Add user profile pages
4. Save order history

## 📚 Documentation Files

- `README_SETUP.md` - Feature list and customization guide
- This file - Complete setup and deployment guide
- `package.json` - Dependencies and scripts

## 🎉 You're All Set!

Your premium furniture ecommerce website is ready to:
1. ✓ Showcase your furniture products
2. ✓ Handle customer inquiries via WhatsApp
3. ✓ Manage shopping carts
4. ✓ Rank well in search engines
5. ✓ Provide excellent user experience

**Next Steps:**
1. Customize company info
2. Add your products
3. Upload quality images
4. Deploy to Vercel
5. Point custom domain
6. Launch and promote!

---

For questions or issues, refer to:
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Shadcn/UI: https://ui.shadcn.com/docs
- Vercel Deployment: https://vercel.com/docs

**Happy selling! 🎉**
