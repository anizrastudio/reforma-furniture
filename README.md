# Reforma Furniture v2

Website satu halaman untuk Reforma Furniture (Denpasar, Bali).
Dibuat dengan HTML, CSS, dan JavaScript murni, tanpa library tambahan.

## Struktur folder

```
reforma-v2/
├── index.html            ← seluruh isi website (1 halaman, 5 bagian)
├── css/styles.css        ← semua tampilan; warna & jarak diatur di bagian :root
├── js/main.js            ← menu HP, galeri foto, peta (semuanya opsional)
├── assets/img/           ← foto WebP (ukuran 160, 640, 1200 px), logo, gambar OG
├── favicon-32.png        ← ikon di tab browser
├── apple-touch-icon.png  ← ikon saat disimpan ke layar utama iPhone
└── robots.txt            ← izin untuk mesin pencari
```

## Cara menjalankan

1. Buka folder `reforma-v2` di VS Code (**File → Open Folder**).
2. Klik **Go Live** di pojok kanan bawah.
3. Uji di Chrome: klik kanan → **Inspect** → **Lighthouse** → **Mobile** → **Analyze page load**.

## Yang perlu dicek pemilik sebelum online

- [ ] Ukuran kedua produk (cari teks "Segera diperbarui" di `index.html`).
- [ ] Nama dan isi credenza: apakah benar dijual sebagai **set 3 modul** seharga Rp1.200.000?
- [ ] Kondisi laci credenza: apakah semua laci benar berfungsi?
- [ ] Cara pengambilan/pengantaran (langkah 4 di bagian "Cara Membeli").
- [ ] Pin peta: klik "Buka di Google Maps" dan pastikan lokasinya di Panjer.

## Setelah website online (misalnya di Netlify)

Buka `index.html`, cari dua baris `og:url` dan `og:image`, hapus tanda komentar `<!--` dan `-->`,
lalu ganti `ALAMAT-WEBSITE-ANDA` dengan alamat aslinya. Tujuannya agar link yang dibagikan
di WhatsApp menampilkan foto dan judul.

## Cara menambah produk baru

1. Siapkan foto, lalu konversi ke WebP dalam 3 ukuran dengan nama
   `nama-produk-1-160.webp`, `nama-produk-1-640.webp`, `nama-produk-1-1200.webp`
   (bisa memakai squoosh.app, gratis).
2. Salin satu blok `<article class="product">...</article>` di `index.html`, lalu ganti nama,
   harga, deskripsi, foto, dan teks pesan WhatsApp.
3. Tambahkan produknya juga di data `makesOffer` (bagian `<script type="application/ld+json">`).

## Catatan studi kasus (sebelum → sesudah)

| Metrik (Mobile, Incognito) | v1 (sebelum) | v2 (sesudah) |
|---|---|---|
| Lighthouse Performance | 61 | 98 |
| Accessibility | 83 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| Largest Contentful Paint | 9,2 dtk | 1,6 dtk |
| First Contentful Paint | 2,7 dtk | 1,6 dtk |
| Total Blocking Time | 430 ms | 130 ms |
| Isi | Foto stok, testimoni & galeri fiktif | Foto & harga produk asli |