# PWA Masjid An Nur Saujana Utama — GitHub Pages

Pakej ini ialah starter PWA statik untuk Pilihan B. Ia boleh dihoskan menggunakan GitHub Pages tanpa pelayan aplikasi. Borang khairat dan pembayaran belum diintegrasikan; pautan contoh mesti diganti sebelum penggunaan awam.

## Fail
- `index.html` — halaman utama dan modul portal.
- `styles.css` — reka bentuk responsif hijau forest, emas dan putih.
- `config.js` — konfigurasi pautan serta kandungan ringkas yang boleh dikemas kini oleh AJK.
- `manifest.webmanifest` — nama, ikon dan tetapan PWA.
- `service-worker.js` — cache app shell untuk akses asas luar talian.
- `icons/icon-192.png`, `icons/icon-512.png` — ikon PWA.
- `icons/icon.svg` — ikon vektor sumber.
- `.nojekyll` — mengelakkan pemprosesan Jekyll bagi fail statik.

## Sebelum diterbitkan (wajib)
1. Semak `config.js` dan ganti pautan contoh untuk:
   - `khairatRegistrationUrl`
   - `khairatEnquiryUrl`
   - `donationUrl`
   - `websiteUrl`
2. Sediakan Google Forms rasmi untuk pendaftaran dan pertanyaan khairat. Pastikan pemilik borang ialah pihak masjid dan tetapan akses sesuai. Uji borang pada telefon.
3. Gantikan pengumuman contoh dalam `config.js` dengan kandungan yang diluluskan AJK. Jangan terbitkan maklumat yang belum disahkan.
4. Sahkan maklumat alamat dan nombor telefon, serta zon dan sumber rasmi waktu solat jika modul waktu solat ditambah kemudian.
5. Semak polisi privasi, akses respons borang, tempoh simpanan data dan pegawai yang bertanggungjawab.

## Terbitkan melalui GitHub Pages
1. Log masuk ke GitHub dan cipta repository baharu, contohnya `annur-su-pwa`. Jika repo akan awam, jangan masukkan data peribadi, kunci rahsia atau rekod ahli.
2. Muat naik semua fail dan folder pakej ini ke akar repository (root), bukan dalam folder tambahan.
3. Pergi ke **Settings → Pages**.
4. Di bahagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, kemudian tekan **Save**.
6. Tunggu proses penerbitan. URL biasanya berbentuk `https://USERNAME.github.io/annur-su-pwa/`. Gunakan URL tepat yang dipaparkan oleh GitHub Pages.
7. Buka URL menggunakan HTTPS dan uji pada desktop serta telefon.

## Ujian penerimaan
- Halaman utama dibuka tanpa pautan rosak.
- Navigasi mudah alih berfungsi.
- Setiap kad/pautan menghala ke halaman rasmi yang betul.
- Manifest boleh dibaca dan ikon 192/512 tersedia.
- Service worker berjaya didaftarkan melalui HTTPS.
- PWA boleh dipasang jika pelayar dan peranti menyokongnya.
- Selepas lawatan pertama, app shell asas boleh dibuka semula tanpa internet; kandungan luar seperti Google Sites dan Google Forms tetap memerlukan sambungan internet.
- Uji iPhone: buka URL di Safari → Share → Add to Home Screen.
- Uji Android: buka URL di Chrome → menu → Install app / Add to Home screen, jika pilihan tersedia.

## Cara AJK mengemas kini kandungan
1. Buka `config.js` dalam repository.
2. Edit tajuk/teks dalam `announcements` dan pautan yang berkenaan.
3. Simpan perubahan dan tunggu GitHub Pages diterbitkan semula.
4. Semak URL langsung. Jika paparan lama masih muncul, tutup/buka semula aplikasi atau kosongkan cache.

## Had dan keselamatan
- GitHub Pages ialah hosting statik; ia tidak menyediakan pangkalan data ahli, log masuk pentadbir atau pengesahan bayaran.
- Borang Google Forms adalah pilihan mudah untuk pendaftaran/pertanyaan, tetapi respons perlu dikawal aksesnya oleh pemilik borang.
- Jangan kumpul nombor kad pengenalan, butiran bank atau data sensitif yang tidak diperlukan.
- Untuk portal ahli pada masa hadapan, gunakan backend yang mempunyai autentikasi, peraturan akses, audit dan sandaran. Jangan letakkan API key rahsia dalam fail JavaScript awam.
- Google Sites kekal berasingan; aplikasi ini menghubungkan pengguna ke laman tersebut, bukan menyuntik kod PWA ke dalam Google Sites.

## Senarai semak sebelum pelancaran
- [ ] Logo dan nama diluluskan
- [ ] Semua pautan sebenar diuji
- [ ] Pengumuman contoh diganti
- [ ] Borang khairat diluluskan dan diuji
- [ ] Notis privasi disediakan
- [ ] Sekurang-kurangnya seorang AJK ditetapkan sebagai penjaga kandungan
- [ ] Ujian Android dan iPhone selesai
