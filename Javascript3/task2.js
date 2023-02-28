const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];

      let cek = dataDay.find((item) => {
        return item === day;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 1500);
  });
};

let hari = "sabtu";

// then-catch
cekHariKerja(hari.toLocaleLowerCase())
  .then((result) => {
    console.log(`then-catch output (fulfilled): ${result}`);
  })
  .catch((error) => {
    console.log(`then-catch output (rejected): ${error.message}`);
  });

// try-catch
const cekWithTryCatch = async (str) => {
  try {
    const result = await cekHariKerja(str);
    console.log(`try-catch output (fulfilled): ${result}`);
  } catch (error) {
    console.log(`try-catch output (rejected): ${error.message}`);
  }
};

cekWithTryCatch(hari.toLocaleLowerCase());

// Penjelasan
// untuk memakai then/catch, kita tinggal memanggil promisenya, pada kasus ini adalah 'cekHariKerja' kemudian chaining dengan then berisi callback yang menerima parameter response dari promise yang dipanggil.

//untuk penggunaan dengan try/catch, kita harus membuat asynchronous function terlebih dahulu, kemudian di dalam function tersebut kita buat try and catch untuk handling promise. Di dalam blok try, tampung response dari promise ke variabel hasil dengan menggunakan await. Blok catch sendiri menerima parameter 'err' yang akan berisi pesan error.
