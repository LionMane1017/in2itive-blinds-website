# WiseWare Corporate Design System

**Version 1.0** | Created for reusable corporate branding across multiple projects

---

## Overview

This design system captures the complete visual language, component patterns, and implementation details of the WiseWare Consulting corporate website. Use this document as a comprehensive style guide to replicate the exact look and feel across future brand projects, sub-brands, and product websites while maintaining corporate cohesion.

The design philosophy emphasizes **clean Fortune 500 corporate aesthetics** with modern touches: professional typography, subtle interactions, light/dark mode support, and mobile-first responsive design. The system avoids excessive visual effects in favor of clarity, readability, and enterprise credibility.

---

## Color Palette

### Primary Colors

The color system uses **OKLCH color space** for consistent perceptual brightness and better color manipulation. All colors are defined as CSS custom properties that automatically adapt to light and dark modes.

#### Light Mode Colors

| Color Token | OKLCH Value | Hex Equivalent | Usage |
|-------------|-------------|----------------|-------|
| `--background` | `oklch(1 0 0)` | `#FFFFFF` | Page background |
| `--foreground` | `oklch(0.235 0.015 65)` | `#3C3C3C` | Primary text color |
| `--card` | `oklch(1 0 0)` | `#FFFFFF` | Card backgrounds |
| `--card-foreground` | `oklch(0.235 0.015 65)` | `#3C3C3C` | Text on cards |
| `--primary` | `var(--color-blue-700)` | `#1D4ED8` | Primary brand color (buttons, links) |
| `--primary-foreground` | `var(--color-blue-50)` | `#EFF6FF` | Text on primary elements |
| `--muted` | `oklch(0.967 0.001 286.375)` | `#F7F7F8` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.552 0.016 285.938)` | `#737373` | Secondary text |
| `--border` | `oklch(0.92 0.004 286.32)` | `#E5E5E5` | Border color |

#### Dark Mode Colors

| Color Token | OKLCH Value | Hex Equivalent | Usage |
|-------------|-------------|----------------|-------|
| `--background` | `oklch(0.141 0.005 285.823)` | `#1A1A1A` | Page background |
| `--foreground` | `oklch(0.85 0.005 65)` | `#E5E5E5` | Primary text color |
| `--card` | `oklch(0.21 0.006 285.885)` | `#2A2A2A` | Card backgrounds |
| `--card-foreground` | `oklch(0.85 0.005 65)` | `#E5E5E5` | Text on cards |
| `--muted` | `oklch(0.274 0.006 286.033)` | `#3A3A3A` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.705 0.015 286.067)` | `#A3A3A3` | Secondary text |
| `--border` | `oklch(1 0 0 / 10%)` | `rgba(255,255,255,0.1)` | Border color |

### Semantic Colors

| Purpose | Light Mode | Dark Mode | Usage |
|---------|------------|-----------|-------|
| Destructive | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Error states, delete actions |
| Accent | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Highlighted sections |
| Ring | `oklch(0.623 0.214 259.815)` | `oklch(0.488 0.243 264.376)` | Focus rings |

### Chart Colors

For data visualizations, use the blue gradient scale:

| Token | Tailwind Equivalent | Usage |
|-------|---------------------|-------|
| `--chart-1` | `blue-300` | Lightest data series |
| `--chart-2` | `blue-500` | Light data series |
| `--chart-3` | `blue-600` | Medium data series |
| `--chart-4` | `blue-700` | Dark data series |
| `--chart-5` | `blue-800` | Darkest data series |

---

## Typography

### Font Family

**Primary Font:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

**Weights Available:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold), 900 (Black)

**Font Loading:** Import via Google Fonts CDN in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | `3rem` (48px) | 700 (Bold) | 1.2 | Page titles, hero headings |
| H2 | `2.25rem` (36px) | 700 (Bold) | 1.3 | Section headings |
| H3 | `1.875rem` (30px) | 700 (Bold) | 1.4 | Subsection headings |
| H4 | `1.5rem` (24px) | 600 (Semi-Bold) | 1.5 | Card titles |
| H5 | `1.25rem` (20px) | 600 (Semi-Bold) | 1.5 | Small headings |
| H6 | `1.125rem` (18px) | 600 (Semi-Bold) | 1.5 | Smallest headings |
| Body Large | `1.125rem` (18px) | 400 (Regular) | 1.7 | Lead paragraphs |
| Body | `1rem` (16px) | 400 (Regular) | 1.6 | Standard body text |
| Body Small | `0.875rem` (14px) | 400 (Regular) | 1.5 | Secondary text |
| Caption | `0.75rem` (12px) | 400 (Regular) | 1.4 | Captions, labels |

### Typography Rules

All headings (`h1` through `h6`) are automatically bold via the base CSS layer. Body text uses regular weight (400) for optimal readability. Use medium weight (500) for emphasis within paragraphs, and semi-bold (600) for UI elements like navigation links.

---

## Spacing System

The design uses Tailwind's default spacing scale based on `0.25rem` (4px) increments:

| Token | Value | Common Usage |
|-------|-------|--------------|
| `1` | `0.25rem` (4px) | Icon gaps, tight spacing |
| `2` | `0.5rem` (8px) | Button padding, small gaps |
| `3` | `0.75rem` (12px) | Card padding (small) |
| `4` | `1rem` (16px) | Standard gap between elements |
| `6` | `1.5rem` (24px) | Section spacing (small) |
| `8` | `2rem` (32px) | Section spacing (medium) |
| `12` | `3rem` (48px) | Section spacing (large) |
| `16` | `4rem` (64px) | Major section spacing |
| `20` | `5rem` (80px) | Extra large section spacing |

### Container Padding

The custom `.container` class applies responsive padding:

- **Mobile** (< 640px): `1rem` (16px) horizontal padding
- **Tablet** (640px - 1023px): `1.5rem` (24px) horizontal padding
- **Desktop** (≥ 1024px): `2rem` (32px) horizontal padding, `1280px` max-width

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.65rem` (10.4px) | Base radius for cards, buttons |
| `--radius-sm` | `0.4rem` (6.4px) | Small elements |
| `--radius-md` | `0.525rem` (8.4px) | Medium elements |
| `--radius-lg` | `0.65rem` (10.4px) | Large elements (default) |
| `--radius-xl` | `0.9rem` (14.4px) | Extra large elements |
| `rounded-full` | `9999px` | Circular buttons, badges |

---

## Component Patterns

### Buttons

#### Primary Button

```tsx
<Button variant="default" size="default">
  Primary Action
</Button>
```

**Styling:** Blue background (`bg-primary`), white text, rounded corners, hover state darkens background.

#### Secondary Button

```tsx
<Button variant="outline" size="default">
  Secondary Action
</Button>
```

**Styling:** Transparent background, border, hover state adds subtle background.

#### Ghost Button

```tsx
<Button variant="ghost" size="icon">
  <Icon className="h-5 w-5" />
</Button>
```

**Styling:** No background or border, hover state adds subtle background. Used for icon buttons in navigation.

#### Button Sizes

| Size | Padding | Height | Usage |
|------|---------|--------|-------|
| `sm` | `px-3 py-1.5` | `32px` | Compact buttons |
| `default` | `px-4 py-2` | `40px` | Standard buttons |
| `lg` | `px-6 py-3` | `48px` | Hero CTAs |
| `icon` | `p-2` | `40px` | Icon-only buttons |

### Cards

#### Standard Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Supporting text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card body content */}
  </CardContent>
</Card>
```

**Styling:** White background (light mode), dark background (dark mode), subtle border, rounded corners (`--radius-lg`).

#### Feature Card Pattern

```tsx
<Card>
  <CardHeader>
    <Icon className="h-12 w-12 mb-4 text-primary" />
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>
      Feature description explaining the benefit
    </CardDescription>
  </CardHeader>
</Card>
```

**Usage:** Homepage feature highlights, service offerings.

### Navigation

#### Desktop Navigation

```tsx
<nav className="hidden lg:flex items-center space-x-6">
  <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
    Home
  </Link>
  
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
      Section
      <ChevronDown className="ml-1 h-4 w-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-56">
      <DropdownMenuItem asChild>
        <Link href="/page" className="cursor-pointer">
          Page Title
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</nav>
```

**Breakpoint:** Desktop navigation appears at `lg` (1024px) and above.

#### Mobile Navigation

```tsx
<div className="flex lg:hidden items-center gap-2">
  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </Button>
</div>

{mobileMenuOpen && (
  <div className="lg:hidden border-t max-h-[70vh] overflow-y-auto">
    <nav className="container py-4 flex flex-col space-y-2">
      {/* Mobile menu items */}
    </nav>
  </div>
)}
```

**Features:** Hamburger menu icon, collapsible sections with smooth animations, max-height constraint for scrollability.

### Forms

#### Input Field

```tsx
<Input
  type="email"
  placeholder="your@email.com"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  required
/>
```

**Styling:** Border, rounded corners, focus ring (blue), padding for comfortable touch targets.

#### Form with Icon

```tsx
<div className="relative">
  <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input
    type="email"
    placeholder="your@email.com"
    className="pl-10"
  />
</div>
```

**Pattern:** Absolute positioned icon inside input field with left padding adjustment.

---

## Layout Structures

### Hero Section (Slider)

**Dimensions:** `h-[600px]` (600px height)

**Structure:**
- Full-width background image with overlay
- Centered content container
- Large heading (H1) + subtitle
- Navigation arrows (left/right)
- Dot indicators at bottom
- Auto-rotation every 7 seconds
- Delayed overlay fade-in (2 seconds) for image visibility

**Key Features:**
- Smooth transitions (1.5s ease-in-out)
- Semi-transparent dark overlay (`bg-black/50`) with backdrop blur
- White text for high contrast
- Responsive: maintains aspect ratio on mobile

### Section Layout

```tsx
<section className="py-20 bg-background">
  <div className="container">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Section Title</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Section description
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Content cards */}
    </div>
  </div>
</section>
```

**Spacing:** `py-20` (80px vertical padding), `mb-16` (64px) between heading and content.

### Alternating Background Sections

```tsx
<section className="py-20 bg-background">
  {/* Content */}
</section>

<section className="py-20 bg-muted/50">
  {/* Content */}
</section>
```

**Pattern:** Alternate between `bg-background` (white) and `bg-muted/50` (light gray with 50% opacity) for visual rhythm.

### Two-Column Layout

```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div>
    {/* Text content */}
  </div>
  <div>
    {/* Image or visual */}
  </div>
</div>
```

**Breakpoint:** Single column on mobile, two columns at `md` (768px) and above.

### Testimonials Carousel

```tsx
<div className="relative max-w-4xl mx-auto">
  <Card className="p-8">
    <div className="flex flex-col items-center text-center">
      <Quote className="h-12 w-12 text-primary mb-4" />
      <p className="text-lg italic mb-6">{testimonial.quote}</p>
      <div>
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </Card>
  
  {/* Navigation buttons */}
</div>
```

**Features:** Centered card, quote icon, italicized quote text, author attribution, navigation arrows.

---

## Interactive Elements

### Glass Morphism Effect

Used for chat widgets and overlays:

```css
backdrop-filter: blur(15px) saturate(91%);
background-color: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.125);
border-radius: 12px;
```

**Usage:** AI Voice Assistant panel, Live Chat widget, modal overlays.

### Hover Effects

#### Link Hover

```tsx
<a className="hover:text-primary transition-colors">Link Text</a>
```

**Effect:** Color transitions to primary blue on hover.

#### Button Hover

```tsx
<Button className="transform hover:scale-105 transition-all">
  Click Me
</Button>
```

**Effect:** Slight scale increase (5%) on hover with smooth transition.

#### Card Hover

```tsx
<Card className="hover:shadow-lg transition-shadow">
  {/* Card content */}
</Card>
```

**Effect:** Shadow increases on hover for depth perception.

### Animations

#### Fade In

```tsx
<div className="animate-in fade-in slide-in-from-top-2">
  {/* Content */}
</div>
```

**Usage:** Tooltips, notifications, modal entries.

#### Pulse (Notification Badge)

```tsx
<span className="absolute -top-1 -right-1 flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
</span>
```

**Usage:** Attention-grabbing notification indicators.

#### Smooth Collapse/Expand

```tsx
<div className={`overflow-hidden transition-all duration-300 ease-in-out ${
  expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
}`}>
  {/* Collapsible content */}
</div>
```

**Usage:** Mobile menu dropdowns, accordion sections.

---

## Responsive Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets, two-column layouts |
| `lg` | 1024px | Desktop navigation, three-column layouts |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large screens |

### Mobile-First Approach

All styles are written mobile-first, with responsive classes applied at larger breakpoints:

```tsx
<div className="flex flex-col md:flex-row lg:gap-8">
  {/* Stacks vertically on mobile, horizontal on tablet+ */}
</div>
```

---

## Accessibility

### Focus States

All interactive elements have visible focus rings:

```css
@apply outline-ring/50;
```

**Color:** Primary blue with 50% opacity.

### Keyboard Navigation

All buttons, links, and interactive elements are keyboard accessible. Use semantic HTML (`<button>`, `<a>`, `<nav>`) for proper screen reader support.

### Color Contrast

All text colors meet WCAG AA standards:
- Light mode: Dark text (`#3C3C3C`) on white background
- Dark mode: Light text (`#E5E5E5`) on dark background

### ARIA Labels

Icon-only buttons include `aria-label` attributes:

```tsx
<Button aria-label="Open chat options">
  <Icon />
</Button>
```

---

## Dark Mode Implementation

### Theme Provider Setup

```tsx
<ThemeProvider defaultTheme="light" switchable>
  <App />
</ThemeProvider>
```

**Props:**
- `defaultTheme`: `"light"` or `"dark"`
- `switchable`: Enables theme toggle functionality

### Theme Toggle Button

```tsx
const { theme, toggleTheme } = useTheme();

<Button variant="ghost" size="icon" onClick={toggleTheme}>
  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
</Button>
```

**Behavior:** Toggles between light and dark mode, persists preference in localStorage.

### Dark Mode Styling

The `.dark` class is automatically applied to the root element when dark mode is active. All color tokens automatically switch to their dark mode values.

---

## Special Components

### Unified Chat Widget

**Position:** Fixed bottom-right corner (`fixed bottom-6 right-6 z-50`)

**Behavior:**
- Single blue chat button visible by default
- Expands on hover to show two options: AI Voice Assistant and Live Chat
- Smooth transitions (300ms) for expansion
- Options have gradient backgrounds for visual hierarchy

### Audio Player

**Features:**
- Modal overlay with glass morphism effect
- Playlist view with track selection
- Real-time audio visualizer (20 animated bars)
- Playback controls: play/pause, skip, volume, progress bar
- Auto-advances to next track

### Newsletter Signup (Footer)

**Layout:** Email input with icon + Subscribe button

**Validation:** HTML5 email validation (`type="email" required`)

**Feedback:** Toast notifications for success/error states

---

## Code Conventions

### Component Structure

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ComponentName() {
  const [state, setState] = useState(false);
  
  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
}
```

### Class Name Ordering

1. Layout (display, position, flex/grid)
2. Sizing (width, height, padding, margin)
3. Typography (font, text size/color/alignment)
4. Visual (background, border, shadow)
5. Interactive (hover, focus, transition)

**Example:**

```tsx
<div className="flex items-center gap-4 w-full p-4 text-sm font-medium bg-card border rounded-lg hover:shadow-lg transition-shadow">
```

### Semantic HTML

Use semantic HTML elements for better accessibility and SEO:

```tsx
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <article>
      {/* Content */}
    </article>
  </section>
</main>

<footer>
  {/* Footer content */}
</footer>
```

---

## SEO Best Practices

### Meta Tags

Every page includes:

```tsx
<SEO
  title="Page Title | WiseWare Consulting"
  description="Page description for search engines"
  keywords="keyword1, keyword2, keyword3"
/>
```

### Structured Data

JSON-LD structured data for Organization and Article schemas:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WiseWare Consulting",
  "url": "https://wisewareconsulting.com",
  "logo": "https://wisewareconsulting.com/logo.png"
}
```

### Sitemap & Robots.txt

- **Sitemap:** `/sitemap.xml` lists all pages with priority and change frequency
- **Robots.txt:** `/robots.txt` allows all crawlers and references sitemap

---

## Performance Optimization

### Image Optimization

- Use modern formats (WebP, AVIF) with fallbacks
- Lazy load images below the fold: `loading="lazy"`
- Provide width and height attributes to prevent layout shift

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

**Strategy:** `display=swap` prevents invisible text during font loading.

### Code Splitting

React components are automatically code-split by Vite. Use dynamic imports for heavy components:

```tsx
const HeavyComponent = lazy(() => import("./HeavyComponent"));
```

---

## Usage Guide

### Starting a New Project

1. **Copy Color Palette:** Copy the entire `:root` and `.dark` sections from `index.css`
2. **Import Inter Font:** Add Google Fonts link to `index.html`
3. **Set Up Theme Provider:** Wrap app in `ThemeProvider` with `switchable` prop
4. **Copy Base Styles:** Copy `@layer base` styles for consistent typography and scrollbar
5. **Use Component Library:** Reference `COMPONENT_LIBRARY.md` for copy-paste components

### Customizing for Sub-Brands

To adapt this design system for a sub-brand while maintaining corporate cohesion:

1. **Keep Typography:** Use Inter font and type scale unchanged
2. **Adjust Primary Color:** Change `--primary` to sub-brand color (keep OKLCH format)
3. **Maintain Spacing:** Keep spacing system and border radius values
4. **Reuse Components:** Use the same component patterns (buttons, cards, navigation)
5. **Update Content:** Replace logo, tagline, and copy with sub-brand messaging

### Design Tokens Reference

All design tokens are defined in `index.css` under the `@theme inline` block. To customize:

```css
:root {
  --primary: oklch(0.5 0.2 240); /* Change to your brand color */
  --radius: 0.5rem; /* Adjust border radius */
}
```

---

## Maintenance

### Version Control

This design system should be versioned alongside the codebase. When making updates:

1. Document changes in this file
2. Update version number at the top
3. Communicate changes to all teams using the system

### Component Updates

When updating a component:

1. Update the component code
2. Update `COMPONENT_LIBRARY.md` with new code
3. Update this document if design patterns change
4. Test in both light and dark modes
5. Verify responsive behavior on mobile, tablet, desktop

---

## Resources

### Tools

- **Color Picker (OKLCH):** [oklch.com](https://oklch.com/)
- **Tailwind CSS Docs:** [tailwindcss.com](https://tailwindcss.com/)
- **shadcn/ui Components:** [ui.shadcn.com](https://ui.shadcn.com/)
- **Lucide Icons:** [lucide.dev](https://lucide.dev/)

### Design Inspiration

- **Fortune 500 Corporate Sites:** IBM, Microsoft, Deloitte
- **Modern B2B SaaS:** Stripe, Linear, Vercel
- **Clean Minimalism:** Apple, Notion, Figma

---

## Quick Reference

### Most Common Patterns

```tsx
// Section with centered heading
<section className="py-20 bg-background">
  <div className="container">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Section Title</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Description</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>

// Feature card
<Card>
  <CardHeader>
    <Icon className="h-12 w-12 mb-4 text-primary" />
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>Feature description</CardDescription>
  </CardHeader>
</Card>

// CTA button
<Button size="lg" className="gap-2">
  Action Text
  <ArrowRight className="h-5 w-5" />
</Button>
```

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**Maintained By:** WiseWare Design Team  
**License:** Internal use only for WiseWare projects and sub-brands
