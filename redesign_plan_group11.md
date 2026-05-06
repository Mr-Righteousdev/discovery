# Africa Safari Discovery — Full Website Redesign Brief
## For the AI Developer Implementing This Redesign (Group 11)

---

## 0. How to Read This Brief

This document is the **complete specification** for rebuilding the Africa Safari Discovery Tours website from scratch. It was prepared by combining findings from two separate UI/UX analysis exercises conducted on the original site at:

> **https://www.africasafaridiscovery.com**

Every design decision you make should be traceable to a weakness identified here. Every strength listed should be visible and improved in your output. Read this entire brief before writing any code.

**This is a strictly multi-page website.** Do not build a single scrollable page. Build a real multi-page site with HTML files, a shared navigation bar, shared footer, and dedicated pages as specified in Section 5.

---

## 1. About the Brand

**Africa Safari Discovery** is a Nairobi, Kenya-based tour and travel company. Services include:

- Wildlife game drive safaris across Kenya, Tanzania, Uganda, Rwanda
- Mountain hiking (Mt. Kenya, Mt. Kilimanjaro, Rwenzori)
- Luxury, honeymoon, family, and cultural safari packages
- Safari vehicle hire
- Travel consultancy and itinerary planning

**Target audience:** International tourists from North America, Europe, and within Africa. These are aspirational, research-heavy travelers committing $150–$9,000+ per booking. They are cautious, compare multiple operators, and decide based on trust, visual appeal, reviews, and clarity.

**Brand personality:** Premium. Wild. Trustworthy. Authentically African. Experiential.

**Certifications to feature prominently:** KATO (Kenya Association of Tour Operators), AMREF Flying Doctors.

---

## 2. Weaknesses to Fix — Every Single One

These were identified across both group evaluations. The redesign must address all of them.

### W1 — Severely Outdated Visual Design
The original site looks abandoned — dated gradients, rigid layouts, generic fonts, clip-art-style icons, and a copyright year of 2021. **Your redesign must look like it was built in 2025** — modern, aspirational, premium.

### W2 — Poor Image Quality and Inconsistent Photography
Images are low-resolution, stretched, inconsistently cropped. In safari tourism, photography IS the product. **Use dramatic, high-quality, full-bleed Unsplash/Pexels imagery** throughout. Every image must be consistent in quality, tone, and composition. Use real URLs.

### W3 — No Clear Primary Call to Action (CTA)
The original has 8+ competing actions at equal visual weight — users freeze. **One dominant CTA must rule the hero:** "Plan My Safari" or "Book Your Safari Now." All other CTAs are clearly subordinate.

### W4 — Months in Search Filter Sorted Alphabetically
The original dropdown listed months as April, August, December... **List months in calendar order:** January → December. Always.

### W5 — Broken Navigation Links (Dubai → Rwanda)
Dubai clicked through to Rwanda. **All links must go exactly where they say.** Every destination must have its own correct page.

### W6 — Duplicate/Copy-Pasted Tour Descriptions
Multiple tours shared identical text. **Every tour must have a unique, accurate description** written specifically for that package.

### W7 — Dead Blog (Last Post: 2016/2019)
"Latest Posts" showed articles 5–10 years old. **Either remove the blog or show it with realistic 2024/2025 content.** No article older than 2024 should appear.

### W8 — Unprofessional Contact Email (Yahoo Address)
A personal Yahoo email was listed as the USA contact. **All contact emails must use the company domain:** e.g. `info@africasafaridiscovery.com`, `usa@africasafaridiscovery.com`.

### W9 — No Mobile-First Design
Navigation, hero slider, and tour grids broke on mobile. **Build mobile-first.** Every page must work cleanly at 375px, 768px, and 1280px+. Hamburger menu required on mobile.

### W10 — Cluttered, Disorganised Footer
The footer was a wall of unsorted content. **Build a clean grid footer** with grouped sections: About, Quick Links, Destinations, Contact, Socials, Legal.

### W11 — UI Inconsistency Across Pages
Different pages had different fonts, spacing, button styles, and layouts — a fragmented visual language. **Build and apply a strict design system** (color variables, typography scale, spacing units, button styles) consistently across every single page.

### W12 — Slow Loading Performance
Heavy unoptimized images and too many scripts caused high bounce risk. **Keep the codebase lean:** lazy-load images, avoid unnecessary JS libraries, use CDN-hosted fonts, compress where possible.

### W13 — No Sidebar on Inner Pages
Tour listing and destination pages had no sidebar for filtering. **Add a sidebar on tour listing pages** with filters: price range, duration, destination, tour type.

### W14 — Inconsistent Navigation Across Pages
Some inner pages had different menu items or missing breadcrumbs. **All pages must share the same navigation bar and breadcrumb trail** showing the user's location in the site.

### W15 — Search Bar Returns Poor/No Results
The search widget was non-functional or returned irrelevant results. **Implement a working search** with autocomplete suggestions and a graceful "no results" fallback page.

### W16 — No Dedicated Testimonials Page
Reviews were scattered and limited to 2 generic entries. **Build a dedicated Testimonials/Reviews page** with at minimum 8–10 reviews including reviewer name, country, star rating, date, and review text.

### W17 — No Language Options
The site served only English, excluding French, German, and other major tourist-origin languages. **Add a visible language selector in the navigation bar** (even if it is a placeholder UI — the selector should be present and styled).

### W18 — No Third-Party Integrations / Trust Badges
No payment gateway logos, no TripAdvisor badge, no Google Reviews widget. **Add trust badges in the footer and relevant pages:** TripAdvisor, PayPal/Stripe accepted, Google Reviews rating.

### W19 — Deals Section Poorly Designed
The deals section used a cheap visual aesthetic inconsistent with a premium operator. **Redesign the deals section** with countdown timers, clear original vs. discounted pricing, and a premium card layout.

### W20 — No Breadcrumb Navigation
Inner pages gave no sense of where the user was in the site. **Add breadcrumb navigation to all inner pages** (e.g. Home > Destinations > Kenya > Maasai Mara Safari).

---

## 3. Strengths to Preserve and Improve

| Original Strength | How to Improve It in the Redesign |
|---|---|
| Clear top-level navigation | Keep categories, redesign visually, fix all links, add breadcrumbs |
| On-hero search/filter widget | Keep, fix month ordering, make visually beautiful and integrated |
| Social proof (reviews, stats counter) | Expand: more reviews, dedicated page, animated counters |
| KATO + AMREF accreditation badges | Keep prominently, redesign to look professional and trust-inspiring |
| Multiple contact channels (phone, WhatsApp, email, Skype) | Keep all, redesign contact section cleanly with domain emails |
| Price anchoring / deals section | Keep concept, redesign with countdown timers and premium aesthetic |
| Downloadable company profile and brochure | Keep as a CTA in the About page and footer |

---

## 4. Design Direction

### Aesthetic Vision
**Luxury editorial meets wild Africa.** The feeling of opening a premium travel magazine — National Geographic meets a high-end safari lodge website (think andBeyond, Singita, or &Beyond). Every page should make the visitor feel like they are already on safari.

NOT: A generic WordPress tourism theme. NOT: Clip art. NOT: Rainbow gradients. NOT: Purple-on-white AI slop.

### Color Palette
```
--color-primary:     #1B4332;   /* Deep forest green — earth, Africa, nature */
--color-accent:      #C8882A;   /* Warm golden amber — savanna sunset */
--color-bg:          #FAF7F2;   /* Warm cream — not pure white */
--color-dark:        #1A1A1A;   /* Rich charcoal for body text */
--color-surface:     #F0EDE6;   /* Warm sand for alternate section backgrounds */
--color-light-green: #D6EFE1;   /* Soft mint for highlights */
--color-white:       #FFFFFF;
```

### Typography
Choose **distinctive, premium fonts** — NOT Arial, Inter, Roboto, or Space Grotesk.

- **Display / Headings:** Something with character and gravitas. Suggestions: `Cormorant Garamond`, `Playfair Display`, `Fraunces`, or `DM Serif Display`
- **Body / UI:** A clean, readable companion. Suggestions: `DM Sans`, `Source Sans 3`, or `Outfit`
- Load both via Google Fonts `<link>` in the `<head>` of every page.

### Motion & Interaction
- **Hero:** Ken Burns subtle zoom effect on background image. Text fades in with stagger.
- **Stats section:** Animated count-up triggered when the section scrolls into view (use IntersectionObserver).
- **Tour cards:** On hover — image zooms slightly, overlay with tour details slides up.
- **Navigation:** Transparent over hero, transitions to solid dark/white on scroll (use scroll event listener).
- **Page transitions:** Subtle fade-in on page load (`body { animation: fadeIn 0.4s ease; }`).
- **Destination tiles:** Parallax or scale effect on hover.

### Imagery
Use real Unsplash/Pexels image URLs. Required imagery categories:
- **Hero (homepage):** Full-viewport African savanna or elephant at sunset
- **Kenya pages:** Maasai Mara lions, hot air balloons over savanna, Amboseli elephants with Kilimanjaro
- **Tanzania pages:** Serengeti wildebeest migration, Kilimanjaro summit, Ngorongoro crater
- **Uganda pages:** Mountain gorillas, Bwindi Impenetrable Forest, Queen Elizabeth NP
- **Rwanda pages:** Gorilla trekking, Volcanoes National Park, Lake Kivu
- **Tours:** Unique high-quality image per tour card, no duplicates
- **Testimonials:** Diverse avatar photos (people, not AI faces)

---

## 5. Full Page Structure — Strictly Multi-Page

Build the following HTML files. Each shares the same `<nav>`, `<footer>`, CSS, and JS files.

### File Structure
```
/index.html                        ← Homepage
/tours.html                        ← All Tours listing page
/destinations.html                 ← Destinations overview page
/destination-kenya.html            ← Kenya dedicated page
/destination-tanzania.html         ← Tanzania dedicated page
/destination-uganda.html           ← Uganda dedicated page
/destination-rwanda.html           ← Rwanda dedicated page
/destination-dubai.html            ← Dubai dedicated page
/deals.html                        ← Special Deals & Discounts page
/testimonials.html                 ← Full Testimonials / Reviews page
/about.html                        ← About Us page
/contact.html                      ← Contact page
/blog.html                         ← Blog listing page (2024/2025 posts only)
/css/style.css                     ← Shared stylesheet
/js/main.js                        ← Shared JavaScript
```

---

### Page 1: `index.html` — Homepage

**Sections in order:**

1. **Navbar** — Logo left, menu links right, language selector, hamburger on mobile. Transparent over hero, solid on scroll.

2. **Hero Section** — Full viewport height. Dramatic full-bleed African landscape. Large display headline (e.g. *"Discover Africa's Wild Heart"*). Subheadline. One dominant CTA: **"Plan My Safari"** (links to `/tours.html`). Below headline: Tour search widget with Type, Destination, Month (calendar order), and Search button.

3. **Why Choose Us** — 4 icon-driven value propositions in a horizontal row:
   - 14,500+ Happy Travelers
   - KATO Certified Operator
   - Expert Local Guides
   - 24/7 Trip Support

4. **Popular Tours** — Grid of 6 tour cards. Each card: unique image, tour name, destination flag/tag, duration, price ("from $X"), unique 2-line description, "View Tour" button.

5. **Destinations** — Visual tiles grid for: Kenya, Tanzania, Uganda, Rwanda, Dubai. Each tile: full-bleed image, country name, "X tours available" tag, links to respective destination page.

6. **Deals & Discounts** — 3 featured deal cards with: image, tour name, original price (crossed out), discounted price, discount % badge, countdown timer, "Grab This Deal" CTA.

7. **Stats Counter** — Dark/green background section. Animated counters: 14,532+ Customers, 521+ Destinations, 1,096+ Tours, 15+ Years Experience.

8. **Testimonials Preview** — 3 featured testimonials. Each: avatar, name, country, star rating (5 stars), review text. "Read All Reviews" button links to `/testimonials.html`.

9. **Trust Bar** — Logos/badges: KATO, AMREF, TripAdvisor, PayPal Accepted, Google Rating (4.9★).

10. **Newsletter Signup** — Simple email input + "Subscribe" button. Warm background. Brief copy.

11. **Footer** — See Footer spec below.

---

### Page 2: `tours.html` — All Tours

**Layout:** Two-column — left sidebar (filters) + right main content (tour grid).

**Sidebar filters:**
- Tour Type (dropdown or checkboxes): Game Drive, Hiking, Cultural, Luxury, Family, Honeymoon
- Destination (checkboxes): Kenya, Tanzania, Uganda, Rwanda, Dubai
- Duration: slider or range (1 day → 14+ days)
- Price Range: slider ($0 → $10,000+)
- Travel Month: dropdown (January → December)
- "Apply Filters" button + "Reset" link

**Main content:**
- Page heading + breadcrumb (Home > Tours)
- Sort bar: "Sort by: Price Low–High | Price High–Low | Duration | Most Popular"
- Grid of ALL 8 tour cards (see tour listings in Section 6)
- Each card: image, tour name, destination, duration, price, short unique description, star rating, "View Details" button

---

### Page 3: `destinations.html` — Destinations Overview

- Page hero with headline "Explore Our Destinations"
- Breadcrumb: Home > Destinations
- Large visual grid of 5 destination tiles (Kenya, Tanzania, Uganda, Rwanda, Dubai)
- Each tile: full-bleed image, country name, brief 1-line description, number of tours, "Explore" button linking to the dedicated page
- Brief "Why East Africa?" editorial paragraph

---

### Page 4: `destination-kenya.html` — Kenya

- Hero image: Maasai Mara / Amboseli
- Breadcrumb: Home > Destinations > Kenya
- Intro paragraph about Kenya as a safari destination (wildlife, Maasai culture, Great Rift Valley, coast)
- Highlights section: 4 key attractions (Maasai Mara, Amboseli, Tsavo, Lake Nakuru) with image + brief description each
- Grid of Kenya tours (filtered from the full tour list)
- Best time to visit section
- Practical info: visa, currency, language, climate

---

### Page 5: `destination-tanzania.html` — Tanzania

- Hero: Serengeti or Kilimanjaro
- Breadcrumb: Home > Destinations > Tanzania
- Intro: Serengeti, Ngorongoro, Kilimanjaro, Zanzibar
- Highlights: Serengeti, Ngorongoro Crater, Mt. Kilimanjaro, Selous
- Tanzania tours grid
- Best time to visit
- Practical info

---

### Page 6: `destination-uganda.html` — Uganda

- Hero: Mountain gorillas / Bwindi Forest
- Breadcrumb: Home > Destinations > Uganda
- Intro: Pearl of Africa, gorilla trekking, chimpanzees, Nile
- Highlights: Bwindi Impenetrable Forest, Queen Elizabeth NP, Murchison Falls, Kibale Forest
- Uganda tours grid
- Best time to visit
- Practical info

---

### Page 7: `destination-rwanda.html` — Rwanda

- Hero: Volcanoes NP / gorillas
- Breadcrumb: Home > Destinations > Rwanda
- Intro: Land of a Thousand Hills, fastest-developing destination in East Africa
- Highlights: Volcanoes NP, Nyungwe Forest, Lake Kivu, Kigali
- Rwanda tours grid
- Best time to visit
- Practical info

---

### Page 8: `destination-dubai.html` — Dubai

- Hero: Dubai skyline / desert
- Breadcrumb: Home > Destinations > Dubai
- Intro: Contrast of ultra-modern city and ancient desert, often combined with East Africa safaris
- Highlights: Desert safaris, Burj Khalifa, Old Dubai, Dhow Cruises
- Dubai tour cards
- Best time to visit
- Practical info

---

### Page 9: `deals.html` — Special Deals & Discounts

- Page hero: "Safari Deals — Limited Time Offers"
- Breadcrumb: Home > Deals
- Grid of deal cards (at least 4): each with image, tour name, original vs. discounted price, % badge, countdown timer, expiry date, "Book Now" CTA
- "How Our Deals Work" section — brief explainer paragraph
- Urgency copy: "Limited spots available per departure"

---

### Page 10: `testimonials.html` — Testimonials & Reviews

- Page heading: "What Our Travelers Say"
- Breadcrumb: Home > Testimonials
- Star rating summary at top: overall rating out of 5, total number of reviews
- Grid of at minimum 10 review cards. Each card:
  - Reviewer avatar (photo placeholder)
  - Full name
  - Country of origin + flag emoji
  - Star rating (1–5)
  - Date of travel
  - Tour name they took
  - Review text (3–5 sentences, unique per reviewer)
- "Leave a Review" CTA section at bottom (links to Google / TripAdvisor)
- Trust badges: TripAdvisor logo, Google Reviews logo

---

### Page 11: `about.html` — About Us

- Hero with team/company photo
- Breadcrumb: Home > About Us
- "Our Story" section: founding, mission, values
- "Why We're Different" — 3–4 differentiators
- Meet the Team: 3–4 placeholder team member cards (photo, name, title, short bio)
- Certifications: KATO and AMREF badge with explanation
- Stats: same animated counters as homepage
- "As Seen On" / Media coverage logos section
- Download links: Company Profile PDF, Travel Brochure PDF

---

### Page 12: `contact.html` — Contact

- Breadcrumb: Home > Contact
- Two-column layout:
  - Left: Contact form (Name, Email, Phone, Destination Interest, Travel Month, Message, Submit)
  - Right: Contact details — phone, WhatsApp link, email (domain addresses only), Skype, physical address Nairobi Kenya, Google Maps embed placeholder
- International contacts section: Kenya, USA, Canada (all with domain emails)
- Office hours
- Language selector note: "Our team speaks English, French, and Swahili"

---

### Page 13: `blog.html` — Blog

- Breadcrumb: Home > Blog
- Grid of blog post cards — at least 6 posts, ALL dated 2024 or 2025
- Each card: cover image, category tag, title, date, 2-line excerpt, "Read More" link
- Suggested post titles:
  - "Best Time to Visit the Maasai Mara: A Month-by-Month Guide" (March 2025)
  - "Gorilla Trekking in Uganda vs Rwanda: Which Should You Choose?" (February 2025)
  - "What to Pack for an East Africa Safari" (January 2025)
  - "Kilimanjaro Climbing Routes Compared: Lemosho vs Machame" (December 2024)
  - "Family Safari Tips: Traveling to Kenya with Kids" (November 2024)
  - "Top 10 Wildlife Sightings on the Serengeti" (October 2024)
- Sidebar: Categories, Recent Posts, Newsletter signup

---

## 6. Tour Listings (Use These — Write Unique Descriptions for Each)

| # | Tour Name | Country | Duration | From Price | Key Highlights |
|---|---|---|---|---|---|
| 1 | Maasai Mara Great Migration Safari | Kenya | 7 days | $1,850 | Wildebeest crossing, Big Five, balloon safari |
| 2 | Gorilla Trekking Adventure | Uganda | 5 days | $2,400 | Mountain gorillas, Bwindi Forest, chimp tracking |
| 3 | Kilimanjaro Summit Trek (Lemosho Route) | Tanzania | 8 days | $2,100 | Roof of Africa, glaciers, rainforest to arctic zones |
| 4 | Kenya & Tanzania Combined Safari | Kenya + Tanzania | 12 days | $3,200 | Maasai Mara + Serengeti, Ngorongoro, Amboseli |
| 5 | Rwanda Gorillas & Volcanoes | Rwanda | 6 days | $2,800 | Golden monkeys, Volcanoes NP, Lake Kivu |
| 6 | Luxury Amboseli & Tsavo Safari | Kenya | 9 days | $4,500 | Elephant herds, Kilimanjaro backdrop, luxury lodges |
| 7 | Serengeti Migration Circuit | Tanzania | 10 days | $3,600 | Calving season, river crossings, walking safaris |
| 8 | Family Safari Adventure | Kenya | 8 days | $1,950 | Kid-friendly lodges, game drives, Maasai village visit |

---

## 7. Shared Components

### Navigation Bar (shared across ALL pages)
```
[Logo]  Destinations▾  Tours  Deals  About  Blog  Contact  [🌐 EN▾]  [Plan My Safari CTA]
```
- Logo: "Africa Safari Discovery" with a small elephant or acacia icon
- Transparent with white text over hero sections
- Solid dark green with white text on scroll / on inner pages
- Mobile: hamburger menu (☰) that opens a full-screen or slide-in menu
- Language selector: dropdown showing EN | FR | DE (UI only, placeholder)
- "Plan My Safari" button: accent amber color, visually distinct from nav links

### Breadcrumb (all inner pages)
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/destinations.html">Destinations</a></li>
    <li class="active">Kenya</li>
  </ol>
</nav>
```
Style: small, subtle, below the navbar, above the page hero.

### Footer (shared across ALL pages)
Four-column grid:

| Column 1 | Column 2 | Column 3 | Column 4 |
|---|---|---|---|
| Logo + About blurb (2 sentences) + Social icons | Quick Links: Home, Tours, Destinations, Deals, About, Blog, Contact | Destinations: Kenya, Tanzania, Uganda, Rwanda, Dubai | Contact: Phone, WhatsApp, Email, Address |

Below the four columns:
- Row with: KATO badge | AMREF badge | TripAdvisor badge | Payment logos (Visa, Mastercard, PayPal)
- Bottom strip: © 2025 Africa Safari Discovery. All rights reserved. | Privacy Policy | Terms & Conditions

---

## 8. Technical Requirements

- **Multi-page HTML** — one `.html` file per page as listed in Section 5
- **Shared CSS** — single `css/style.css` using CSS custom properties (variables) for all colors, fonts, spacing
- **Shared JS** — single `js/main.js` for: navbar scroll behavior, hamburger menu, stats counter animation, countdown timers, smooth scroll
- **Fully responsive** — mobile-first, breakpoints: 375px, 768px, 1024px, 1280px
- **Semantic HTML5** — `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `aria-label`, `alt` text on all images
- **No broken links** — every `href` must point to a real file in the project or a correct anchor
- **Accessible** — sufficient color contrast, focusable interactive elements, skip-to-main link
- **Performance** — lazy-load images (`loading="lazy"`), no unnecessary JS libraries, Google Fonts via `<link>` preconnect

---

## 9. What the Lecturer Is Marking

The assignment is evaluated on:

1. **How clearly the redesign fixes the 20 weaknesses** identified in the analysis
2. **How well the original strengths are preserved and improved**
3. **Visual quality and professionalism** — does it look like a real premium travel website?
4. **Usability improvements** — is it clearly easier to use than the original?
5. **Completeness** — are all required pages and sections present?
6. **Responsiveness** — does it work on mobile?
7. **Consistency** — is the design system (colors, fonts, spacing, components) applied uniformly?

Every design decision must be **justifiable back to a finding.** For example:
- "The hamburger menu on mobile addresses W9 — No Mobile-First Design"
- "The single dominant CTA addresses W3 — No Clear Primary CTA"
- "Calendar-ordered months in the search widget addresses W4 — Alphabetical Month Sorting"

---

## 10. Deliverable

A complete, working multi-page HTML website consisting of the 13 files listed in Section 5, plus shared `css/style.css` and `js/main.js`. The result should:

- Open correctly in a browser from a local folder
- Navigate between all pages without errors
- Look polished and professional enough to present to a university lecturer
- Be visually impressive enough that a real safari company could consider using it

---

*Brief compiled from:*
*— Group 11 UI/UX Evaluation Report (Africa Safari Discovery)*
*— Additional findings from supplementary group analysis*
*Course: User Interface and Design | Academic Year 2024/2025*
