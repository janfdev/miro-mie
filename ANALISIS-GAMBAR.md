# Analisis Gambar — Proyek Miro Mie

## Struktur Gambar Saat Ini

**Tidak ada file gambar lokal.** Semua gambar masih pakai URL remote (Unsplash).

```
public/
  favicon.ico     ✅ ada
  favicon.svg     ✅ ada
  images/         ❌ folder kosong — belum ada file
```

Referensi lokal di kode (`/images/mie-yamin.jpg`, dll.) belum punya file fisik.

---

## Dua Cara Simpan Gambar di Astro

### 1. Folder `public/` — file statis

Letak: `public/images/nama-file.jpg`

Akses di template: **langsung pakai path absolut dari root**

```astro
<img src="/images/mie-yamin.jpg" alt="Mie Yamin" />
```

Cocok untuk: gambar yang sering diganti manual, favicon, OG image, file statis.

### 2. Folder `src/` — import ESM (diproses Astro)

Letak: `src/assets/images/nama-file.jpg`

Akses di template: **import dulu di frontmatter**

```astro
---
import mieYamin from '../assets/images/mie-yamin.jpg';
---
<img src={mieYamin} alt="Mie Yamin" />
```

Kelebihan: Astro hash filename untuk cache-busting, optimasi otomatis (kompresi, resize), type-safe.

Cocok untuk: gambar yang perlu dioptimasi dan jarang diganti.

---

## Analisis Semua Komponen yang Pakai Gambar

| Komponen | File | Sumber Gambar | Cara Panggil |
|----------|------|---------------|--------------|
| **Hero** | `src/components/Hero.astro:50` | Unsplash URL | `src="https://..."` langsung di `<img>` |
| **About** | `src/components/About.astro:10` | Unsplash URL | `src="https://..."` langsung di `<img>` |
| **CeritaKami** | `src/components/CeritaKami.astro:3-6,38` | Unsplash URL | dari array `slides[]`, langsung di `<img>` |
| **Galeri** | `src/components/Galeri.astro:3-9` | Unsplash URL | dari array `photos[]`, langsung di `<img>` |
| **MenuUnggulan** | `src/components/MenuUnggulan.astro:10,20,30,40` | Unsplash URL | dari array `menuItems[]`, langsung di `<img>` |
| **Testimoni** | `src/components/Testimoni.astro:3-11` | Unsplash URL (avatar) | dari array `testimonials[]`, langsung di `<img>` |
| **Produk** | `src/components/Produk.astro:4-9` | Unsplash URL via `imageMap` | mapping nama→URL, langsung di `<img>` |
| **Menu** | `src/components/Menu.astro:38` | **Lokal** `item.image` dari `site.ts` | `src={item.image}` — path `/images/*.jpg` |
| **BaseLayout** | `src/layouts/BaseLayout.astro:14` | **Lokal** `ogImage` | `ogImage = '/og-image.jpg'` — path `/og-image.jpg` |

### Detail data gambar di `site.ts`

```ts
// src/data/site.ts
image: '/images/mie-yamin.jpg',   // Menu: Mie Yamin
image: '/images/mie-ayam.jpg',    // Menu: Mie Ayam
image: '/images/baso.jpg',        // Menu: Baso
image: '/images/es-teler.jpg',    // Menu: Es Teler
avatar: 'https://ui-avatars.com/api/?name=...'  // Testimoni — remote
```

File-file `/images/*.jpg` ini **belum ada** — kalau build sekarang, `Menu.astro` bakal broken image.

### Detail OG Image

```ts
// BaseLayout.astro:14
ogImage = '/og-image.jpg'  // default — file belum ada
```

---

## Ringkasan

| Aspek | Kondisi |
|-------|---------|
| Gambar lokal di `public/images/` | ❌ Belum ada |
| Gambar lokal di `src/assets/` | ❌ Folder belum dibuat |
| Semua gambar yang tampil | ✅ Remote Unsplash (berfungsi) |
| Referensi lokal di `site.ts` | ⚠️ Ada path `/images/*.jpg` tapi file tak ada |
| OG image default | ⚠️ `/og-image.jpg` — belum ada |

## Rekomendasi

1. **Kalau baru belajar**: pakai `public/images/` — lebih simpel, tinggal taruh file dan akses via `/images/nama.jpg`.
2. **Kalau mau optimalisasi**: bikin folder `src/assets/images/`, import ESM, biar Astro handle kompresi & hashing.
3. **Prioritas**: siapkan 4 gambar menu (mie-yamin, mie-ayam, baso, es-teler) + 1 OG image sesuai path yang udah direferensi di `site.ts`.
