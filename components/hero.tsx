'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-accent/50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Everything You Need,
            <br />
            <span className="text-primary">All in One Place</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Discover everyday essentials across Home, Tech, Kitchen, and
            Personal Care. Quality products, fair prices, and fast shipping —
            backed by our satisfaction guarantee.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#products">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/admin">Manage Store</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Truck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold">Free Shipping</p>
              <p className="text-xs text-muted-foreground">
                On orders over $50
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <RefreshCw className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold">30-Day Returns</p>
              <p className="text-xs text-muted-foreground">
                No-questions-asked policy
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold">Secure Checkout</p>
              <p className="text-xs text-muted-foreground">
                Powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
