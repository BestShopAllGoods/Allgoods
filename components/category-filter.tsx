'use client';

import { useRouter } from 'next/navigation';
import { CATEGORIES } from '@/lib/types';
import { cn } from '@/lib/utils';

export function CategoryFilter({ active }: { active: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() =>
            router.push(cat.value === 'all' ? '/' : `/?category=${cat.value}`)
          }
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-medium transition-all',
            active === cat.value
              ? 'border-primary bg-primary text-primary-foreground shadow-sm'
              : 'border-border bg-background hover:border-primary/50 hover:bg-accent'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
