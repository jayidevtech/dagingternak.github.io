# DagingTernak Landing Page

Website promosi statis untuk reseller daging potong (kambing, sapi, ayam broiler/negeri) menggunakan Vue 3 + Vite.

## Stack

- Vue 3
- Vite
- Tailwind CSS

## Jalankan Lokal

```bash
npm install
npm run dev
```

## Build Produksi

```bash
npm run build
npm run preview
```

## Struktur Penting

- `src/components/sections/`: section landing page
- `src/data/`: konten statis (produk, faq, testimoni, profil bisnis)
- `public/`: aset publik termasuk `robots.txt`, `sitemap.xml`, dan `og-cover.svg`

## Deploy Statis

Proyek siap deploy ke Vercel / Netlify.

1. Push repository ke Git provider.
2. Import project ke Vercel/Netlify.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Pastikan domain final sudah digunakan pada `siteUrl` di `src/data/site.js`.

## Smoke Test Cepat

1. `npm run build`
2. `npm run preview -- --host 0.0.0.0 --port 4173`
3. Buka `http://localhost:4173`
4. Cek:
	- Halaman terbuka tanpa error.
	- Tombol WhatsApp berfungsi.
	- Mode gelap/terang berfungsi.
	- `robots.txt` dan `sitemap.xml` dapat diakses.
