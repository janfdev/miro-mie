# 🎨 Design Research Report — Miro Mie v2

> Referensi dari 3 website makanan kelas dunia

---

## Referensi yang Dianalisis

| # | Website | Type | Key Strength |
|:-:|:--------|:-----|:-------------|
| 1 | **Sweetgreen** | Healthy bowls | Clean minimal, one accent color, strong CTA |
| 2 | **Ichiran** | Ramen chain | Moody hero, carousel, premium dark aesthetic |
| 3 | **Honey & Co** | Small restaurant | Warm, cozy, serif+sans, carousel, personal |

---

## 🔑 Key Takeaways (Design Patterns)

### 1. Hero Section
```
SWEETGREEN:              ICHIRAN:                HONEY & CO:
Full-width photo         Full-width + carousel   Full-width + carousel
Green accent CTA         "Learn More" CTA        "Book Now" CTAs per location
Seasonal urgency         No.1 brand positioning  Location-focused CTAs
```

**Decision untuk Miro Mie:**
- Full-width hero dengan **Swiper carousel** (3 slides, auto-play)
- Dark overlay untuk text readability
- Slide 1: Mie Yamin hero photo + CTA
- Slide 2: Baso hero photo + CTA
- Slide 3: Es Teler hero photo + CTA
- Primary CTA: "Pesan via WhatsApp" — selalu visible

### 2. Typography
```
SWEETGREEN:    Modern sans-serif (Avenir-like), ALL CAPS for CTAs
ICHIRAN:       Clean sans-serif, bold brand name, small supporting text
HONEY & CO:    Serif logo/headlines + sans-serif body (WARMTH!)
```

**Decision untuk Miro Mie:**
- **Logo/Headlines:** "Playfair Display" (serif, warm, artisanal)
- **Body/Nav/CTA:** "Inter" (clean, modern sans-serif)
- Mix creates: warm neighborhood feel + professional readability

### 3. Color Palette
```
SWEETGREEN:    White bg + green accent + earth tones
ICHIRAN:       Dark/black bg + warm food tones (orange, green)
HONEY & CO:    Light bg + terracotta accent + warm earthy
```

**Decision untuk Miro Mie:**
```
Background:     #FAFAF9 (warm white)
Surface:        #FFFFFF (white cards)
Text Primary:   #1C1917 (stone-900, warm black)
Text Secondary: #78716C (stone-500, warm gray)
Border:         #E7E5E4 (stone-200, subtle)
Accent:         #B91C1C (red-700 — appetite-stimulating!)
Accent Hover:   #991B1B (red-800)
Muted BG:       #F5F5F4 (stone-100)
```

### 4. Navigation
```
SWEETGREEN:    Logo center + hamburger + ORDER CTA (right)
ICHIRAN:       Logo left + horizontal nav + utility nav
HONEY & CO:    Logo left + horizontal nav + BOOK CTA (right)
```

**Decision untuk Miro Mie:**
- Logo kiri + nav links + "Pesan" CTA kanan
- Sticky, transparent → blur backdrop on scroll
- Mobile: hamburger + slide-in menu

### 5. Product/Menu Cards
```
SWEETGREEN:    Horizontal scroll cards, photo + name + "Order now →"
ICHIRAN:       Section-based with location details
HONEY & CO:    2x2 grid, photo + name + location
```

**Decision untuk Miro Mie:**
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Large food photo (4:3 ratio, Unsplash)
- Name + price + description
- "Pesan via WhatsApp →" CTA per card
- Hover: subtle lift + shadow

### 6. Animations & Effects
```
SWEETGREEN:    Minimal, color transitions, scroll-triggered sections
ICHIRAN:       Carousel autoplay, pause control, smooth transitions
HONEY & CO:    Carousel with dots + arrows, smooth section reveals
```

**Decision untuk Miro Mie:**
- Hero carousel: fade transition, 5s auto-play, dots + arrows
- Section reveal: fade-in-up on scroll (IntersectionObserver)
- Card hover: translateY(-4px) + shadow-lg
- Counter animation for stats
- No excessive animations (keep it classy)

---

## 🖼️ Unsplash Photos (Real Images)

| Item | Search Query | Unsplash ID |
|:-----|:-------------|:------------|
| Hero Slide 1 | "indonesian noodle yamin close up" | photo-1569718212165-3a8278d5f624 |
| Hero Slide 2 | "meatball soup baso indonesia" | photo-1529692236671-f1f6cf9683ba |
| Hero Slide 3 | "es teler indonesian dessert" | photo-1563805042-7684c019e1cb |
| Mie Yamin | "dark soy sauce noodles bowl" | photo-1555126634-323283e090fa |
| Mie Ayam | "chicken noodle soup asian" | photo-1617093727343-374698b1b08d |
| Baso | "meatball soup bowl" | photo-1529692236671-f1f6cf9683ba |
| Es Teler | "indonesian iced dessert coconut" | photo-1563805042-7684c019e1cb |
| About/Toko | "indonesian warung restaurant" | photo-1555396273-367ea4eb4db5 |

> NOTE: Saya akan verify setiap URL berfungsi sebelum digunakan.

---

## 🏗️ Updated Architecture

```
Single-page layout:
┌─────────────────────────────────────────────┐
│  NAVBAR (transparent → blur on scroll)      │
│  Logo    Tentang  Produk  Testimoni [Pesan] │
├─────────────────────────────────────────────┤
│                                             │
│  HERO CAROUSEL (Swiper)                     │
│  3 slides, auto-play, fade transition       │
│  Dark overlay + white text + CTA            │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ABOUT                                      │
│  Photo + story + 4 feature cards            │
│  Playfair Display headline                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  PRODUK                                     │
│  4-column grid, real Unsplash photos        │
│  Hover: lift + shadow                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  CTA (dark bg)                              │
│  "Laper? Langsung Aja."                    │
│  White buttons on dark background           │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  TESTIMONI (Swiper carousel on mobile)      │
│  4-column grid desktop, carousel mobile     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  KONTAK                                     │
│  Map + info cards + WhatsApp CTA            │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Logo + nav + contact + social              │
├─────────────────────────────────────────────┤
│  WHATSAPP FAB (floating, pulse)             │
└─────────────────────────────────────────────┘
```

---

## Dependencies

```json
{
  "swiper": "^11.x"
}
```

---

## Summary

| Aspect | v1 (AI Slop) | v2 (Agency) |
|:-------|:-------------|:------------|
| Color | Amber/orange gradient | Stone warm + red accent |
| Font | DM Sans | Playfair Display + Inter |
| Icons | Emoji 🍜🍜🍜 | Lucide SVG |
| Images | Placeholder | Real Unsplash photos |
| Hero | Static text | Swiper carousel |
| Cards | Basic | Photo + hover effects |
| Animation | None | Scroll reveal + carousel |
| Overall | Template feel | Agency-quality |

---

**Sumber:** sweetgreen.com, ichiranusa.com, honeyandco.co.uk
