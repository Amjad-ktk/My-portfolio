# 🚀 Portfolio Deployment Guide

## Quick Deploy Options

### 1. **Vercel (Recommended) - Free & Easy**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 2. **Netlify - Free & Popular**
```bash
# Build your project
npm run build

# Deploy to Netlify
# 1. Go to netlify.com
# 2. Drag & drop the 'out' folder
# 3. Or use Netlify CLI
```

### 3. **GitHub Pages - Free**
```bash
# Build and export
npm run export

# The 'out' folder contains your static site
# Upload to GitHub Pages or any static host
```

## 📋 Pre-Deployment Checklist

- [ ] Test locally: `npm run dev`
- [ ] Build project: `npm run build`
- [ ] Check for errors in build output
- [ ] Test build locally: `npm run start`

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Export static files
npm run export

# Deploy to Vercel
npm run vercel
```

## 🌐 Deployment Steps

### **Vercel Deployment:**
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow prompts to link/create project
4. Deploy: `vercel --prod`

### **Netlify Deployment:**
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `out` folder
4. Configure custom domain (optional)

### **GitHub Pages:**
1. Build: `npm run export`
2. Push `out` folder to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or `/root`

## 📱 Custom Domain Setup

### **Vercel:**
- Add domain in Vercel dashboard
- Update DNS records as instructed

### **Netlify:**
- Add custom domain in site settings
- Update DNS records

### **GitHub Pages:**
- Add CNAME file in repository
- Update DNS records

## 🚨 Troubleshooting

### **Build Errors:**
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### **Image Issues:**
- Ensure all images are in `public/` folder
- Check image paths in components

### **Styling Issues:**
- Verify Tailwind CSS is building correctly
- Check for CSS conflicts

## 📊 Performance Tips

- Optimize images before adding to `public/`
- Use Next.js Image component for dynamic images
- Minimize bundle size by removing unused dependencies
- Enable compression on your hosting platform

## 🔒 Security Considerations

- Don't commit API keys or secrets
- Use environment variables for sensitive data
- Enable HTTPS on your hosting platform
- Regular dependency updates

## 📈 Analytics & Monitoring

### **Vercel Analytics:**
- Built-in performance monitoring
- Real-time analytics dashboard

### **Google Analytics:**
- Add GA4 tracking code
- Monitor user behavior and performance

## 🎯 Next Steps After Deployment

1. Test all links and functionality
2. Set up custom domain (if desired)
3. Add analytics tracking
4. Optimize for SEO
5. Share your portfolio!

---

**Need Help?** Check the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) or your hosting platform's support docs.
