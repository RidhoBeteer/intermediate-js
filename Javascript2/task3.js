const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (subStr, limit, callback) => {
  const selectedName = [];
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < name[i].length; j++) {
      if (j !== name[i].length - 1) {
        const strInCheck = (name[i][j] + name[i][j + 1]).toLowerCase();
        if (strInCheck === subStr.toLowerCase()) {
          selectedName.push(name[i]);
        }
      }
    }
  }
  // const testArr = callback(limit, selectedName);
  // return testArr;

  callback(limit, selectedName);
  return selectedName;
};

const limitOutput = (limit, arr) => {
  if (arr.length > limit) {
    let lengDiff = arr.length - limit;
    for (let i = 0; i < lengDiff; i++) {
      arr.pop();
    }
  }
  return arr;
};

console.log(searchName("an", 3, limitOutput));
// console.log(searchName("li", 3, limitOutput));
