# Pak Auto Care - Premium Vehicle Care E-Commerce

## Overview
An animated, modern e-commerce platform for premium vehicle care products designed for Pakistani roads. Features a fully functional product catalog, dark/light theme switching, shopping cart, and product detail modals with smooth animations.

## ✨ New Features Implemented
- **Animated Product Cards**: Smooth slide-in animations with hover effects
- **Theme Switcher**: Dark mode (⚫) and light mode toggle in navbar
- **Product Modal System**: Click any product to see full details in an animated popup
- **Smart Cart System**: Add/remove items with real-time cart counter badge
- **Auto Care Products**: 8 curated professional auto care products with categories
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Transitions**: CSS animations throughout for a polished feel

## 📁 Project Structure
```
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx               # Home page (hero + features)
│   ├── products/page.tsx       # Products catalog with animations
│   ├── cart/page.tsx           # Shopping cart
│   ├── checkout/page.tsx       # Checkout flow
│   └── auth/                   # Authentication pages
├── components/
│   ├── product-card.tsx        # Animated product card component
│   ├── product-modal.tsx       # Product detail modal/popup
│   ├── theme-toggle.tsx        # Dark/light mode toggle button
│   ├── navbar-static.tsx       # Navigation with theme & cart badge
│   └── ...                     # Other existing components
├── lib/
│   ├── contexts.tsx            # React contexts (Cart, Theme, Product)
│   ├── products.ts             # Product data (8 auto care products)
│   └── supabase/              # Supabase integration
└── styles/
    └── globals.css             # Animations & theme styles
```

## 🛍️ Products Available
1. **Premium Car Shampoo** - Professional pH-balanced formula (Rs. 1,299)
2. **Ceramic Wax Coating** - Nano-ceramic protection (Rs. 2,499)
3. **Microfiber Drying Towels** - Set of 3 premium towels (Rs. 899)
4. **Glass Cleaning Solution** - Streak-free windshield cleaner (Rs. 699)
5. **Tire Shine & Protectant** - UV protection spray (Rs. 549)
6. **Leather Conditioner** - Nourishing leather care (Rs. 1,199)
7. **Clay Bar Kit** - Deep cleaning & decontamination (Rs. 1,899)
8. **Car Air Freshener** - Long-lasting natural freshener (Rs. 399)

## 🎨 Key Features
- **Dark/Light Theme Toggle** - Button in navbar (moon/sun icon)
- **Product Categories**: Cleaning, Protection, Accessories, Tires, Interior
- **Animated Product Cards**: Hover effects, scale transforms, smooth fade-ins
- **Product Detail Modal**: Click "View Details" to see:
  - Full product description
  - Key specifications & benefits
  - Star ratings & customer reviews
  - Quantity selector
  - Add to cart button
- **Shopping Cart** - Add items, see live cart counter badge
- **Responsive Grid** - 1 column mobile, 2 tablet, 4 desktop

## 🔧 Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Radix UI
- **State**: React Context API
- **Animations**: Tailwind animations + CSS keyframes
- **Backend/Auth**: Supabase
- **3D Effects**: Three.js + React Three Fiber (on homepage)

## 🚀 Development
```bash
npm run dev    # Start dev server (port 5000)
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run linter
```

## 🌙 Theme System
- Uses React Context for global theme state
- Automatically applies dark/light colors throughout
- Theme toggle button in navbar (moon/sun icon)
- Persists cart items across page navigation
- Product modal respects theme colors

## 🛒 Cart Functionality
- Add products from detail modal with quantity
- Cart counter badge shows item count in navbar
- Cart context manages all cart operations
- Remove items or adjust quantities
- Real-time price calculations

## 🎯 Animation Details
- **Slide-up animations** on product cards (staggered timing)
- **Hover effects** - Cards scale up and change borders
- **Modal animations** - Zoom in + fade in effect
- **Button animations** - Pulse effect on "Add to Cart"
- **Smooth transitions** - All theme changes are animated

## 📱 Pages
- `/` - Home (hero, features, CTA)
- `/products` - Animated product catalog
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/auth/login` - User login
- `/auth/sign-up` - User registration
- `/subscription` - Subscription plans
- `/about` - About page
- `/contact` - Contact page

## 🔐 Authentication
- Supabase authentication integrated
- Protected routes for user accounts
- Admin dashboard functionality

## ⚙️ Deployment
- Configured for **autoscale** deployment
- Build: `npm run build`
- Start: `npm run start` (port 5000)
- Cache control headers for dev proxy compatibility
