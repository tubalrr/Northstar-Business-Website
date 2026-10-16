# Northstar — Fictional Brand Website Concept

**Live concept preview:** https://tubalrr.github.io/Northstar-Business-Website/

Northstar is a fictional brand and website design concept. It is not an operating company, does not have clients, and does not offer products or services. All service descriptions, sample project formats, portfolio visuals, and About copy are illustrative demo content.

## What's included

- Responsive one-page website with mobile navigation and skip-to-content link
- Dark/light theme toggle with locally saved preference
- Premium compass-inspired SVG logo and social sharing preview artwork
- Hero section with a clearly labeled illustrative dashboard
- Fictional portfolio explorations for brand identity, website design, and dashboard UI
- Six sample service cards
- Our Approach workflow and six sample deliverable formats
- About section, accessible FAQ accordions, and a contact/demo disclosure section
- Reduced-motion support, keyboard focus indicators, semantic HTML, and responsive layouts
- Page title and description, canonical URL, Open Graph/Twitter metadata, robots.txt, and sitemap.xml

## Files

- index.html — site markup, styles, and interactive behavior
- northstar-logo.svg — site mark and favicon
- northstar-social-card.svg — social sharing preview graphic
- robots.txt — crawler guidance and sitemap location
- sitemap.xml — public site URL

## Deployment

The site is intended for GitHub Pages from the main branch. After committing changes, allow Pages to publish and refresh the browser if its cached version remains visible.

## Important note

The CTA buttons demonstrate navigation within the concept website. There is no real contact form, email inbox, consultation service, analytics integration, or backend. Do not interpret the sample copy or mockups as real business claims or client work.


## Live consultation and project requests

The request form now writes to Cloud Firestore collection `consultationRequests`. The private request inbox is available at `/admin.html`. Both remain unavailable until the project's own Firebase configuration is added and the rules below are deployed.

### One-time Firebase setup

1. In Firebase Console, create a project and register a **Web app**. Copy its web configuration into `firebase-config.js`. This web config is public by design; never put a service-account private key in the website.
2. In **Authentication → Sign-in method**, enable **Email/Password**. In **Authentication → Users**, create the administrator account. Use that exact email for `adminEmail` in `firebase-config.js`.
3. Create a **Cloud Firestore** database.
4. Open `firestore.rules`, replace `REPLACE_WITH_ADMIN_EMAIL` with the administrator email in the rules string, and publish those rules in Firebase Console → Firestore Database → Rules. The public can create validated requests, but cannot read or list the inbox.
5. Commit the configured `firebase-config.js` to the site branch, wait for GitHub Pages to deploy, then open `https://tubalrr.github.io/Northstar-Business-Website/admin.html` and sign in.
6. Test a request using the public site. It should appear in the private admin inbox as **New**. Use the inbox to change status, delete a request, or export the latest 100 requests as CSV.

### What's included

- Validated request submission with honest error handling (it never shows success when Firebase is not configured or the write fails).
- Private admin sign-in using Firebase Authentication.
- Firestore security rules limiting public access to creating valid request documents; reading and managing requests requires the configured admin email.
- Request status tracking and CSV export from the inbox.

**Important:** No project-specific Firebase credentials were provided for this repository, so `firebase-config.js` contains placeholders until its owner fills them in. Requests cannot be received before the Firebase steps above are completed. Email notifications are not enabled in this version; submissions go to the Firestore inbox.
