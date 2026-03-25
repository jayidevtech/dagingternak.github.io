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

## Deploy ke GitHub Pages

Deploy berjalan otomatis dari branch `main` lewat GitHub Actions.

1. Masuk ke GitHub repo -> `Settings` -> `Pages`.
2. Pada bagian `Build and deployment`, pilih `Source: GitHub Actions`.
3. Pastikan DNS subdomain `dagingternak.jayidev.tech` sudah mengarah ke GitHub Pages.
4. File `public/CNAME` sudah disiapkan agar custom domain otomatis terbaca saat deploy.
5. Workflow deploy ada di `.github/workflows/deploy-pages.yml`.

Catatan:
- Update `siteUrl` di `src/data/site.js` ke `https://dagingternak.jayidev.tech` agar canonical/OG URL konsisten.

## Smoke Test Cepat

1. `npm run build`
2. `npm run preview -- --host 0.0.0.0 --port 4173`
3. Buka `http://localhost:4173`
4. Cek:
	- Halaman terbuka tanpa error.
	- Tombol WhatsApp berfungsi.
	- Mode gelap/terang berfungsi.
	- `robots.txt` dan `sitemap.xml` dapat diakses.
