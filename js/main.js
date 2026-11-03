// Reforma Furniture v2: main.js
// Semua fitur di sini adalah "tambahan". Kalau JavaScript gagal dimuat,
// website tetap bisa dibaca dan semua tombol WhatsApp tetap berfungsi.

// 1. Menu HP: buka/tutup daftar menu lewat tombol ☰
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const icon = toggle.querySelector('use');
  const label = toggle.querySelector('.visually-hidden');

  const setOpen = (isOpen) => {
    nav.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    icon.setAttribute('href', isOpen ? '#i-close' : '#i-menu');
    label.textContent = isOpen ? 'Tutup menu' : 'Buka menu';
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Setelah pengunjung memilih menu, tutup kembali supaya isi halaman terlihat
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

// 2. Galeri produk: klik foto kecil untuk mengganti foto utama.
//    Tanpa JS, foto kecil tetap berupa link ke foto ukuran besar.
function initGalleries() {
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const mainImg = gallery.querySelector('[data-gallery-main]');
    const thumbs = gallery.querySelectorAll('.gallery__thumbs a');

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', (event) => {
        event.preventDefault();
        const base = thumb.dataset.full; // contoh: "assets/img/credenza-2"
        mainImg.src = `${base}-640.webp`;
        mainImg.srcset = `${base}-640.webp 640w, ${base}-1200.webp 1200w`;
        mainImg.alt = thumb.dataset.alt;

        thumbs.forEach((t) => t.removeAttribute('aria-current'));
        thumb.setAttribute('aria-current', 'true');
      });
    });
  });
}

// 3. Peta Google: baru dimuat setelah tombol diklik.
//    Peta itu berat (ratusan KB), jadi jangan dimuat untuk semua pengunjung.
function initMap() {
  const map = document.querySelector('[data-map]');
  const button = map?.querySelector('[data-map-load]');
  if (!map || !button) return;

  button.hidden = false; // tombol hanya muncul kalau JS aktif
  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = map.dataset.src;
    iframe.title = 'Peta lokasi Reforma Furniture di Panjer, Denpasar Selatan';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    map.append(iframe);
  }, { once: true });
}

initMobileMenu();
initGalleries();
initMap();
