# ☕ Café Lumière - Enhanced Artisan Coffee Landing Page

A beautiful, fully responsive cafe landing page with advanced animations built with React.js, Vite, Tailwind CSS, and Framer Motion.

## ✨ Enhanced Features

### Advanced Animations
- **Framer Motion Integration** - Smooth, professional animations throughout
- **Scroll-triggered animations** - Content reveals as you scroll
- **Interactive hover effects** - Every element responds to interaction
- **Floating coffee beans** - Animated background decorations
- **Steam animation** - Rising steam from coffee cup in hero
- **Staggered animations** - Content appears in sequence for visual impact
- **Micro-interactions** - Buttons, cards, and icons respond to hover/tap

### Responsive Design
- **Extra-small devices** (xs: 475px) - Optimized for small phones
- **Small devices** (sm: 640px) - Standard phone sizes
- **Medium devices** (md: 768px) - Tablets
- **Large devices** (lg: 1024px) - Small laptops
- **Extra-large** (xl: 1280px+) - Desktop and large screens
- Responsive typography with fluid sizing
- Mobile-first approach with progressive enhancement
- Touch-optimized for mobile devices

### Design Features
- **Warm color palette** - Coffee browns and cream tones
- **Elegant typography** - Playfair Display, Dancing Script, Montserrat
- **Glassmorphism effects** - Modern frosted glass UI elements
- **Paper texture overlays** - Authentic, handcrafted feel
- **Gradient animations** - Animated color gradients
- **Custom scrollbar** - Styled to match the theme
- **Smooth scroll** - Buttery smooth navigation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd cafe-landing
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📁 Project Structure

```
cafe-landing/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Animated nav with mobile menu
│   │   ├── Hero.jsx          # Animated landing with coffee steam
│   │   ├── About.jsx         # Story with scroll animations
│   │   ├── Menu.jsx          # Menu cards with hover effects
│   │   ├── Ambiance.jsx      # Gallery with animations
│   │   ├── Contact.jsx       # Contact form & info
│   │   └── Footer.jsx        # Footer with social links
│   ├── App.jsx               # Main component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles + Tailwind
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind + custom breakpoints
├── postcss.config.js         # PostCSS config
└── package.json              # Dependencies
```

## 🎨 Animation Features

### Framer Motion Animations
- **Motion variants** for complex animation sequences
- **useInView hook** for scroll-triggered animations
- **Stagger children** for sequential reveals
- **Spring animations** for natural feel
- **Gesture animations** for tap/hover
- **Layout animations** for smooth transitions

### Animation Types Used
- Fade in/out
- Slide in from all directions
- Scale in/out
- Rotate
- Float
- Steam effect
- Gradient shifts
- Stagger reveals

## 📱 Responsive Breakpoints

```javascript
xs:  475px  // Extra small phones
sm:  640px  // Phones
md:  768px  // Tablets
lg:  1024px // Laptops
xl:  1280px // Desktops
2xl: 1536px // Large screens
```

## 🎯 Performance Optimizations

- Lazy loading with Framer Motion
- Scroll animations only trigger once
- Optimized Tailwind CSS (only used classes)
- Vite for lightning-fast dev server
- Production build optimization
- Minimal JavaScript bundle
- Efficient animations with GPU acceleration

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool (faster than Webpack)
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Production-ready animations
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  coffee: { /* your browns */ },
  cream: { /* your creams */ }
}
```

### Animations
Adjust animation durations in components:
```javascript
transition={{ duration: 0.6, delay: 0.2 }}
```

### Content
- Menu items: `src/components/Menu.jsx`
- Company info: `src/components/About.jsx`
- Contact details: `src/components/Contact.jsx`

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.16"
}
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
Add to `vite.config.js`:
```javascript
base: '/your-repo-name/'
```

## 🎯 Key Features

✅ Fully responsive (all screen sizes)
✅ Advanced Framer Motion animations
✅ Scroll-triggered content reveals
✅ Interactive hover states
✅ Mobile-optimized navigation
✅ Touch gestures support
✅ Smooth scrolling
✅ Professional animations
✅ Production-ready code
✅ SEO optimized
✅ Accessible (ARIA labels)
✅ Cross-browser compatible

## 📱 Mobile Features

- Hamburger menu with animation
- Touch-optimized buttons
- Swipe-friendly cards
- Responsive images
- Mobile-first breakpoints
- Reduced motion for accessibility

## 🔧 Development Tips

1. **Hot Module Replacement** - Changes appear instantly
2. **Animation debugging** - Use Framer Motion DevTools
3. **Responsive testing** - Use browser dev tools
4. **Performance** - Check with Lighthouse

## 🐛 Troubleshooting

**Animations not working?**
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser compatibility (modern browsers only)

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

MIT License - Free for personal and commercial use

## 💡 Tips

1. Customize colors to match your brand
2. Add real cafe images to gallery
3. Connect contact form to backend
4. Add Google Maps integration
5. Implement online ordering
6. Add table reservation system
7. Connect to social media APIs
8. Add analytics tracking

## 🎉 What's New in V2

- ✨ Framer Motion animations
- 📱 Enhanced mobile responsiveness
- 🎨 Improved color palette
- ⚡ Better performance
- 🔧 Extra small breakpoint (xs)
- 💫 More micro-interactions
- 🌊 Scroll animations
- 🎯 Touch optimizations

---

**Built with ❤️ and ☕**

Enjoy your beautiful, animated cafe website!
