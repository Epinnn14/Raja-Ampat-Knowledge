# Raja Ampat — Web Wisata & Budaya

Web satu halaman tentang Raja Ampat, dibuat dengan **React + Vite**.
Lanjutan dari proyek lama `R4` (artikel *Pasir Timbul* karya Kevin Aprilio tetap dipakai).

## Isi halaman

| Bagian | Isi |
| --- | --- |
| Hero | Foto besar Wayag + judul |
| Tentang | Gambaran umum, Coral Triangle, UNESCO Global Geopark, angka-angka penting |
| Destinasi | Wayag, Piaynemo, Arborek, Misool, Teluk Kabui, Pasir Timbul (+ artikel lengkap dalam pop-up) |
| Bawah Laut | Manta, hiu berjalan, wobbegong, kuda laut kerdil, penyu, cenderawasih |
| Legenda | Cerita tujuh telur & empat raja (interaktif per bab) |
| Budaya | Sasi, Suling Tambur & Tari Wor, kampung wisata, kerukunan, lukisan tebing Misool, bahasa |
| **Galeri** | 29 foto keindahan alam, filter kategori, lightbox (panah keyboard / geser di HP) |
| Panduan | Cara ke sana, waktu terbaik, izin masuk, biaya, tips ramah lingkungan |

## Menjalankan

Butuh Node.js 20.19+ (atau 22+).

```bash
npm install
npm run dev       # buka http://localhost:5173
npm run build     # hasil produksi di folder dist/
npm run preview   # cek hasil build
```

## Struktur

```
src/
  App.jsx               susunan semua bagian
  index.css             semua gaya (warna di :root)
  data/content.js       teks: destinasi, legenda, budaya, panduan
  data/photos.js        daftar foto + kredit/lisensi
  components/           Navbar, Hero, About, Destinations, Underwater,
                        Legend, Culture, Gallery, Travel, Footer, Photo
  hooks/useReveal.js    animasi muncul saat scroll
  assets/pasir-timbul.jpg   foto dari proyek lama
```

Mau ganti/menambah teks? Cukup edit `src/data/content.js`.
Mau menambah foto galeri? Tambahkan entri di `src/data/photos.js` lalu masukkan id-nya ke `galleryOrder`.

## Tentang foto

Foto diambil dari **Wikimedia Commons** dengan lisensi Creative Commons (CC BY / CC BY-SA) dan
dimuat langsung dari server Wikimedia, jadi **butuh koneksi internet**. Nama fotografer dan
lisensi tercantum di lightbox galeri dan di bagian "Lihat kredit foto" pada footer — jangan
dihapus, itu syarat lisensinya. Kalau sebuah foto gagal dimuat, tampil kotak gradasi sebagai pengganti.

Tarif izin masuk, jadwal kapal, dan info perjalanan bisa berubah; cek sumber resmi sebelum berangkat.
