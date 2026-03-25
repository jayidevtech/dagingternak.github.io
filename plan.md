## Plan: MVP Website Promosi Reseller Daging (Vue 3 Statis)

Membangun website promosi single-page berbasis Vue 3 (tanpa backend/database) dalam 1-2 minggu, dengan fokus konversi ke WhatsApp, galeri produk yang kuat, harga tampil publik, SEO lokal, testimoni, dan form pemesanan sederhana. Pendekatan terbaik untuk MVP: arsitektur komponen per section + konten berbasis data statis agar cepat launch dan mudah diupdate.

**Steps**
1. [x] Phase 1 - Foundation (Hari 1-2): inisialisasi Vue 3 + Vite, setup sistem styling, struktur komponen, baseline SEO metadata, dan struktur konten statis.
2. [x] Definisikan data konten statis: kategori produk (kambing, sapi, ayam broiler/negeri), daftar harga, testimoni, FAQ, kontak, dan CTA WhatsApp.
3. [x] Phase 2 - Build Core Sections (Hari 2-5): bangun Header, Hero, Kategori Produk, Keunggulan, Harga, Testimoni, FAQ, CTA akhir, Kontak, Footer dalam satu landing page.
4. [x] Kembangkan galeri produk visual: optimasi image size/format, lazy load, dan hierarchy konten agar kuat di mobile.
5. [x] Implementasikan form pemesanan sederhana (client-side): validasi input, rangkuman pesanan, lalu kirim ke WhatsApp dengan pesan prefilled.
6. [x] Phase 3 - SEO & Conversion (Hari 5-8): optimasi title/description, Open Graph, schema bisnis lokal, copywriting CTA, dan penguatan trust signal.
7. [x] Phase 4 - Responsive & Accessibility QA (Hari 8-10): audit tampilan multi breakpoint, keyboard navigation, alt text, contrast ratio, dan reduced motion.
8. [x] Phase 5 - Performance & Launch (Hari 10-14): tuning performa (bundle/image), final QA lintas device, deploy ke hosting statis, dan smoke test produksi.

**Dependensi & Paralelisme**
1. Foundation wajib selesai dulu sebelum build section.
2. Build section dan galeri produk bisa jalan paralel setelah struktur dasar siap.
3. Form pemesanan bergantung pada data konten + section terkait.
4. SEO bisa dimulai saat section inti sudah stabil.
5. QA lengkap dan launch dilakukan setelah seluruh fitur inti selesai.

**Verification**
1. Build produksi sukses tanpa error kritis.
2. Semua CTA WhatsApp berfungsi dan menghasilkan pesan prefilled yang benar.
3. Tampilan stabil di 320, 375, 768, 1024, 1440.
4. Tiga kategori utama + harga publik + testimoni + kontak tampil lengkap.
5. Meta/OG/schema/robots/sitemap tervalidasi.
6. Baseline aksesibilitas terpenuhi (keyboard, focus, label, alt, kontras).
7. Target Lighthouse minimal 90 untuk Performance, Accessibility, Best Practices, SEO.

**Decisions (Terkunci dari diskusi)**
1. Target pasar: campuran (rumah tangga, UMKM, kebutuhan acara).
2. Scope MVP: single landing page.
3. Harga: tampil publik.
4. Branding: baru ada nama brand (logo/warna menyusul).
5. Prioritas fitur: CTA WhatsApp cepat, galeri produk kuat, SEO lokal, testimoni, form pemesanan sederhana.
6. Deadline: 1-2 minggu.
7. Out of scope: backend, database, payment gateway, dashboard admin, stok real-time.

**Rekomendasi Praktis**
1. Gunakan utility-first styling agar cepat (tetap siapkan design token untuk warna brand Anda).
2. Pakai format harga “mulai dari/rentang” agar aman saat harga pasar berubah.
3. Form pemesanan sebaiknya ada konfirmasi ringkas sebelum redirect ke WhatsApp untuk mengurangi salah input.

Kalau plan ini sudah cocok, langkah berikutnya saya bisa pecah jadi task harian eksekusi (Day-by-Day checklist) supaya langsung siap dikerjakan.
