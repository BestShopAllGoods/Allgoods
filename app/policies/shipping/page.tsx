export default function ShippingPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Shipping Policy</h1>
      <div className="prose mt-6 text-sm text-muted-foreground">
        <p className="mb-4">
          We offer free standard shipping on all orders over $50 within the
          continental United States. Orders under $50 incur a flat shipping fee
          of $5.99.
        </p>
        <p className="mb-4">
          Orders are processed within 1-2 business days. Standard delivery
          takes 3-5 business days. Expedited shipping options are available at
          checkout.
        </p>
        <p className="mb-4">
          International shipping is available to select countries. Rates and
          delivery times vary by destination.
        </p>
      </div>
    </div>
  );
}
