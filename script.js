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
