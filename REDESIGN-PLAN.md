# 🎨 Redesign Plan v2 — Miro Mie

> Goal: Dari "AI generic" → **agency-quality** modern website

---

## ❌ Masalah Saat Ini

| Problem | Contoh |
|:--------|:-------|
| Emoji sebagai icon | 🍜 🍲 🧊 — terlihat murahan |
| Warna AI slop | Gradient amber/oranye yang generic |
| Font generic | DM Sans (terlalu umum) |
| Placeholder kosong | "Ganti foto asli" — tidak ada gambar real |
| Tidak ada animasi | Static, tidak ada life |
| Tidak ada slider | Tidak ada interaksi menarik |

---

## ✅ Solusi yang Akan Diterapkan

### 1. Design System — Shadcn Language

```
SEBELUM (AI Slop):
├── Warna: amber/oranye gradient
├── Font: DM Sans (generic)
├── Radius: rounded-2xl/3xl (terlalu bulat)
└── Shadow: shadow-lg/xl (terlalu berat)

SESUDAH (Shadcn Clean):
├── Warna: zinc/slate neutral + ONE accent
├── Font: "Plus Jakarta Sans" (karakter kuat)
├── Radius: rounded-lg (shadcn default 0.5rem)
├── Shadow: subtle, hanya di hover
└── Border: 1px solid zinc-200 (shadcn style)
```

**Color Palette Baru:**
```css
--background: #FFFFFF
--foreground: #09090B        /* zinc-950 */
--muted: #F4F4F5            /* zinc-100 */
--muted-foreground: #71717A /* zinc-500 */
--border: #E4E4E7           /* zinc-200 */
--accent: #18181B           /* zinc-900 — tombol utama */
--primary: #DC2626          /* red-600 — aksen merah untuk makanan */
--ring: #DC2626             /* focus ring */
```

### 2. Lucide Icons (Bukan Emoji)

Semua icon diganti dengan SVG Lucide inline:
- `Utensils` — untuk menu/makanan
- `Phone` — untuk kontak/WA
- `Clock` — untuk jam buka
- `MapPin` — untuk lokasi
- `Star` — untuk rating
- `ChevronRight` — untuk arrow
- `Instagram` / `Facebook` — untuk sosmed
- `ArrowRight` — untuk CTA

### 3. Real Images dari Unsplash

Foto makanan Indonesia dari Unsplash (direct URL, gratis):

| Item | Unsplash Search |
|:-----|:----------------|
| Hero background | Indonesian noodle stall, warm lighting |
| Mie Yamin | Dark soy sauce noodles close-up |
| Mie Ayam | Chicken noodle soup bowl |
| Baso | Indonesian meatball soup |
| Es Teler | Indonesian iced dessert |
| Toko/About | Indonesian warung/restaurant interior |

**Format URL:** `https://images.unsplash.com/photo-XXXX?w=800&q=80&auto=format`

### 4. Hero Slider (Swiper.js)

```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │                                     │    │
│  │   [SLIDE 1: Mie Yamin Hero Photo]   │    │
│  │                                     │    │
│  │   "Mie Yamin Legendaris"            │    │
│  │   "Racikan bumbu khas sejak 2020"   │    │
│  │                                     │    │
│  │   [Lihat Menu]  [Pesan via WA]      │    │
│  │                                     │    │
│  │   ● ○ ○  (pagination dots)          │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Slide 2: Baso Sapi                         │
│  Slide 3: Es Teler Segar                    │
│                                             │
└─────────────────────────────────────────────┘
```

**Fitur:**
- Auto-play 5 detik
- Smooth fade/slide transition
- Navigation arrows (subtle)
- Pagination dots
- Touch/swipe support (mobile)
- Ken Burns effect (zoom pelan pada foto)

### 5. Animations & Micro-interactions

| Element | Animation |
|:--------|:----------|
| Navbar | Blur backdrop saat scroll |
| Hero text | Fade-in + slide-up saat load |
| Section header | Fade-in saat scroll ke viewport |
| Product cards | Hover: subtle lift + border change |
| CTA button | Hover: scale + shadow increase |
| Testimonial cards | Staggered fade-in (delay per card) |
| Image reveal | Clip-path reveal animation |
| Stats counter | Count-up animation saat visible |
| WhatsApp FAB | Pulse animation (sudah ada) |

### 6. Improved Sections

#### Hero Section
```
┌──────────────────────────────────────────────┐
│  NAVBAR (transparent → blur on scroll)       │
│  Logo    Tentang  Produk  Testimoni  [Pesan] │
├──────────────────────────────────────────────┤
│                                              │
│  ┌──────────────────┐  ┌──────────────────┐  │
│  │                  │  │                  │  │
│  │  Badge: Buka     │  │  [SWIPER SLIDER] │  │
│  │  Setiap Hari     │  │                  │  │
│  │                  │  │  Foto Mie Yamin  │  │
│  │  Mie Yamin &     │  │  Full bleed      │  │
│  │  Baso Legendaris │  │  rounded-xl      │  │
│  │                  │  │                  │  │
│  │  Desc text...    │  │  ● ○ ○           │  │
│  │                  │  │                  │  │
│  │  [Lihat Menu →]  │  └──────────────────┘  │
│  │  [Pesan via WA]  │                        │
│  │                  │                        │
│  │  4+ | 6+ | 1000+ │                        │
│  └──────────────────┘                        │
│                                              │
└──────────────────────────────────────────────┘
```

#### Produk Section
```
┌──────────────────────────────────────────────┐
│  MENU KAMI                                   │
│  Pilihan Produk Favorit                      │
├──────────────────────────────────────────────┤
│                                              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌────┐│
│  │ [FOTO]  │ │ [FOTO]  │ │ [FOTO]  │ │[FO]││
│  │ Unsplash│ │ Unsplash│ │ Unsplash│ │    ││
│  │         │ │         │ │         │ │    ││
│  │ Mie     │ │ Mie     │ │ Baso    │ │Es  ││
│  │ Yamin   │ │ Ayam    │ │         │ │Telr││
│  │         │ │         │ │         │ │    ││
│  │ Rp 18rb │ │ Rp 16rb │ │ Rp 20rb │ │18rb││
│  │         │ │         │ │         │ │    ││
│  │[Pesan →]│ │[Pesan →]│ │[Pesan →]│ │[→] ││
│  └─────────┘ └─────────┘ └─────────┘ └────┘│
│                                              │
└──────────────────────────────────────────────┘
```

### 7. Dependencies Baru

```json
{
  "swiper": "^11.x"    // Hero slider + testimonial slider
}
```

**Total size impact:** ~30KB gzipped (Swiper)

---

## 📁 File Changes

| File | Action |
|:-----|:-------|
| `src/styles/global.css` | Rewrite — new color tokens |
| `src/layouts/BaseLayout.astro` | Update — Plus Jakarta Sans font |
| `src/components/Navbar.astro` | Rewrite — cleaner, Lucide icons |
| `src/components/Hero.astro` | Rewrite — Swiper slider + real photos |
| `src/components/About.astro` | Rewrite — real photo, Lucide icons |
| `src/components/Produk.astro` | Rewrite — Unsplash photos, Lucide icons |
| `src/components/CTA.astro` | Rewrite — cleaner, Lucide icons |
| `src/components/Testimoni.astro` | Rewrite — Swiper slider for mobile |
| `src/components/Kontak.astro` | Rewrite — Lucide icons, cleaner |
| `src/components/WhatsAppButton.astro` | Minor — Lucide icon |
| `src/components/Footer.astro` | Rewrite — Lucide icons, cleaner |
| `package.json` | Add swiper dependency |

---

## ⏱️ Estimasi

| Step | Task | Estimasi |
|:-----|:-----|:---------|
| 1 | Install Swiper + update config | 5 menit |
| 2 | Rewrite global.css + BaseLayout | 10 menit |
| 3 | Rewrite Hero + Swiper slider | 15 menit |
| 4 | Rewrite About + Produk | 15 menit |
| 5 | Rewrite CTA + Testimoni + Kontak | 10 menit |
| 6 | Rewrite Navbar + Footer + WA button | 10 menit |
| 7 | Test + screenshot + commit | 10 menit |
| **Total** | | **~75 menit** |

---

**Ready to execute?**
