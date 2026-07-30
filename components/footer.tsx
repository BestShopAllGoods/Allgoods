'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-primary">AllGoods</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need, all in one place. Quality everyday products
              at fair prices.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/?category=Home" className="hover:text-foreground">
                  Home Essentials
                </Link>
              </li>
              <li>
                <Link href="/?category=Tech" className="hover:text-foreground">
                  Tech & Accessories
                </Link>
              </li>
              <li>
                <Link href="/?category=Kitchen" className="hover:text-foreground">
                  Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Personal Care"
                  className="hover:text-foreground"
                >
                  Personal Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Customer Service</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/policies/shipping" className="hover:text-foreground">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/returns" className="hover:text-foreground">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-foreground">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              Subscribe for deals and new arrivals.
            </p>
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                type="email"
                placeholder="you@example.com"
                className="h-9 flex-1"
                aria-label="Email address"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
            <div className="mt-4 space-y-1 text-xs text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> support@allgoods.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> 1-800-ALLGOODS
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> 123 Market St, San Francisco
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} AllGoods. All rights reserved. Built
            with Next.js, Tailwind CSS, and Stripe.
          </p>
        </div>
      </div>
    </footer>
  );
}
