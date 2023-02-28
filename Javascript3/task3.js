const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const months = data.map((el) => el);
  console.log(months);
  // or
  console.log("\n\n");
  data.map((el) => console.log(el));
};

getMonth(showMonth);
