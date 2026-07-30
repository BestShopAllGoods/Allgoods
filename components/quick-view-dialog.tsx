'use client';

import Image from 'next/image';
import { Star, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { useCart } from '@/context/cart-context';
import type { Product } from '@/lib/types';

export function QuickViewDialog({
  product,
  open,
  onOpenChange,
}: {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { addItem } = useCart();
  if (!product) return null;

  const discount = product.compare_at_price
    ? Math.round(
        ((product.compare_at_price - product.price) / product.compare_at_price) *
          100
      )
    : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden p-0">
        <DialogClose className="absolute right-4 top-4 z-10" asChild>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square bg-secondary">
            {product.image_url && (
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col p-6">
            <DialogHeader>
              <DialogTitle className="text-xl">{product.title}</DialogTitle>
              <DialogDescription className="sr-only">
                Product details for {product.title}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={
                      n <= Math.round(product.rating)
                        ? 'h-4 w-4 fill-warning text-warning'
                        : 'h-4 w-4 text-muted-foreground'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating.toFixed(1)} · {product.stock} in stock
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.compare_at_price && (
                <>
                  <span className="text-base text-muted-foreground line-through">
                    ${product.compare_at_price.toFixed(2)}
                  </span>
                  {discount > 0 && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      Save {discount}%
                    </Badge>
                  )}
                </>
              )}
            </div>
            <Button
              className="mt-6 w-full"
              size="lg"
              disabled={!product.in_stock}
              onClick={() => {
                addItem(product);
                onOpenChange(false);
              }}
            >
              <Plus className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
