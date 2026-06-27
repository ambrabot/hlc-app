# Clerk setup for HLCapp

HLCapp is wired to use Clerk, but the production Clerk app keys are not stored in this repository.

Needed values:

- `CLERK_PUBLISHABLE_KEY`: public frontend key, usually starts with `pk_live_` or `pk_test_`.
- `CLERK_ISSUER`: Clerk issuer URL for the app, for example `https://example.clerk.accounts.dev`.

Frontend:

1. Put the publishable key in `index.html`:

   ```html
   <meta name="clerk-publishable-key" content="pk_live_..."/>
   ```

2. When the key is present, HLCapp mounts Clerk Sign In/User Button and hides the email-code fallback.

Worker:

Set the issuer as a Worker variable:

```powershell
cmd /c wrangler secret put CLERK_ISSUER
```

The Worker will verify Clerk session JWTs using:

```text
{CLERK_ISSUER}/.well-known/jwks.json
```

Flow:

1. Customer signs in with Clerk.
2. Frontend sends Clerk session token to `/api/clerk/sync`.
3. Worker verifies the token, stores `clerk_user_id` in D1, and returns account favorites/entitlements.
4. Favorites and protocol access use the Clerk session token after that.

Until Clerk values are configured, the production app keeps the existing email-code login so the app remains usable.
