# AllGoods — E-Commerce Store

A fully functional, production-ready e-commerce web application built with Next.js, TypeScript, Tailwind CSS, and Stripe.

## Features

- **Sticky Header** — logo, search bar, category navigation, and a live cart counter that opens a slide-out cart drawer.
- **Hero Section** — high-converting banner with "Everything You Need, All in One Place" headline and Shop Collection CTA.
- **Product Catalog** — category filtering (All, Home, Tech, Kitchen, Personal Care), live search, and a responsive product grid with ratings, prices, and stock indicators.
- **Quick View & Add to Cart** — each product card supports quick-view modal and add-to-cart.
- **Slide-out Cart Drawer** — increase/decrease quantities, remove items, real-time subtotal/shipping/tax calculation, and persistent state via localStorage.
- **Stripe Checkout** — dedicated checkout page with shipping address form and a Stripe Checkout API route handler.
- **Admin Panel** (`/admin`) — add, edit, and delete products, manage stock counts.
- **Footer** — quick links, customer service policies (Shipping, Returns, Privacy), and newsletter subscription.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 13 (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui components |
| Icons | Lucide React |
| State | React Context + localStorage persistence |
| Database | Supabase (PostgreSQL) |
| Payments | Stripe Checkout |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file and fill in your keys:

```bash
cp .env.example .env.local
```

Add your Stripe and Supabase keys to `.env.local`:

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Add Stripe API keys

1. Create a Stripe account at [stripe.com](https://stripe.com).
2. Go to the **Developers → API Keys** section in your Stripe dashboard.
3. Copy your **Secret key** (starts with `sk_`) and **Publishable key** (starts with `pk_`).
4. Paste them into `.env.local` as `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.

> **Note:** The checkout works in demo mode without Stripe keys — it simulates a successful order. Add real keys to enable live payment processing via Stripe Checkout.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

### 5. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with cart provider
│   ├── page.tsx            # Home page (wrapper for Suspense)
│   ├── page-client.tsx     # Home page client component
│   ├── checkout/page.tsx   # Stripe checkout page
│   ├── admin/page.tsx      # Admin product management
│   ├── policies/           # Shipping, Returns, Privacy pages
│   └── api/checkout/       # Stripe Checkout API route
├── components/
│   ├── header.tsx          # Sticky nav with search + cart
│   ├── footer.tsx          # Footer with newsletter
│   ├── hero.tsx            # Hero banner
│   ├── product-grid.tsx    # Catalog grid wrapper
│   ├── product-card.tsx    # Individual product card
│   ├── cart-drawer.tsx      # Slide-out cart
│   ├── cart-line-item.tsx  # Cart quantity controls
│   ├── quick-view-dialog.tsx
│   ├── category-filter.tsx
│   ├── search-bar.tsx
│   └── ui/                 # shadcn/ui components
├── context/
│   └── cart-context.tsx    # Cart state + localStorage
├── lib/
│   ├── types.ts            # Product & CartItem types
│   ├── supabase-client.ts  # Supabase browser client
│   └── utils.ts
```

## Admin Access

Navigate to `/admin` to manage products. You can add new products, edit stock counts, update prices, and delete items. The admin panel is linked in the footer under Customer Service.

## License

MIT
