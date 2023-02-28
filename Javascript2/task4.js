const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  const validation = dataTypeValidation(nilaiAwal, nilaiAkhir, dataArray);

  if (validation.isError) return validation.errorMessage;

  if (nilaiAwal > nilaiAkhir)
    return "Nilai akhir harus lebih besar dari nilai awal";

  if (dataArray.length < 5)
    return "Jumlah angka dalam dataArray harus lebih dari 5";

  dataArray = dataArray.filter((e) => e > nilaiAwal && e < nilaiAkhir);

  if (dataArray.length < 1) return "Nilai tidak ditemukan";

  dataArray.sort((a, b) => a - b);

  return dataArray;
};

const dataTypeValidation = (firstNum, secondNum, arr) => {
  if (typeof firstNum !== "number" || typeof secondNum !== "number") {
    return { isError: true, errorMessage: "Nilai awal dan akhir harus angka!" };
  }

  if (!Array.isArray(arr)) {
    return { isError: true, errorMessage: "Data harus berbentuk array" };
  }

  return { isError: false, errorMessage: null };
};

console.log(seleksiNilai(2, "z", [2, 1, 4, 6, 7]));
console.log(seleksiNilai(2, 10, "ini string"));
console.log(seleksiNilai(2, 8, [2, 25, 4, 7, 6, 13, 21])); // [ 4, 6, 7 ]
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])); // [ 8, 14, 17 ]
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(4, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
