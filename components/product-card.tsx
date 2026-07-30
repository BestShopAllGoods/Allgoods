'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Plus, Eye, ImageOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/cart-context';
import type { Product } from '@/lib/types';

export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView: (product: Product) => void;
}) {
  const { addItem } = useCart();
  const [imgError, setImgError] = useState(false);
  const discount = product.compare_at_price
    ? Math.round(
        ((product.compare_at_price - product.price) / product.compare_at_price) *
          100
      )
    : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-secondary"
        onClick={() => onQuickView(product)}
      >
        {!imgError && product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <ImageOff className="h-10 w-10" />
          </div>
        )}
        {discount > 0 && (
          <Badge className="absolute left-3 top-3 bg-destructive text-destructive-foreground">
            -{discount}%
          </Badge>
        )}
        {!product.in_stock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70">
            <Badge variant="secondary">Out of Stock</Badge>
          </div>
        )}
        <button
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-md transition-opacity group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          aria-label="Quick view"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          <span className="text-xs font-medium">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">
            · {product.stock} in stock
          </span>
        </div>
        <h3
          className="line-clamp-2 cursor-pointer text-sm font-semibold hover:text-primary"
          onClick={() => onQuickView(product)}
        >
          {product.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
          {product.vendor}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          {product.compare_at_price && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.compare_at_price.toFixed(2)}
            </span>
          )}
        </div>

        <Button
          className="mt-3 w-full"
          size="sm"
          disabled={!product.in_stock}
          onClick={() => addItem(product)}
        >
          <Plus className="mr-1 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
