# Global Ultra Tech — Website Plan (Refined)

This document captures the agreed site architecture and content plan for a premium, professional website for Global Ultra Tech (Registered Vehicle Scrapping Facility — RVSF) in Rampur, Uttar Pradesh.

## Goals
- Clearly explain what an RVSF is, our duties/responsibilities, and connection with MoRTH/Vahan.
- Provide a detailed, transparent vehicle scrapping process on the Home page.
- Highlight benefits and incentives for customers choosing Global Ultra Tech.
- Offer strong dual CTAs: Request Scrapping / Get Pickup.
- Consolidate all services into a single high-impact Services page to avoid thin content.
- Provide separate pages for Pricing Calculator, Policy & Compliance, Contact, and FAQ.

## Information Architecture (Routes)
- `/` Home
- `/services` Services (single consolidated page with anchored sections)
  - `#vehicle-scrapping`
  - `#certificate-of-deposit`
  - `#certificate-of-vehicle-scrappage`
  - `#trade-cod`
- `/pricing` Scrap Pricing Calculator (separate page)
- `/policy-compliance` Policy & Compliance
- `/about` About Us
- `/contact` Contact Us
- `/faq` FAQs
- Future: `/legal` (Privacy, Terms) if required

## Home Page (No Calculator)
1. Hero
   - Clear headline/tagline, brief value statement
   - Dual CTA buttons: Request Scrapping, Get Pickup
   - Trust strip (MoRTH/Vahan registration badges, compliance icons)

2. What Is an RVSF?
   - Definition and statutory role
   - Why RVSF matters: safety, traceability, environmental standards

3. Duties & Responsibilities
   - Environmental compliance (depollution, segregation, hazardous material handling)
   - Documentation integrity, audit trails
   - Secure, standardized dismantling procedures

4. MoRTH & Vahan Linkage
   - Registration details and what that means for the vehicle owner (trust, recognition)
   - Visual trust badges

5. Scrapping Process (Timeline)
   - Communication → Documentation Check (online or at facility)
   - Vehicle Deposit or Paid Pickup
   - Certificate of Deposit (CoD) issuance + scrap value per MoRTH norms
   - Scrappage operations as per MoRTH procedures
   - Submission of chassis plate & number plate to RTO
   - Certificate of Vehicle Scrappage (CoVS) issuance to owner

6. Benefits & Incentives
   - Monetary: fair scrap value calculated per norms
   - Policy incentives: state/RTO perks for new purchases (where applicable)
   - CoD trading option with Global Ultra Tech for additional value
   - Environmental impact and compliance

7. Proof of Leadership
   - Founded in 2020; leading by vehicles scrapped (placeholder stats)

8. Closing CTA Band
   - Repeat dual CTAs: Request Scrapping / Get Pickup

## Services (Consolidated Single Page)
Purpose: Avoid thin pages; deliver a comprehensive overview with scannable sections and deep content in one place. The page provides anchored sections for each service and can be linked directly.

Sections:
1. Overview Grid
   - Four service cards with quick summaries and jump links to anchors.

2. Vehicle Scrapping (`#vehicle-scrapping`)
   - Eligibility and accepted vehicle categories
   - Step-by-step outline (high-level) echoing the main process
   - Environmental & safety measures

3. Certificate of Deposit (CoD) (`#certificate-of-deposit`)
   - What it is, how and when it’s issued
   - Use cases and relationship with incentives
   - Option to trade CoD with Global Ultra Tech

4. Certificate of Vehicle Scrappage (CoVS) (`#certificate-of-vehicle-scrappage`)
   - Purpose, RTO implications, deregistration context
   - When the owner receives it

5. Trade CoD (`#trade-cod`)
   - How trading works, eligibility, value add
   - Terms and basic workflow

6. CTA Section
   - Encourage “Request Scrapping” and “Get Pickup” with contact options

## About Us
- Founded in 2020 under the national Vehicle Scrappage Policy
- Location: Village Bishanpur Jagir, District Rampur-244921, Uttar Pradesh, India
- Directors: placeholder profiles (to be filled)
- Mission & Values: Safety, Sustainability, Integrity, Efficiency
- Facility overview and operational excellence
- Service summary and leadership highlights

## Pricing Calculator (Separate Page)
- Purpose: Indicative estimation only; final valuation per MoRTH and relevant authority norms
- Inputs: vehicle type/category, approximate weight, condition (intact/partial), region (if relevant)
- Output: Estimated scrap value range + guidance text
- Disclaimers: Clear statement of estimation limits and validation steps
- CTA: Proceed to Request Scrapping / Contact

## Policy & Compliance
- Vehicle Scrappage Policy overview (intent and structure)
- Regulatory bodies: MoRTH, RTO, environmental boards
- Compliance measures and checkpoints across the process
- Documentation and audit trail practices
- Environmental impact and sustainability metrics (placeholders)

## Contact Us
- Contact details: phone, email, address, hours
- Map embed (facility location)
- Forms:
  - Request Scrapping (owner + vehicle details)
  - Get Pickup (pickup address, preferred slot)
- Privacy and consent note

## FAQs
Initial set of questions:
- What documents are required?
- How is scrap value calculated?
- How long until I receive the CoD?
- Difference between CoD and CoVS?
- Can I trade my CoD later with Global Ultra Tech?
- Are there government incentives or state perks?
- Do you offer pickup? What does it cost?
- What happens to the chassis and plates?
- Which vehicles are eligible?
- How is my data handled?

## Components (Initial)
- Layout: `SiteLayout`, `HeaderNav`, `Footer`
- UI primitives: `Section`, `Container`, `PrimaryCTA`, `SecondaryCTA`, `Badge`, `Card`
- Home: `Hero`, `TrustBadges`, `ProcessTimeline`, `BenefitCard`, `Stats`
- Services: `ServiceCard`, `AnchorNav`
- Forms: `ScrappingForm`, `PickupForm`, `FormField`
- Pricing: `CalculatorForm`, `ValueResult`, `Disclaimer`
- Compliance: `PolicySection`, `BadgeList`
- Shared: `PageTitle`, `Breadcrumbs`, `FAQAccordion`

## Styling & Theme
- Tailwind CSS v4 with semantic classes
- Palette (proposed):
  - Primary: Deep blue `#0B1E3C` (trust/governance)
  - Accent: Eco green `#1FA36B` (sustainability)
  - Highlight: Amber `#F4A300`
  - Neutral: Slate/stone scales for text/background
- Typography: Professional sans (e.g., Inter) with strong hierarchy
- Accessibility: WCAG AA+, high contrast, focus styles, keyboard navigation

## SEO & Trust
- Per-page meta and Open Graph defaults
- Organization + LocalBusiness schema (address included)
- MoRTH/Vahan reference and appropriate trust indicators
- Performance: image optimization, responsive and lazy loading

## Data & Forms
- Static JSON/MD for content to start
- Form handlers stubbed for email/API integration later
- Placeholder stats for leadership until provided

## Implementation Sequence (Suggested)
1. Add routing and scaffold pages (`/`, `/services`, `/pricing`, `/policy-compliance`, `/about`, `/contact`, `/faq`).
2. Build `SiteLayout` with `HeaderNav` and `Footer` (+ CTAs).
3. Implement Home sections with structured placeholder content.
4. Implement consolidated Services page with anchored sections.
5. Implement Contact forms (client-side validation) and map placeholder.
6. Implement Pricing Calculator (client-side logic + disclaimers).
7. Add Policy & Compliance and FAQ content.
8. Tailwind theme refinement (colors/typography), accessibility pass.
9. SEO/meta defaults and schema setup.
10. Hook forms to chosen backend/email service.

---

Last updated: 2025-12-01
