# SEO Playbook

A practical guide based on real implementation. Covers technical SEO, local SEO, content trust signals, and Google tooling. Framework examples use Next.js App Router but the principles apply anywhere.

---

## 1. Technical Foundation

### Page Metadata
Every page needs a unique title and description. In Next.js:

```ts
// app/some-page/page.tsx
export const metadata: Metadata = {
  title: 'Page Title | Brand Name',
  description: 'Under 160 characters. Include the main keyword naturally.',
};
```

- Title: `Primary Keyword | Brand Name` — keep under 60 characters
- Description: describes the page value, not the brand. Include a soft CTA ("Get a free quote", "Find out more")
- Every page must be unique — duplicates split ranking signal

### Canonical URLs & metadataBase
Set `metadataBase` once in `layout.tsx` so relative OG image paths resolve correctly:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
};
```

### Open Graph (Social Sharing)
Without OG tags, social shares look broken. Add to `layout.tsx` or per-page:

```ts
openGraph: {
  title: 'Page Title',
  description: 'Description for social cards',
  images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  images: ['/images/og-image.jpg'],
},
```

OG image: 1200×630px. Use a real photo from the site — hero images work well.

---

## 2. Sitemap & Robots

### sitemap.ts (Next.js)
Auto-generates `/sitemap.xml`. Keeps it dynamic as pages are added.

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://yourdomain.com';
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
    // Add all pages
  ];
}
```

**Priority guide:**
- 1.0 — Homepage
- 0.8 — Core service/product/contact pages
- 0.7 — About, blog index
- 0.5 — Blog posts, sub-pages
- 0.3 — Privacy policy, T&Cs

### robots.ts

```ts
// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}
```

### Custom 404 Page
Keeps users on the site when they hit a dead URL. Add `robots: { index: false, follow: false }` so 404 pages don't get indexed.

```ts
// app/not-found.tsx
export const metadata = {
  robots: { index: false, follow: false },
};
```

Include navigation links to your main sections — reduces bounce from bad URLs.

---

## 3. Structured Data (JSON-LD)

JSON-LD tells Google what your page is about in machine-readable form. Add it as a `<script>` tag in the `<head>`.

### LocalBusiness (for any local/service business)
Add once in `layout.tsx` for the whole site:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://yourdomain.com/#business",
  "name": "Business Name",
  "url": "https://yourdomain.com",
  "telephone": "+44 7000 000000",
  "email": "contact@yourdomain.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Your Town",
    "addressRegion": "County",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "££",
  "areaServed": ["City 1", "City 2"]
}
```

Use the exact coordinates for the business location (look up on Google Maps).

### Service Schema (per service page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Service Name",
  "provider": { "@id": "https://yourdomain.com/#business" },
  "areaServed": "London",
  "description": "What this service covers"
}
```

The `@id` reference links back to your LocalBusiness entity — this is how Google understands they're the same business.

### FAQPage Schema (for FAQ sections)
Eligible for rich results (expanded accordion in search):

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Answer text." }
    }
  ]
}
```

Add to any page with a FAQ section — not just the FAQ page itself.

---

## 4. Images & Media

### Next.js Image Component
Always use `<Image>` instead of `<img>`:
- Auto-converts to WebP (30-50% smaller)
- Lazy loads by default
- Prevents layout shift (requires width/height or fill)
- Add `priority` on above-the-fold images (hero)

```tsx
<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text with keyword"
  fill
  priority
  className="object-cover"
/>
```

Alt text: describe what's in the image. Include a keyword if it fits naturally — don't force it.

### Video Compression
Large videos (>5MB) will hurt page speed. Compress with ffmpeg before uploading:

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -an -movflags faststart output.mp4
```

- `-crf 28` — quality level (lower = better quality, bigger file; 23-28 is good for web)
- `-an` — strips audio (use only if video doesn't need sound)
- `-movflags faststart` — moves metadata to start of file so video plays before fully downloaded

Always add a `poster` attribute so users see a frame before the video loads:

```html
<video controls poster="/images/video-thumbnail.jpg">
  <source src="/images/video.mp4" type="video/mp4" />
</video>
```

---

## 5. Internal Linking

Internal links pass ranking signal between pages and help Google understand your site structure.

**Rules:**
- Every service/product page should link to at least 2-3 related pages
- Location pages should link back to service pages and vice versa
- The homepage should link to all main sections
- Use descriptive anchor text — `"Mobile patrol security in London"` beats `"click here"`

**Patterns that work well:**
- "Related services" section at the bottom of service pages
- "Coverage areas" section on service pages linking to location pages
- "Services available in [location]" on location pages
- Breadcrumbs on all deep pages

---

## 6. Local SEO

Essential for any business serving a physical area.

### Location Pages
Create a page for each major area you serve: `/london`, `/hertfordshire`, etc.

Each location page needs:
- Unique content mentioning the area throughout (not just swapped city name)
- LocalBusiness schema with the area's geo coordinates
- Specific mention of towns/areas within that region
- Response times or area-specific details if available

### Google Business Profile
The single most impactful local SEO action. Free. Do this before anything else.

- Complete every field: hours, services, description, photos
- Add real photos (exterior, team, work)
- Post updates regularly (monthly minimum)
- Respond to every review

### Google Reviews
Real named reviews outperform anonymous testimonials on your own site.

- Link to your GBP review page: `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`
- Show reviews on-site with reviewer name + "Verified Google Review"
- Include the Google G logo on review cards for credibility
- Add a "Read all reviews on Google" link

### Directory Listings
Consistent NAP (Name, Address, Phone) across directories is a ranking signal.

Key directories (UK):
- Yell.com
- Checkatrade (trade businesses)
- Thomson Local
- Bing Places
- Apple Maps Connect
- Industry-specific directories (SIA register, trade bodies)

---

## 7. Trust Signals

Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework means trust signals on the page affect ranking — not just links.

### Trust Bar (above the fold)
A horizontal strip directly below the hero with 3-4 trust items:
- Star rating (linked to Google reviews)
- Key accreditation (SIA, ISO, trade body)
- Years in business
- Specific credential (ex-police, ex-military, chartered, etc.)

These need to be visible without scrolling.

### Credentials
- Only list accreditations that are still active
- Link to the accrediting body where possible (builds authority)
- Certificate images add credibility but verify they're current first

### Social Proof
- Use real, named reviews — initials + full name beats "anonymous"
- Include reviewer context where permission allows ("Used for office security, London")
- 3 strong reviews on the homepage + "see all on Google" link is better than 10 weak ones

---

## 8. Conversion (Trust → Enquiry)

SEO gets visitors. These convert them.

### Phone Number
For service businesses, the phone number should be:
- Visible in the header on every page
- In the hero section
- `tel:` linked so mobile users tap-to-call
- In the footer

### Enquiry Form
Reduce friction by putting a short form on the homepage, not just a "Contact Us" link:
- 4-5 fields max: Name, Phone, Email, Service, Message
- Submit to your existing API endpoint
- Show a clear success state (not just a toast)
- Below the form: "Free consultation · No obligation · Response within X hours"

### Response Time Expectations
Tell visitors when they'll hear back. "We respond within 2 hours during business hours" removes the fear of submitting and never hearing back.

---

## 9. Google Search Console Setup

### Verification Methods (in order of ease)
1. **HTML tag** — add `<meta name="google-site-verification" content="...">` to `<head>`
2. **DNS TXT record** — add a TXT record in your domain registrar (works even with split DNS setups)
3. **HTML file** — upload a file to the root of your site

### After Verification
1. Submit sitemap: Settings → Sitemaps → paste `/sitemap.xml`
2. Check Coverage report for crawl errors
3. Check Performance report after ~2 weeks for impressions/clicks
4. Use URL Inspection to force-crawl any important new page

### What to Watch
- **Not indexed — Crawled but not indexed**: Usually thin content. Add more useful content.
- **404 errors in bulk**: Check if the site was ever hacked (injected URLs). Create a custom 404 page; Google will deindex naturally over time. Don't redirect hacked URLs.
- **Excluded by noindex**: Check no pages are accidentally noindexed.

---

## 10. Hacked Site Recovery

If you see hundreds or thousands of 404s for random URLs (foreign-language product URLs, unrelated categories), the old site was likely hacked with URL injection.

**What not to do:** Don't create redirects for these URLs. It legitimises the spam paths.

**What to do:**
1. Build a solid custom 404 page with navigation links
2. Submit the sitemap of your real pages to Google Search Console
3. Google will deindex the bad URLs over weeks/months — nothing you can do to speed this up significantly
4. If still indexed after 3+ months, use the URL Removal tool in GSC for individual URLs

---

## 11. Page Speed

Page speed is a ranking factor, especially on mobile. Quick wins:

- Use Next.js Image component (auto-optimisation)
- Compress videos before uploading (see Section 4)
- Don't use web fonts if system fonts will do
- Avoid large JavaScript bundles on pages that don't need them
- Use `loading="lazy"` on below-the-fold images (Next.js does this automatically)

Test with: [PageSpeed Insights](https://pagespeed.web.dev/) and [GTmetrix](https://gtmetrix.com/)

Target: 90+ on mobile is excellent, 70+ is acceptable for image-heavy service sites.

---

## 12. Launch Checklist

### Before Launch
- [ ] Unique title + description on every page
- [ ] `metadataBase` set in layout
- [ ] OG image (1200×630) configured
- [ ] sitemap.ts created and tested (`/sitemap.xml`)
- [ ] robots.ts created (`/robots.txt`)
- [ ] Custom 404 page with navigation
- [ ] JSON-LD schema on homepage (LocalBusiness)
- [ ] JSON-LD schema on key service pages
- [ ] All images use Next.js `<Image>` with alt text
- [ ] Videos compressed and have poster images
- [ ] Internal links between related pages
- [ ] Phone number `tel:` linked throughout
- [ ] Contact form tested end-to-end

### After Launch
- [ ] Submit to Google Search Console (DNS verify)
- [ ] Submit sitemap in GSC
- [ ] Set up Google Business Profile
- [ ] Add business to key directories (Yell, Bing Places, Apple Maps)
- [ ] Request reviews from past customers
- [ ] Check GSC coverage report after 1 week
- [ ] Check GSC performance report after 2-3 weeks

### Ongoing (Monthly)
- [ ] Post an update on Google Business Profile
- [ ] Check for new GSC errors
- [ ] Add any new pages to sitemap
- [ ] Respond to any new Google reviews

---

## Quick Reference

| What | Where | Impact |
|------|-------|--------|
| LocalBusiness schema | `layout.tsx` | High — entity recognition |
| Sitemap | `app/sitemap.ts` | High — ensures all pages get crawled |
| Google Business Profile | Off-site | Very high — local pack ranking |
| Real named reviews | Homepage + GBP | High — E-E-A-T + conversion |
| Trust bar | Below hero | Medium — conversion + dwell time |
| Internal linking | All pages | Medium — distributes page rank |
| OG image | `layout.tsx` | Medium — social traffic |
| Video compression | Before upload | Medium — page speed |
| Directory listings | Off-site | Medium — NAP consistency |
| Custom 404 | `not-found.tsx` | Low-medium — reduces bounce |
