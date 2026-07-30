'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [local, setLocal] = useState(value);

  return (
    <div className="relative w-full max-w-sm">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={local}
        onChange={(e) => {
          setLocal(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search products..."
        className="h-10 w-full rounded-full border border-input bg-secondary pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
