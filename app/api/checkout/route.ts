import { NextRequest, NextResponse } from 'next/server';

type CheckoutItem = {
  handle: string;
  title: string;
  price: number;
  quantity: number;
};

type CheckoutBody = {
  items: CheckoutItem[];
  shipping: Record<string, string>;
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CheckoutBody;

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400, headers: corsHeaders }
      );
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      const total = body.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
      return NextResponse.json(
        {
          success: true,
          message: 'Order placed (demo mode — add STRIPE_SECRET_KEY to .env for live payments)',
          total: total.toFixed(2),
          items: body.items.length,
        },
        { status: 200, headers: corsHeaders }
      );
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-06-20' as any,
    });

    const origin = req.headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: body.items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: `${origin}/checkout?status=success`,
      cancel_url: `${origin}/checkout?status=cancelled`,
      customer_email: body.shipping.email || undefined,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
    });

    return NextResponse.json(
      { url: session.url, sessionId: session.id },
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Checkout failed';
    return NextResponse.json(
      { error: message },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}
