# 🔧 TROUBLESHOOTING & FAQ

Complete guide to common issues and how to fix them.

---

## ❓ FREQUENTLY ASKED QUESTIONS

### Q: Where do I change the company name?
**A:** Search for "Silvercrest" and replace it globally in:
- `src/components/common/Navbar.tsx`
- `src/components/common/Footer.tsx`
- `src/app/layout.tsx`
- `src/app/about/page.tsx`

### Q: How do I add more products?
**A:** Edit `src/data/products.ts` and add objects to the array:
```typescript
{
  id: '21',
  name: 'Your Product',
  price: 999,
  image: 'url-to-image',
  category: 'Sofas',
  // ... other fields
}
```

### Q: Can I change the colors?
**A:** Yes! Edit `tailwind.config.ts` and add your colors:
```typescript
colors: {
  primary: '#YourColor',
  secondary: '#YourColor',
}
```

### Q: How do I update product images?
**A:** Replace image URLs in `src/data/products.ts`:
```typescript
image: 'https://your-image-url.com/image.jpg'
```

### Q: Does it work on mobile?
**A:** Yes! It's 100% responsive and mobile-optimized.

### Q: Can I add payments (Stripe/PayPal)?
**A:** Yes! See CUSTOMIZATION_EXAMPLES.md for code snippets.

### Q: How much will it cost to host?
**A:** Vercel FREE tier is perfect for this. No cost to start!

### Q: How do I deploy?
**A:** Push to GitHub, connect to Vercel, done! 5 minutes.

### Q: Can I add email notifications?
**A:** Yes! Use SendGrid, Nodemailer, or similar services.

### Q: Is the code production-ready?
**A:** Yes! 100% TypeScript, clean code, best practices throughout.

### Q: How do I add user accounts?
**A:** Install NextAuth.js and follow their documentation.

### Q: Can I add a blog?
**A:** Yes! Create `/blog/[slug]/` route and add blog data.

---

## 🐛 COMMON ISSUES & FIXES

### Issue 1: "Cannot find module" error

**Symptom:**
```
Error: Cannot find module '@/components/...'
```

**Fix:**
```bash
# Clear build cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Restart dev server
npm run dev
```

---

### Issue 2: Styles not updating in dark mode

**Symptom:** Dark mode toggle doesn't work properly

**Fix:**
1. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear browser cache
3. Restart dev server: `npm run dev`
4. Check `src/components/Providers.tsx` has correct theme setup

---

### Issue 3: Cart not persisting after refresh

**Symptom:** Items disappear from cart after page refresh

**Fix:**
1. Check browser allows localStorage:
   - Open DevTools → Console
   - Type: `localStorage.setItem('test', 'value')`
   - Should return undefined (no error)

2. If localStorage is disabled:
   - Enable it in browser settings
   - Try private/incognito mode

3. Check `src/store/cart.ts` uses correct storage name

---

### Issue 4: Images not loading

**Symptom:** Images show broken icon or don't display

**Fix:**
1. Check image URLs are valid and accessible
2. Use reliable image sources:
   - Unsplash (free)
   - Cloudinary (free tier)
   - Your own CDN
   - AWS S3

3. Example valid URL:
   ```
   https://images.unsplash.com/photo-XXXXX?w=600&h=600&fit=crop
   ```

---

### Issue 5: Build fails with errors

**Symptom:**
```
error TS2304: Cannot find name 'XX'
```

**Fix:**
```bash
# Full clean rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

---

### Issue 6: Dev server won't start

**Symptom:**
```
EADDRINUSE: address already in use :::3000
```

**Fix:**
```bash
# Kill process using port 3000
lsof -i :3000  # Find process ID
kill -9 <PID>  # Kill it

# Or use different port
npm run dev -- -p 3001
```

---

### Issue 7: TypeScript errors in IDE

**Symptom:** Squiggly red lines in VS Code

**Fix:**
1. Install TypeScript extension
2. Reload VS Code: `Cmd+K Cmd+W`
3. Check `tsconfig.json` is correct
4. Run: `npm run lint`

---

### Issue 8: Tailwind styles not applying

**Symptom:** CSS not loading, unstyled website

**Fix:**
1. Check `tailwind.config.ts` has correct paths:
   ```typescript
   content: [
     './src/**/*.{js,jsx,ts,tsx}',
   ]
   ```

2. Check `globals.css` is imported in `layout.tsx`

3. Rebuild Tailwind:
   ```bash
   npm run build
   ```

---

### Issue 9: WhatsApp integration not working

**Symptom:** WhatsApp button doesn't open chat

**Fix:**
1. Check phone number format (no + or -)
   ```
   ✅ Correct: '919876543210'
   ❌ Wrong: '+91-9876543210'
   ```

2. Test format: `https://wa.me/919876543210`

3. Ensure number is valid and has WhatsApp Business

---

### Issue 10: Form validation not working

**Symptom:** Form submits with empty fields

**Fix:**
Check form fields have `required` attribute:
```typescript
<input required type="email" />
```

If using validation library, ensure it's installed:
```bash
npm install react-hook-form zod
```

---

## 🔍 DEBUGGING STEPS

### General Debugging Process

1. **Check Browser Console**
   - Open DevTools: `F12`
   - Click Console tab
   - Look for red error messages
   - Note the error message

2. **Check Terminal**
   - Look at npm run dev output
   - Check for TypeScript errors
   - Note any warnings

3. **Check File Paths**
   - Verify file exists
   - Check import paths are correct
   - Use absolute imports: `@/components/...`

4. **Check Data**
   - Open DevTools → Network
   - Look for failed requests
   - Check API responses

5. **Check Styles**
   - Open DevTools → Elements
   - Right-click element → Inspect
   - Check if styles are applied
   - Check for CSS conflicts

6. **Check Functionality**
   - Test in isolation
   - Use browser dev tools
   - Check console for errors
   - Test in different browser

---

## 🚀 PERFORMANCE DEBUGGING

### Check Performance

```bash
# Build analysis
npm run build

# Check bundle size
npm install --save-dev @next/bundle-analyzer
```

### Optimize Images

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={600}
  height={600}
  loading="lazy"  // Lazy load
/>
```

### Check Page Speed

1. Build: `npm run build`
2. Start: `npm start`
3. Go to: https://pagespeed.web.dev
4. Enter URL
5. Review suggestions

---

## 📋 DIAGNOSTIC CHECKLIST

If something isn't working, check:

- [ ] Is dev server running? (`npm run dev`)
- [ ] Did you save the file?
- [ ] Did you restart dev server?
- [ ] Is the file path correct?
- [ ] Is the import correct?
- [ ] Are there TypeScript errors? (check terminal)
- [ ] Are there browser console errors? (check DevTools)
- [ ] Did you clear `.next` folder?
- [ ] Did you run `npm install` recently?
- [ ] Are node_modules corrupted? (try reinstall)

---

## 🔧 COMMON FIXES

### Quick Fixes (Try These First)

1. **Restart Dev Server**
   ```bash
   Ctrl+C  # Stop
   npm run dev  # Start again
   ```

2. **Clear Cache**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Hard Refresh Browser**
   - Chrome/Windows: `Ctrl+Shift+R`
   - Chrome/Mac: `Cmd+Shift+R`
   - Firefox: `Ctrl+Shift+R`

4. **Clear Browser Cache**
   - Open DevTools
   - Network tab
   - Disable cache checkbox
   - Reload page

5. **Full Reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

---

## 🎯 WHEN TO USE EACH FIX

| Issue | Quick Fix | Full Fix |
|-------|-----------|----------|
| Page not updating | Hard refresh | Restart dev server |
| Missing module error | Restart server | Reinstall dependencies |
| Styles not loading | Clear cache | Rebuild Tailwind |
| Image not showing | Check URL | Verify image exists |
| Form not working | Check console | Review form code |
| Build fails | Clear .next | Reinstall everything |

---

## 📞 GETTING HELP

### Check These Resources

1. **Next.js Docs**: https://nextjs.org/docs
   - Official documentation
   - Tutorials and guides
   - API reference

2. **Tailwind CSS**: https://tailwindcss.com/docs
   - CSS utilities
   - Configuration guide
   - Examples

3. **Error Messages**
   - Copy exact error message
   - Search in documentation
   - Check Stack Overflow

4. **VS Code**
   - Install recommended extensions
   - Format code: `Shift+Alt+F`
   - Show problems: `Ctrl+Shift+M`

---

## ✅ PRE-DEPLOYMENT CHECKLIST

Before deploying, verify:

- [ ] No TypeScript errors
   ```bash
   npm run lint
   ```

- [ ] Build succeeds
   ```bash
   npm run build
   ```

- [ ] All pages load
   - Home: http://localhost:3000
   - Products: http://localhost:3000/products
   - Cart: http://localhost:3000/cart
   - Contact: http://localhost:3000/contact

- [ ] No console errors
   - Open DevTools
   - Check Console tab
   - Should be empty (no red errors)

- [ ] Responsive on mobile
   - Open DevTools
   - Click device toolbar
   - Test on iPhone and Android sizes

- [ ] Dark mode works
   - Click moon icon
   - Should toggle between themes
   - Should persist on reload

- [ ] Cart works
   - Add products
   - Remove products
   - Clear cart
   - Should persist on reload

---

## 🎉 SUCCESS INDICATORS

Your setup is correct if:

✅ `npm run dev` starts without errors  
✅ Page loads at http://localhost:3000  
✅ All navigation links work  
✅ Dark mode toggle works  
✅ Cart functionality works  
✅ Products load with images  
✅ Search and filters work  
✅ Forms submit without errors  
✅ No red errors in console  
✅ `npm run build` succeeds  

---

## 🚨 WHEN TO SEEK HELP

Seek help if:
- Error messages don't make sense
- Tried multiple fixes with no luck
- Code looks correct but doesn't work
- Strange behavior you can't reproduce
- Performance issues after deployment

**Resources:**
- Next.js Discord: https://discord.gg/nextjs
- Stack Overflow: https://stackoverflow.com/questions/tagged/next.js
- GitHub Issues: Check project GitHub issues

---

**Still stuck? Review the code and error message carefully, then check the relevant documentation file!**
