// const orderMakananSync = () => {
//   console.log("Pesan makanan ...");
//   console.log("Pesanan sedang di proses...");
//   console.log("Pesanan sedang dalam perjalanan...");
//   console.log("Pesanan sampai");
// };

// const undangTemanSync = () => {
//   console.log("Sebar undangan...");
// };

// orderMakananSync();
// undangTemanSync();

/* ==========
  Synchronous
  Secara umum kode berjalan secara Synchronous, yaitu kode dieksekusi dari atas ke bawah secara berurutan.
*/

// const orderMakananSync = () => {
//   console.log("Pesan makanan ...");
//   console.log("Pesanan sedang di proses...");
//   console.log("Pesanan sedang dalam perjalanan...");
//   console.log("Orderan sampai");
// };

// const undangTemanSync = () => {
//   console.log("Sebar undangan...");
// };

// orderMakananSync();
// undangTemanSync();

/*
  Asynchronous
  Kode bisa dieksekusi secara bersamaan, dan sementara suatu bagian kode sedang diproses kode yang lain bisa dijalankan secara paralel,
*/

// console.log("\n\n\n");

// const orderMakanan = () => {
//   console.log("Pesan makanan ...");
//   console.log("Pesanan sedang di proses...");
//   setTimeout(() => {
//     console.log("Pesanan sedang dalam perjalanan...");
//     console.log("Pesanan sampai");
//   }, 1000);
// };

// const undangTeman = () => {
//   console.log("Sebar undangan...");
// };

// orderMakanan();
// undangTeman();
