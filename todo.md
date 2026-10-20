# Todo: Remove {'-'} and emojis from paragraph text

## Changes Made

### 1. src/components/MainContent.tsx
- Removed ` - ` from "One mission - make your marketing work with the brain, not against it."
- Changed to: "One mission make your marketing work with the brain, not against it."

### 2. src/app/services/page.tsx
- Removed ` — ` from "One mission — make your marketing work with the brain, not against it. Hover over each service to see the methodology."
- Changed to: "One mission make your marketing work with the brain, not against it. Hover over each service to see the methodology."
- Removed ` — ` from service descriptions in the description field
- Removed ` — ` from "We do not have package pricing — every engagement is scoped..."

### 3. src/app/about/page.tsx
- Removed ` — ` from multiple paragraph texts:
  - "myelin builds up around it — making that pathway faster, stronger, and more automatic."
  - "Not campaign spikes — permanent memory. Not awareness — identity. We do not just do marketing. We build myelin."
  - "95% of every purchase decision happens in the subconscious — processed by emotional circuits the customer cannot access, report, or control."
  - "Every recommendation we make is grounded in neural evidence — not intuition, opinion, or creative preference."
  - "We show you exactly what the data says — including findings that challenge your existing assumptions."
  - "We understand the Indian consumer's brain — culturally, linguistically, and neurologically."
  - "We are not a creative agency. We are not a research firm. We are the bridge — where neuroscience meets brand strategy."

### 4. src/app/industries/page.tsx
- Removed ` — ` from paragraph texts:
  - "Neuromarketing is not a niche tool — it is a universal one."
  - "Neuromarketing — which measures universal neural responses while accounting for cultural variables — is not just useful in India. It is necessary."
  - "We optimise the path from attention to purchase at every step — online and offline."
  - "We map the neural triggers at every stage — from first ad impression to showroom experience to the moment of decision."
  - "neural efficiency matters most — every touchpoint must work harder."

### 5. src/app/science/page.tsx
- Removed ` — ` from paragraph texts:
  - "Brand salience on every touchpoint is scientifically — not just strategically — important."
  - "Traditional research — surveys, focus groups, A/B tests — only reaches the 5% that's conscious."
  - "Before you picked a product, clicked an ad, or chose one brand over another — your brain had already made the call."
  - "By measuring real brain responses to ads, packaging, and creative — using EEG, eye-tracking, and behavioural analytics — neuromarketing reveals what consumers actually feel."
  - "Methodology is always matched to the question — not the other way around."

### 6. src/components/CaseStudiesContent.tsx
- Removed ` — ` from: "These are not our claims — they are the scientific record."

### 7. src/data/siteContent.ts
- Removed ` — ` from service steps:
  - "01 · Discovery — We map your brand, audience, and marketing challenge in depth before recommending anything."
  - "02 · Research Design — We design the right neuromarketing methodology for your specific question and audience."
  - "03 · Testing — We run EEG, eye-tracking, or behavioral studies with your exact target audience."
  - "04 · Strategy Delivery — Neural insights translated into actionable creative briefs, messaging hierarchies, and brand strategy."

## Emoji Status
- No emojis found in paragraph text
- Emojis in UI icons (e.g., `emoji: "Eye"` in siteContent.ts, `icon: "👁"` in services page) are intentional UI elements and were not removed

## Verification
- All remaining ` - ` patterns in src/ are in code, not paragraph text
- All remaining ` — ` patterns have been removed from paragraph text