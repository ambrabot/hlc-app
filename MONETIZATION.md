# HLCapp monetization path

Current production state:

- Free account access uses email-code login.
- Favorites sync to the HLC account in Cloudflare D1.
- Protocol access is represented as an entitlement on the account.
- Payhip webhook endpoint exists at `/api/webhooks/payhip` and can grant protocol entitlements by buyer email.

What this supports now:

- One-time protocol purchases through Payhip.
- A customer can buy, sign in with the same email, and receive account-level protocol access after the Payhip webhook posts the sale.

What still needs to be wired for true subscription:

- A recurring product in Payhip or Stripe.
- Webhook events for subscription started, renewed, failed, cancelled, and refunded.
- Entitlement expiry/status in D1 instead of permanent one-time access.
- Customer support admin tooling to search a customer and adjust entitlements.
