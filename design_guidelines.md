# Estate Solutions - Cabinetry Installation Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from premium home improvement platforms (Houzz, high-end contractor portfolios) and real estate showcases (Airbnb property listings). This approach emphasizes visual craftsmanship, trust-building through portfolio work, and professional credibility.

## Core Design Principles
1. **Craftsmanship First**: Let the beautiful installation work be the hero
2. **Professional Trust**: Clean, organized layouts that convey reliability
3. **Visual Hierarchy**: Guide users from stunning visuals to actionable contact
4. **Warmth & Approachability**: Balance professionalism with welcoming aesthetics

---

## Color Palette

**Primary Colors:**
- Deep Navy Blue: 220 45% 25% (professionalism, trust)
- Warm Charcoal: 0 0% 20% (sophistication, grounding)

**Accent Colors:**
- Copper/Bronze: 25 60% 45% (complements wood tones, adds warmth)
- Soft Cream: 45 30% 95% (light backgrounds, breathing room)

**Dark Mode:**
- Background: 220 20% 10%
- Surface: 220 15% 15%
- Text: 45 10% 95%

**Light Mode:**
- Background: 0 0% 100%
- Surface: 45 15% 98%
- Text: 0 0% 15%

---

## Typography

**Font Families:**
- Headings: 'Montserrat' (Google Fonts) - Bold, confident, modern
- Body: 'Open Sans' (Google Fonts) - Professional, highly readable
- Accents: 'Playfair Display' (Google Fonts) - Elegant section headers

**Scale:**
- Hero Headline: text-5xl lg:text-7xl font-bold
- Section Headers: text-3xl lg:text-5xl font-bold
- Subsection Headers: text-2xl lg:text-3xl font-semibold
- Body Large: text-lg leading-relaxed
- Body Regular: text-base leading-relaxed
- Captions: text-sm

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-12
- Section vertical spacing: py-16 lg:py-24
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto px-6
- Text content: max-w-4xl

**Grid Patterns:**
- Portfolio Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Material Samples: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- Testimonials: grid-cols-1 lg:grid-cols-2 gap-8

---

## Component Library

### Navigation
- Sticky header with logo, navigation links, and prominent "Get Quote" CTA
- Mobile: Hamburger menu with smooth slide-in drawer
- Desktop: Horizontal navigation with hover underline animations (subtle)

### Hero Section
- **Full-width hero image** featuring a stunning kitchen installation from provided photos
- Overlay gradient (bottom-to-top dark gradient for text readability)
- Centered headline: "Transform Your Space with Custom Cabinetry"
- Subheadline highlighting service areas and specialties
- Two CTAs: Primary "Request Consultation" + variant="outline" "View Portfolio" with backdrop-blur-sm bg-white/10

### Portfolio/Gallery Section
- Masonry-style grid showcasing installation photos
- Category filters: "All", "Kitchens", "Bathrooms", "Pantries", "Custom Features"
- Lightbox modal for full-size viewing with project details overlay
- Each card: Image + subtle hover scale effect + project category badge

### Materials Showcase
- Grid of material samples with high-quality photos
- Categories: Cabinet Finishes, Countertops, Hardware
- Card design: Image + material name + brief description
- Clean white/cream cards with subtle shadows

### Design Process Section
- Split layout: Left side shows design schematic images, right side explains process
- Step-by-step visualization with numbered badges
- Emphasizes custom measurements and layout planning

### Testimonials
- Large quote cards with client photo placeholders (or initials in circles)
- Star ratings (5-star system)
- Client name + project type
- Staggered layout for visual interest

### About Section
- Two-column layout: CEO photo on left, company story on right
- Include Estate Solutions truck photo for brand recognition
- Key stats: Years in business, Projects completed, Service area
- Mission statement emphasizing quality and customer satisfaction

### Contact Section
- Two-column: Contact form (left) + Business info with embedded map placeholder (right)
- Form fields: Name, Email, Phone, Project Type (dropdown), Message
- Business hours, phone number, email, service area information
- Social proof element: "Trusted by 500+ Denver Metro homeowners"

### Footer
- Multi-column layout: Company info, Quick links, Services, Contact
- Social media icons (Instagram for project showcases)
- Trust badges: Licensed, Insured, BBB accredited placeholders
- Newsletter signup: "Get Design Inspiration & Tips"

---

## Images Strategy

**Hero Section:**
- Large hero image (1920x1080): Black kitchen with white countertops or blue kitchen installation
- Dark overlay gradient for text contrast

**Portfolio Gallery:**
- All provided installation photos organized by category
- Maintain original quality, optimize for web

**Materials Page:**
- Close-up shots of finishes and materials from provided images
- Custom design layouts and schematics

**About Section:**
- CEO photo
- Estate Solutions truck for brand credibility

**Design Process:**
- Custom measurement images
- Schematic/design layout images

---

## Interactions & Animations

**Minimal, Purposeful Motion:**
- Smooth scroll behavior for anchor navigation
- Subtle hover scale (1.02) on portfolio images
- Fade-in on scroll for section reveals (staggered for cards)
- No aggressive parallax or complex animations

**Interactive Elements:**
- Category filter buttons with active state highlighting
- Lightbox modal with smooth opacity transitions
- Form field focus states with accent color borders

---

## Responsive Behavior

**Breakpoints:**
- Mobile: Base styles
- Tablet: md: (768px)
- Desktop: lg: (1024px)
- Large Desktop: xl: (1280px)

**Mobile Optimizations:**
- Single column layouts
- Larger touch targets (min 48px)
- Simplified navigation
- Stacked hero CTAs

**Desktop Enhancements:**
- Multi-column grids
- Larger hero imagery
- Side-by-side layouts for content sections

---

## Trust & Credibility Elements

- Display professional certifications/licensing badges
- "Serving Denver Metro Area Since [Year]" badge
- Project completion statistics
- Before/after comparison sliders (if suitable photos available)
- Prominent display of 5-star reviews
- Professional photography throughout reinforces quality

---

This design creates a premium, trustworthy portfolio website that showcases Estate Solutions' craftsmanship while making it easy for potential clients to explore work, understand the process, and get in touch.