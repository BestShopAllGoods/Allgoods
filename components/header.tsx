'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useCart } from '@/context/cart-context';
import { CATEGORIES } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Header() {
  const { itemCount, openCart } = useCart();
  const [search, setSearch] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/?q=${encodeURIComponent(search.trim())}`);
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md transition-shadow',
        scrolled && 'shadow-md'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Browse</span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="mt-6 flex flex-col gap-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.value}
                  href={cat.value === 'all' ? '/' : `/?category=${cat.value}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  {cat.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-primary">
            AllGoods
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.value}
              href={cat.value === 'all' ? '/' : `/?category=${cat.value}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <form onSubmit={handleSearch} className="relative ml-auto md:ml-4">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="h-10 w-40 rounded-full border border-input bg-secondary pl-9 pr-3 text-sm outline-none transition-all focus:w-56 focus:border-primary focus:ring-1 focus:ring-primary sm:w-48"
          />
        </form>

        <Button
          variant="ghost"
          size="icon"
          onClick={openCart}
          className="relative"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground animate-scale-in">
              {itemCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
