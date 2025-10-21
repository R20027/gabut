// 1. Kita "tangkap" dulu tombolnya pakai ID-nya
// Pastikan ID di HTML adalah "sapaButton" (sesuai kode saya)
const tombolSapa = document.getElementById("sapaButton");

// 2. Kita "pasang pendengar" di tombol itu.
// "addEventListener" artinya "tambahkan pendengar acara"
// Acara-nya adalah "click" (klik)
tombolSapa.addEventListener("click", function() {
  
  // 3. Ini yang terjadi KETIKA tombol di-klik
  alert("Halo, Rois! Semangat terus belajar codingnya, bang!");
  
});

**B. Tulis Kode di `script.js`**

Isi file `script.js` kamu dengan kode ini:
```javascript
// 1. Kita "tangkap" kedua elemen: tombolnya DAN wadah pesannya
const tombolSapa = document.getElementById("sapaButton");
const tempatPesan = document.getElementById("pesanSapa");

// 2. Kita pasang pendengar di tombolnya
tombolSapa.addEventListener("click", function() {
  
  // 3. KETIKA diklik, kita ubah isi teks dari 'tempatPesan'
  tempatPesan.textContent = "Halo, bang! Terima kasih sudah mampir. Semangat ngodingnya!";
  
});
