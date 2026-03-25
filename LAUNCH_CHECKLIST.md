# Launch Checklist

## Pre-Deploy

- [ ] Update `siteUrl` pada `src/data/site.js` ke domain produksi final.
- [ ] Pastikan nomor WhatsApp, alamat, dan jam operasional sudah valid.
- [ ] Jalankan `npm run build` tanpa error.

## QA Manual Responsif

- [ ] Cek tampilan pada lebar 320, 375, 768, 1024, 1440.
- [ ] Cek menu mobile, scroll section, dan skip-link keyboard.
- [ ] Cek mode gelap/terang dan persistensi tema.

## QA Fungsional

- [ ] Cek CTA WhatsApp pada Hero, Header, Form, dan CTA akhir.
- [ ] Cek validasi form (nama/jumlah wajib diisi).
- [ ] Cek FAQ dapat dibuka/tutup dengan keyboard.

## QA SEO

- [ ] Cek meta title/description/OG di source halaman.
- [ ] Cek `robots.txt` dan `sitemap.xml` dapat diakses.
- [ ] Cek JSON-LD LocalBusiness terbaca pada source.

## Deploy

- [ ] Deploy ke Vercel/Netlify (output `dist`).
- [ ] Buka URL produksi dan lakukan smoke test ulang.
- [ ] Bagikan URL untuk indexing/search console.
