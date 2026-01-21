# Perihelion — Business & Website Specification

> *The point of closest approach. Where intensity peaks and precision matters most.*

---

## Company Overview

**Name:** Perihelion  
**Domain:** Capital Markets Systems Risk & Resilience Design  
**Tagline:** Trading Systems Built to Withstand Scrutiny

### Core Positioning

Perihelion is a **high-end capital markets technology design consultancy** that will deliberately transition into a **high-margin, founder-controlled product company** within 18–36 months.

The consultancy phase is a **data, credibility, and funding engine** designed to extract repeated patterns from systemically critical trading environments and convert them into a defensible software product.

---

## Business Model

### Phase 1: Consultancy (Months 0–12)

**Purpose:**
1. Generate immediate cash flow
2. Gain privileged access to real capital markets systems
3. Identify repeatable failure modes and patterns
4. Build credibility and reference customers
5. De-risk future product development

**Core Offer: 90-Day Capital Markets Systems Assurance Engagement**

- Fixed scope, fixed price, fixed outcomes
- Pricing: $150k–$300k per engagement
- Maximum 2–3 concurrent clients

**Deliverables:**
1. Critical trading flow map (front-to-back)
2. Dependency and single-point-of-failure analysis
3. Incident and recovery readiness assessment
4. Regulator-ready evidence pack
5. 12-month remediation and investment roadmap

**Explicit Exclusions:**
- No implementation ownership
- No day-rate work
- No long-term delivery commitments

### Phase 2: Product Incubation (Months 6–18)

**Product Thesis:** Capital markets firms lack a living, provable view of operational resilience for trading systems.

**Current State Problems:**
- Static diagrams
- Outdated documentation
- Fragmented tooling
- High manual effort during incidents and regulatory reviews

**Product Wedge (Initial Use Case):**
- Focus on one critical trading flow per customer
- Critical service dependency graph
- Scenario-based blast radius simulation
- Executable runbooks
- Automated evidence and reporting outputs

### Phase 3: Product Company (Months 18–36)

**Product: Capital Markets Systems Assurance Platform**

A subscription-based enterprise product that:
- Maps critical trading systems and dependencies
- Simulates failure scenarios
- Tracks resilience posture over time
- Generates regulator- and board-ready evidence

**Pricing Model:**
- Annual subscription
- ACV: $250k–$1.5M
- Paid upfront
- Multi-year contracts preferred

---

## Target Customers

**Consultancy Phase:**
- Tier 1–2 banks (markets divisions)
- Market operators and exchanges
- Large brokers
- Buy-side firms with internal trading capability

**Target Buyers:**
- Heads of Markets Technology
- CIO / COO
- Chief Risk Officer
- Operational Resilience leaders

**Geographic Focus:**
- Primary: Australia / APAC
- Secondary: Global Tier 1 institutions

---

## Founder Advantage

- Deep experience running mission-critical trading systems
- Credibility with boards, regulators, and senior engineers
- First-hand exposure to outages, incidents, and regulatory scrutiny
- Ability to translate technical risk into executive language

---

## Competitive Positioning

**Competes Against:**
- GRC tools (too generic)
- Observability platforms (too technical)
- Consulting firms (non-repeatable)

**Differentiation:**
- Capital markets-specific
- Built from real outages
- Executive and regulator fluent
- Fixed outcomes, not hours

---

## Success Metrics

| Year | Target |
|------|--------|
| Year 1 | 3–5 consulting clients, $500k–$1M revenue |
| Year 2 | 3–5 product customers, $2–4M ARR |
| Year 3–5 | 30–50 product customers, $10–20M ARR, $20–50M valuation |

**Target Economics:**
- Gross margin: 85–90%
- Low churn (regulatory lock-in)
- Low support overhead

---

## Brand Identity

**Name Etymology:** Perihelion — the point in a planet's orbit when it is closest to the sun. Maximum gravitational intensity. Maximum energy. The moment where precision matters most.

**Logo:** ☉ (sun symbol)

**Core Message:** When outages mean headlines and regulatory action, you need more than hope.

**Voice:**
- Authoritative, not arrogant
- Technical depth, executive clarity
- Direct, no jargon
- Confidence without hype

---

## Website Structure

### Pages

1. **index.html** — Homepage
2. **contact.html** — Contact/inquiry page

### Homepage Sections

1. **Hero** — Main value proposition, key stats
2. **Trust Bar** — Target sectors
3. **Problem Statement** — The challenges firms face
4. **Services** — 90-Day Assurance engagement details
5. **Approach** — Key differentiators
6. **Platform Preview** — Coming soon product teaser
7. **About** — Founder credentials
8. **CTA** — Call to action

### Contact Page Sections

1. **Hero** — Simple header
2. **Contact Form** — Inquiry form with relevant fields
3. **Process** — How engagements work
4. **Commitment** — Response promises
5. **Focus Regions** — Geographic coverage

---

## Technical Stack

- **Frontend:** Static HTML, CSS, JavaScript
- **Styling:** Custom CSS with CSS variables design system
- **Fonts:** Inter (Google Fonts)
- **Hosting:** Railway (nginx static server)
- **Repository:** github.com/matthart1983/perihelion

### Files

```
perihelion/
├── index.html          # Homepage
├── contact.html        # Contact page
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Interactions
├── nginx.conf          # Railway static server config
├── nixpacks.toml       # Railway build config
└── SPEC.md             # This file
```

---

## Design System

### Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | #0a1628 | Dark backgrounds |
| `--color-accent` | #3b82f6 | Interactive elements |
| `--color-success` | #10b981 | Positive indicators |
| `--color-warning` | #f59e0b | Caution indicators |
| `--color-danger` | #ef4444 | Alert indicators |

### Typography

- **Font:** Inter
- **Weights:** 300, 400, 500, 600, 700
- **Scale:** xs (0.75rem) to 6xl (3.75rem)

---

## Key Principles

1. **The consultancy is the mining operation. The product is the refinery.**
2. Built for durability, credibility, and control — not speed or hype.
3. Founder-controlled, cash-generative business.
4. No VC dependency. No pressure for premature exit.

---

## Deployment

**GitHub:** https://github.com/matthart1983/perihelion  
**Railway:** Deploy from GitHub repo, auto-builds with nginx

---

*Last updated: January 2026*
