# MSYK Luxury Streetwear - Full E-commerce Platform

This project is a production-oriented foundation for a premium dark-luxury streetwear store.

## Included
- Next.js + React + Tailwind + Framer Motion architecture
- Storefront pages: Home, Shop, Product, Cart, Checkout, Account, Wishlist, Blog
- Separate Admin Application at `apps/admin` (runs independently on port `3001`)
- API routes for products, orders, categories, checkout, coupons, upload, settings
- Prisma PostgreSQL schema and seed script
- Brand logo integration (`public/msyk-logo.png`)

## Quick Start
1. Install Node.js LTS.
2. In terminal run:
   - `npm install`
   - `npm run db:push`
   - `npm run db:seed`
   - `npm run dev:store`
   - `npm run dev:admin`
3. Open:
   - Storefront: `http://localhost:3000`
   - Admin app: `http://localhost:3001/dashboard`

## Environment Variables
Use `.env.example` and set:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## Deploy to Vercel
1. Push to GitHub.
2. Import repository in Vercel.
3. Add all env vars.
4. Build command: `npm run build`.

## Payment Setup
- Stripe endpoint: `app/api/checkout/stripe/route.ts`
- PayPal endpoint: `app/api/checkout/paypal/route.ts`
- COD/local toggles: `app/api/admin/settings/route.ts`

## SEO
- Update metadata in `app/layout.tsx`
- Add sitemap/robots files in next iteration if needed

## Notes
- This codebase is structured for easy extension into full enterprise-grade operations.
- Next step is adding full CRUD forms and secure role middleware for admin APIs.
