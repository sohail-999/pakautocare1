# Pak Auto Care

## Overview
An e-commerce website for premium vehicle care products designed for Pakistani roads. Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Supabase for backend/authentication.

## Project Structure
- `/app` - Next.js App Router pages
  - `/admin` - Admin dashboard (customers, orders, products, settings)
  - `/auth` - Authentication (login, sign-up)
  - `/cart` - Shopping cart
  - `/checkout` - Checkout flow
  - `/products` - Product listings
  - `/protected` - User account pages (orders, profile)
  - `/subscription` - Subscription management
- `/components` - Reusable React components
- `/lib` - Utility functions and Supabase client
- `/hooks` - Custom React hooks
- `/styles` - Global styles
- `/public` - Static assets

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives with shadcn/ui
- **Backend/Auth**: Supabase
- **3D Graphics**: Three.js with React Three Fiber

## Development
The dev server runs on port 5000 with host 0.0.0.0 for Replit compatibility.

```bash
npm run dev
```

## Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

## Deployment
Configured for autoscale deployment with:
- Build: `npm run build`
- Start: `npm run start`
