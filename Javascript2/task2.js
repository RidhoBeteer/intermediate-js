const myArr = [34, 29, 18, 31, 17];

/* ===============
1. Array.find()
===============
def:     Mengembalikan elemen pertama yang ditemukan sesuai kondisi yang ditetapkan pada callback
syntax:  Array.find(cb(el, idx, arr), thisArg?)
sifat: non-mutasi
*/

// console.log(myArr);
// const resultFind = myArr.find((el) => el <= 18);
// console.log(myArr);
// console.log(resultFind);

/* ===============
2. Array.findLast()
===============
def:     Mirip serperti .find() akan mengembalikan elemen pertama yang ditemukan yang sesuai kondisi pada callback, 
         namun perulangannya dilakukan secara reverse.
syntax:  Array.findLast(cb(el, idx, arr), thisArg?)
sifat: non-mutasi
*/

// console.log(myArr);
// const resultFindLast = myArr.findLast((el) => el <= 18);
// console.log(myArr);
// console.log(resultFindLast);

/* ===============
3. Array.findIndex()
===============
def:     Mengembalikan index dari elemen pertama yang ditemukan sesuai kondisi yang ditetapkan pada callback
syntax:  Array.findIndex(cb(el, idx, arr), thisArg?)
sifat: non-mutasi
*/
// console.log(myArr);
// const resultFindIndex = myArr.findIndex((el) => el < 30);
// console.log(myArr);
// console.log(resultFindIndex);

/* ===============
4. Array.forEach()
===============
def:     Mengeksekusi setiap elemen pada array yang diberikan
syntax:  Array.forEach(cb(el, idx, arr), thisArg?)
sifat: non-mutasi
*/
// console.log(myArr);
// const resultForEach = myArr.forEach((el) => {
//   return el;
//   // console.log(el);
// });
// console.log(myArr);
// console.log(resultForEach);

/* ===============
5. Array.every()
===============
def:     Mengecek apakah semua elemen pada array memenuhi kondisi yang diberikan.
syntax:  Array.every(cb(el, idx, arr), thisArg?)
sifat: non-mutasi
tipe data: true/false (boolean)
*/
// console.log(myArr);
// const resultEvery = myArr.every((el) => el > 15);
// console.log(myArr);
// console.log(resultEvery);

/* ===============
6. Array.some()
===============
def:     Mengecek apakah ada salah satu elemen pada array yang memenuhi kondisi yang diberikan.
syntax:  Array.some(cb(el, idx, arr), thisArg?)
sifat: non-mutasi
tipe data: true/false (boolean)
*/
// console.log(myArr);
// const resultSome = myArr.some((el) => el < 15);
// console.log(myArr);
// console.log(resultSome);

/* ===============
7. Array.filter()
===============
def:     Menyaring elemen pada array, dan mengembalikan array berisi elemen yang memenuhi kondisi yang diberikan
syntax:  Array.filter(cb(el, idx, arr), thisArg?)
sifat: non-mutasi
tipe data: true/false (boolean)
*/
// const myArr1 = [34, 29, 18, 31, 17];
// console.log(myArr1);
// const resultFilter = myArr1.filter((el) => el > 30);
// console.log(myArr1);
// console.log(resultFilter);

/* ===============
8. Array.includes()
===============
def:     Mengecek apakah suatu array mengandung value tertentu berdasarkan value yang dikirim sebagai argument
syntax:  Array.includes(searchElement, fromIndex?)
sifat: non-mutasi
tipe data: true/false (boolean)
*/
// const myArr1 = [34, 29, 18, 31, 17];
// console.log(myArr1);
// const resultIncludes = myArr1.includes(29, 0);
// console.log(myArr1);
// console.log(resultIncludes);

/* ===============
9. Array.unshift()
===============
def:     Menambahkan satu atau lebih elemen ke bagian terdepan suatu array
syntax:  Array.unshift(element0, ..., elementN)
sifat: mutasi
*/
// const unshiftArr = ["JavaScript", "HTML", "CSS"];
// console.log(unshiftArr);
// const resultUnshift = unshiftArr.unshift("PHP", "Pascal");
// console.log(unshiftArr);
// console.log(resultUnshift);

/* ===============
10. Array.shift()
===============
def:     Menghapus elemen pertama pada suatu array
syntax:  Array.shift()
sifat: mutasi
*/
// const shiftArr = ["JavaScript", "HTML", "CSS"];
// console.log(shiftArr);
// const resultShift = shiftArr.shift();
// console.log(shiftArr);
// console.log(resultShift);
