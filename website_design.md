
<high_level_design>
## 1. Brand & Art Direction Overview

**Get Hyped** is a bold, energetic social-first content agency with a vibrant, youthful visual identity. The design is characterized by:

- **High-energy aesthetic**: Large, impactful typography with tight letter-spacing (-0.06em) and minimal line-height (1.0)
- **Playful boldness**: A confident, no-nonsense approach to visual communication
- **Color-blocked sections**: Full-bleed colored panels (bright blue, vibrant pink/magenta, mint green, coral orange) create distinct content areas
- **Modern minimalism**: Clean layouts with generous whitespace on a warm off-white/beige background (#F4EFE6)
- **Dynamic content cards**: Rounded-corner cards with colored borders showcasing work examples
- **Video-first approach**: Looping video content integrated throughout (not static images)
- **Subtle 3D depth**: Rounded corners (24-32px radius), soft shadows, and layered elements
- **Animated interactions**: Smooth hover states, color transitions, and micro-animations
- **Mobile-responsive**: Adaptive layouts that maintain impact across devices

The overall feeling is confident, contemporary, and results-driven with a social media-native sensibility.

---

## 2. Color Palette (Light Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| **Background Primary** | `#F4EFE6` | Main page background | Warm off-white/beige |
| **Accent Blue** | `#0D8EFF` / `#0085FF` | Primary brand color, CTA buttons, data section background | Bright, energetic blue |
| **Accent Pink/Magenta** | `#E77EFF` / `#D96FF5` | Content creation section, secondary accents | Vibrant purple-pink |
| **Accent Green** | `#5CDEAB` / `#4DD9A9` | Activation section, success states | Mint/teal green |
| **Accent Orange/Coral** | `#FF6644` / `#FF5733` | Social strategy section, warm accents | Bright coral-orange |
| **Text Primary** | `#000000` | Headings, body text | Pure black |
| **Text Secondary** | `#1A1A1A` / `#333333` | Subheadings, secondary copy | Near-black |
| **White** | `#FFFFFF` | Cards, UI elements, contrast areas | Pure white |
| **Border/Outline** | `#000000` / `rgba(0,0,0,0.1)` | Button outlines, card borders | Black or subtle transparent |
| **Label Background** | `rgba(255,255,255,0.9)` | Small label badges | Semi-transparent white |

---

## 3. Typography Scale

**Primary Font Family**: Custom sans-serif (appears to be a geometric/grotesque style similar to "Space Grotesk" or custom font)
- Font weight: 500 (medium) for headings
- Very tight letter-spacing: `-0.06em`
- Line-height: `1` (no additional leading)

**Hierarchy:**

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **Heading XXL** | 96-120px | 500 | 1.0 | -0.06em | Hero titles ("Get Hyped. Get Noticed.") |
| **Heading XL** | 72-80px | 500 | 1.0 | -0.06em | Section main headings |
| **Heading L** | 56-64px | 500 | 1.0 | -0.06em | Large section titles |
| **Heading M** | 40-48px | 500 | 1.1 | -0.06em | Subsection headings |
| **Heading S** | 32-36px | 500 | 1.2 | -0.05em | Card titles |
| **Heading XS** | 24-28px | 500 | 1.2 | -0.04em | Small headings |
| **Paragraph L** | 20-24px | 400 | 1.5 | -0.01em | Intro paragraphs |
| **Paragraph M** | 16-18px | 400 | 1.6 | 0 | Body copy |
| **Label/Caption** | 14-16px | 500 | 1.4 | 0 | Labels, tags, captions |
| **Button Text** | 16-18px | 500 | 1.2 | -0.01em | CTA button text |

---

## 4. Spacing & Layout Grid

**Container System:**
- Max-width: `1440px` (desktop)
- Horizontal padding: `48px` (desktop), `24px` (mobile)
- 12-column grid system with flexible gutters

**Spacing Scale (based on 8px base unit):**

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 8px | Micro-spacing |
| `sm` | 16px | Small gaps |
| `md` | 24px | Standard spacing |
| `lg` | 32px | Section internal padding |
| `xl` | 48px | Between elements |
| `2xl` | 64px | Section padding |
| `3xl` | 96px | Major section spacing |
| `4xl` | 128px | Hero section spacing |

**Section Padding:**
- Top/Bottom: `96px` (desktop), `64px` (mobile)
- Hero section: `128px` top padding

**Card Spacing:**
- Internal padding: `32-48px`
- Gap between cards: `24px` (mobile), `32px` (desktop)

---

## 5. Visual Effects & Treatments

**Border Radius:**
- Cards: `24px`
- Buttons: `48px` (pill shape)
- Small elements: `12px`
- Video containers: `16-24px`

**Shadows:**
- Card shadow: `0 4px 24px rgba(0,0,0,0.08)`
- Button hover: `0 8px 32px rgba(0,0,0,0.12)`
- Subtle depth: `0 2px 8px rgba(0,0,0,0.04)`

**Borders:**
- Outline buttons: `2px solid #000000`
- Colored card borders: `3-4px solid [accent-color]`
- Divider lines: `1px solid rgba(0,0,0,0.1)`

**Gradients:**
- None observed (solid colors used throughout)

**Filters & Effects:**
- Video containers: subtle scale on hover (`transform: scale(1.02)`)
- Buttons: color transition on hover
- Smooth transitions: `0.3s ease-in-out`

**Animations:**
- Text split animations (GSAP/ScrollTrigger)
- Scroll-triggered reveals
- Preloader animation
- Smooth scrolling (Lenis)
- Button hover state transitions
- Color swoosh effects on menu items

---

## 6. Component Styles

### **Navigation Bar**
- Position: Fixed top
- Background: `rgba(244,239,230,0.95)` with backdrop blur
- Height: `80px`
- Logo: Black outlined wordmark (left)
- Menu items: Center-aligned, hover state with color swoosh background
- CTA button: Right-aligned, pink gradient background with fire emoji
- Border-bottom: `1px solid rgba(0,0,0,0.1)`

### **Buttons**

**Primary Button (CTA):**
- Background: Pink gradient (`#E77EFF` to lighter)
- Border-radius: `48px`
- Padding: `16px 32px`
- Text: Black, 16-18px, weight 500
- Icon: Right-aligned fire emoji or arrow
- Hover: Slight scale + shadow increase

**Outline Button:**
- Background: Transparent
- Border: `2px solid #000000`
- Border-radius: `48px`
- Padding: `14px 30px`
- Text: Black, 16px, weight 500
- Hover: Background fills black, text inverts to white

**Colored Buttons (per section):**
- Background: Orange/Blue/Green/Pink (contextual)
- White text
- Same dimensions as primary
- Hover: Slight darken

**Icon Button:**
- Circular, `48-56px` diameter
- Background: Accent color
- Black arrow icon
- Hover: Rotate icon, scale up

### **Cards**

**Results Cards (Hero):**
- Dimensions: `~320px` width, `400px` height
- Border-radius: `24px`
- Background: Solid color (blue/green) OR video
- Padding: `32px`
- Content: Large number + subtitle + description
- Text color: Black (on colored bg) or white overlay (on video)

**Expertise Cards:**
- Full-width sections with colored backgrounds
- Border-radius: `32px`
- Padding: `64px 48px`
- Layout: Split content (text left, video/image right)
- Large number watermark (01, 02, 03, 04)
- Label badge: Small white pill with "Expertise" text
- Button: Colored to match section theme

**Work Showcase Cards:**
- Dimensions: `~400px` width, `500px` height
- Border-radius: `24px`
- Border: `4px solid [color]` (orange or blue)
- Background: Image/video
- Overlay gradient: Bottom fade to black
- Content positioned bottom-left
- Title + client name badge
- Icon button: Top-right corner

**Brand Logo Cards:**
- White background
- Border-radius: `16px`
- Padding: `48px`
- Centered logo (SVG)
- Border: `1px solid rgba(0,0,0,0.1)`
- Hover: Subtle lift shadow

### **Form Elements**

**Input Fields:**
- Background: White
- Border: `1px solid rgba(0,0,0,0.15)`
- Border-radius: `8px`
- Padding: `16px 20px`
- Font-size: `16px`
- Focus state: Border color to accent blue
- Success icon: Green checkmark (right-aligned)
- Error icon: Red X (right-aligned)

**Text Area:**
- Same styling as input
- Min-height: `120px`
- Resize: Vertical

**Checkbox:**
- Custom styled
- Size: `20px`
- Border: `2px solid #000`
- Border-radius: `4px`
- Checked: Background accent color with white checkmark

**Labels:**
- Font-size: `14px`
- Weight: 500
- Color: Black
- Margin-bottom: `8px`

### **Modal**
- Background: `rgba(0,0,0,0.6)` overlay
- Content panel: White, max-width `600px`
- Border-radius: `24px`
- Padding: `48px`
- Close button: Top-right, outline style
- Smooth fade-in animation

### **Footer**
- Background: Light beige gradient
- Padding: `64px 48px`
- Layout: Logo left, menu center, contact right
- Circular badge: Pink with rotating text ("GET RESULTS • GET HYPED")
- Social icons: Black on hover
- Divider: Subtle line above copyright

### **Logo Marquee**
- Horizontal scrolling animation
- Seamless loop
- Grayscale logos (or black/white)
- Even spacing between logos
- Background: Transparent or light section

---

## 7. Site Sections (In Order)

1. **Navigation** - Fixed header with logo, menu, CTA button
2. **Hero Section** - Large headline, subheadline, results cards (10M+ views, 30+ brands), video cards
3. **Intro Section** - Large statement about approach, photo, body copy, "Leer ons kennen" button, scroll indicator
4. **Expertises Section** (Vertical scroll with pinning):
   - **Social Strategy** (White/Orange theme) - 01
   - **Content Creation** (Pink theme) - 02
   - **Activation** (Green theme) - 03
   - **Data** (Blue theme) - 04
5. **Work Showcase Section** - Headline, two featured case study cards (Roasta, Loco)
6. **Brands Section** - "These brands got hyped" headline, logo grid/carousel
7. **CTA Section** - "Let's Get Hyped!" headline, two CTA buttons (email, get results)
8. **Footer** - Logo, menu, contact info, social links, copyright
</high_level_design>

<theme>
light
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/navigation.tsx</file_path>
    <design_instructions>
Clone the sticky navigation bar with black "GET HYPED" logo on the left, centered menu items (Expertises, Work, About, Contact) with hover effects, and a bright pink/magenta "Get Results" button with flame icon on the right. Include mobile hamburger menu functionality. Use cream/beige background (#F5F1ED). Logo should link to homepage. Navigation should have smooth scroll behavior and remain visible on scroll with subtle backdrop blur effect.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero.tsx</file_path>
    <design_instructions>
Clone the hero section with massive bold black typography stating "Get Hyped. Get Noticed. Get Results." on cream/beige background. Below the headline, include smaller subtitle text "Klaar met gokken op content die niets oplevert?" in Dutch. Feature two prominent statistic cards side-by-side: left card in bright blue (#0EA5E9) showing "10M+" with "Organische views" subtitle and "Groei door slimme content" description, right card in bright green (#10B981) showing "30+" with "Merken geholpen" subtitle and "Van start-up tot multinational" description. Cards should have subtle rounded corners and animated appearance on scroll. Include video elements between the stat cards showing looping content samples. Use Inter font family with tight letter-spacing (-0.02em) for headlines, ultra-bold weight (900) for main title, and ensure responsive scaling for mobile/tablet.
    </design_instructions>
    <assets>["https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4", "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/intro.tsx</file_path>
    <design_instructions>
Clone the introduction section transitioning from vibrant pink gradient background (#F0ABFC to #EC4899) at top to cream/beige at bottom. Feature large bold headline "Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek." spanning left side in black text. On right side, include a small rounded image/video placeholder showing a person in orange jacket with sunglasses. Below, add body copy explaining the data-driven approach with text "We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar..." Include outlined "Leer ons kennen" (Learn about us) button with arrow icon. Add circular down-arrow button in bottom right for scroll progression. Use 12-column grid layout with responsive breakpoints.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/images/6894757aa6dd3f84f6e463a2_Anniek_20Bril-1.webp", "https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/expertises.tsx</file_path>
    <design_instructions>
Clone the vertically-scrolling expertises showcase with four full-screen pinned cards in sequence. Each card has distinct theme color: Card 1 "Social strategy" (white/cream background with orange accent), Card 2 "Content creation" (vibrant pink #F0ABFC background), Card 3 "Activation" (bright green #10B981 background), Card 4 "Data" (bright blue #0EA5E9 background). Each card layout: top-left "Expertise" label, large expertise title, top-right sequential number (01, 02, 03, 04) in subtle overlay, large video/image placeholder on right side with rounded corners, bottom-left content with h3 subheading and paragraph description, call-to-action button with arrow. Implement GSAP ScrollTrigger pin effect where each card stays fixed during scroll before next card overlays it. Videos should autoplay on scroll into view. Maintain 2rem padding on all sides, use consistent typography hierarchy.
    </design_instructions>
    <assets>["https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4", "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4", "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4", "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/portfolio-showcase.tsx</file_path>
    <design_instructions>
Clone the portfolio showcase section with cream/beige background featuring large bold headline "Content dat scoort." followed by description text "Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt." Display two featured work cards in horizontal layout: Left card with orange/red gradient border showing Roasta coffee brand content with "Zacht in smaak, sterk in beeld" headline and "Roasta" label; Right card with bright blue gradient border showing Loco content with "Content die écht smaakt (en raakt)" headline and "Loco" label. Each card should have rounded corners (16px), hover lift effect, arrow button in top-right corner, and video background that plays on hover. Include "Bekijk al ons werk" (View all our work) button with arrow above the cards.
    </design_instructions>
    <assets>["https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4", "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/images/68716a54a3bf63bf25c2ae92_roasta-placeholder-3.avif", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/images/68716b4e8982337b1d3d1bd7_loco-loco-placeholder-4.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/brands-marquee.tsx</file_path>
    <design_instructions>
Clone the client brands section with large bold headline "These brands got hyped." followed by infinite horizontal scrolling marquee of brand logos. Display client logos including Salontopper, Seesing Flex, Graafschap College, Fides, SRHK, KNLTB, THO, De Talententuin, ZCLV, and Morssinkhof in monochrome or brand colors on white rectangular cards with subtle borders and rounded corners (12px). Implement smooth CSS-based infinite scroll animation moving right-to-left at consistent speed. Logos should be vertically centered within cards, maintain aspect ratios, and have consistent spacing (2rem gap). On hover, cards should slightly scale up (1.02) with smooth transition. Ensure seamless loop with duplicated logo set for continuous effect. Use cream/beige section background matching site theme.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d88f755388cc2c74ecff_salontopper-2.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d880bed5996600cbc586_seesing-flex-3.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d86cd6ba384af3c14e58_graafschap-college-4.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d85341bf0d7476e56a8c_fides-5.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d838fc5735f090bd9843_SRHK-6.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d81e72e08110e3fd1a17_knltb-7.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/684b062ebc242028ca4b3ea1_tho-8.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/684c05642bf8f5cea7384403_de-talententuin-9.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/68c1952f22281ee50d3620b5_zclv-10.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/68c194e6d1b186563459b107_morssinkhof-1.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/cta-final.tsx</file_path>
    <design_instructions>
Clone the final call-to-action section with massive centered headline "Let's Get Hyped!" in ultra-bold black typography on cream/beige background. Below headline, display two prominent action buttons side-by-side: "Mail ons direct" (Mail us directly) button with envelope icon in white background with black border, and bright orange/coral "Get Results" button with flame icon. Position a circular rotating badge in top-right corner with pink/magenta background showing "GET RESULTS • GET NOTICED • GET HYPED" text wrapping around the perimeter with "GH" logo in center. Badge should have continuous CSS rotation animation. Ensure generous vertical padding (8rem top/bottom) and maintain responsive behavior for mobile with stacked buttons and repositioned badge.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the footer section with soft beige curved wave shape at top transitioning from cream background. Left side features large black "GETHYPED" logo. Center area contains navigation links (Expertises, Work, About, Contact) and social media icons (LinkedIn, TikTok, Instagram, YouTube) in circular buttons with hover effects. Right side displays contact information: "Contact" heading with email "info@gethyped.nl" and phone "+31 6 1533 7496", followed by "Adres" with full address "Beltrumsestraat 6, 7141 AL Groenlo". Bottom includes copyright "© 2025 Get Hyped" and "Privacyvoorwaarden" link. Use clean typography hierarchy with Inter font, adequate spacing between elements, and subtle hover states on all interactive elements. Background should be light warm beige (#F5F1ED) with the wave accent in slightly lighter shade.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/modals/contact-modal.tsx</file_path>
    <design_instructions>
Clone the contact form modal overlay that appears when "Get Results" buttons are clicked. Modal should have semi-transparent dark backdrop with centered white card container featuring rounded corners (16px) and subtle shadow. Include "Leave us a message" heading at top. Form fields: "Voor- en achternaam" (First and last name) required, "E-mail" required, "Telefoonnummer" (Phone number) optional, "Bericht" (Message) textarea required, and checkbox for "Ik accepteer de Privacyvoorwaarden" (I accept privacy terms) required. Each field should have validation icons (success checkmark in green, error X in red) that appear on input. Include orange "Verstuur bericht" (Send message) submit button with arrow icon, and alternative text "Of bel +31 6 1533 7496" below. Success state should display "Thanks voor je bericht!" with confirmation message. Top-right close button with outline style. Implement smooth fade-in animation on modal open, form validation with real-time feedback, and backdrop click-to-close functionality.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/ui/preloader.tsx</file_path>
    <design_instructions>
Clone the preloader animation that displays on initial page load. Create full-screen overlay with animated line that grows horizontally from left to right, followed by shape-fill animations (top and bottom sections) that reveal the page content. Use smooth easing functions (ease-in-out cubic-bezier) for professional feel. Preloader should feature the site's color scheme with potential for pink/green/blue accent colors. Animation sequence: horizontal line expansion (0.8s), shape fills expanding vertically (1.2s), then fade out entire preloader (0.4s). Ensure preloader prevents page interaction during load and removes itself from DOM after completion. Background should be cream/beige matching site theme. Total duration approximately 2-2.5 seconds before revealing main content.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
