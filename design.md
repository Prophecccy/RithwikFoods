---
name: Rithwik Foods
description: Premium organic dry fruits and healthier everyday grocery alternatives.
colors:
  background: "#FAF6F0"
  primary: "#8B5E3C"
  secondary: "#3D5A3E"
  tertiary: "#C9A96E"
  text-main: "#1A1A1A"
  text-muted: "#5C5C5C"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 3.5rem
  h2:
    fontFamily: Playfair Display
    fontSize: 2.5rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
  fab-whatsapp:
    backgroundColor: "{colors.secondary}"
    textColor: "#ffffff"
    rounded: 9999px
---

## Overview
A high-end, visually stunning, and highly performant UI. The design should evoke a premium, deeply organic, and natural aesthetic that builds instant brand trust. It relies heavily on smooth, 60fps scroll-triggered animations (fade-up staggers, parallax) using hardware acceleration to create an immersive storytelling experience without feeling heavy or bloated.

## Colors
The palette is derived directly from the brand's 3D wood-carved leaf motif, relying on natural textures and earthy tones.
* **Background (#FAF6F0):** A warm off-white/cream that mirrors the clean, natural feeling of raw wood.
* **Primary (#8B5E3C):** Rich walnut brown. Pulled from the logo's dominant tone, used for primary actions and deep contrast.
* **Secondary (#3D5A3E):** Deep forest green. Reflects the leaf motif and reinforces the "organic" brand promise.
* **Tertiary (#C9A96E):** Warm champagne gold. Used sparingly for premium section borders, high-end highlights, and hover states.
* **Text:** Dark charcoal (`#1A1A1A`) for grounded, readable headings, and medium grey (`#5C5C5C`) for body copy to reduce eye strain.

## Typography
The typography balances elegant heritage with modern accessibility.
* **Headings (Playfair Display):** An elegant serif to convey premium quality, tradition, and trust.
* **Body (Inter):** A highly readable, clean sans-serif that ensures the UI feels modern and scales perfectly down to mobile screens.

## Layout
A strict "mobile-first" approach that scales up to ultra-wide desktop monitors. The architecture is a single, long-scroll landing page optimized for a seamless conversion funnel. Grid and Flexbox are the primary drivers for layout, ensuring a responsive, glassmorphic, and dynamic UI.

## Components
* **Product Cards:** Clean layouts featuring high-fidelity imagery, short descriptions, and a frictionless "Inquire" CTA. Cards should utilize Framer Motion or GSAP for smooth reveal animations as they enter the viewport.
* **WhatsApp FAB:** A permanent, pulsing, premium-styled floating action button fixed to the bottom right. It bridges the gap between browsing and checkout, pushing users to a pre-formatted `wa.me` link for frictionless interaction.

## Navigation System
* **Sticky Island Header:** A floating navigation bar that transitions from a transparent glass state to a high-contrast solid state (`.scrolled`) on scroll. On internal pages (like Collection), it uses `.scrolled-permanent` to maintain visibility against light backgrounds.
* **Mobile Bottom Nav:** For optimal reachability, a dedicated bottom navigation bar is used on mobile devices, ensuring critical paths (Home, Products, Store) are always one thumb-tap away.

## Product Specialization
* **Traditional Spices:** Graded culinary excellence.
* **Veg & Fruit Powders:** Concentrated natural goodness.
* **Homemade Masalas:** Traditional recipes and preparation.
* **Premium Dry Fruits:** Single-origin, meticulously graded nuts.
* **Nutritious Millets:** Ancient grains for wellness.
## Store Location
* **Embedded Flagship Experience:** A dedicated section featuring a premium-styled Google Maps embed. The map is integrated using a custom iframe container with rounded corners and a subtle premium filter (`grayscale` transition on hover).
* **Location Details:** Displays the full physical address ("No. 1, Shashi Nilaya..."), business hours, and primary contact channels in a multi-card "Info Card" layout.
* **Direct Navigation:** Includes a high-contrast "Get Directions" button that deep-links directly to the verified Google Maps location link.
