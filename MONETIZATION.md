# HLC Club — monetization (live)

## Subscription (the LTV)

- **Stripe** subscription on the shared US account `acct_1PCN4JDaaq6By5Hj` (USD).
- Product `HLC Club Membership` — Monthly **$9** + Annual **$69**.
- Flow: app → `POST /api/checkout {plan}` (auth required) → Stripe Checkout (subscription) → Stripe webhook `POST /api/webhooks/stripe` → entitlement `hlc-club` written to D1 with `status` + `current_period_end`.
- Access: Club recipes + protocols are gated; `activeEntitlements` only returns `active` and not-past-period grants, so cancel/expiry locks automatically.
- Webhook events handled: `checkout.session.completed`, `customer.subscription.created|updated|deleted`. Signature-verified (HMAC), idempotent (`stripe_events`).

## One-time (Payhip, secondary)

- `POST /api/webhooks/payhip?key=<PAYHIP_WEBHOOK_SECRET>` grants one-time product entitlements (e.g. `gut-reset-protocol`). Secret-gated to prevent free grants.

## Pricing model

- **Free** (magnet): browse + 6 free recipes → email-code account.
- **HLC Club** ($9/mo · $69/yr): all 18 recipes, full protocols, swaps, favorites sync, weekly drops.
