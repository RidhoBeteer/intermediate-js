let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const dataAltered = {
  ...data,
  name: "Ridho Ahmad Batubara",
  email: "emailnya_ridho@gmail.com",
  hobby: ["Reading", "Listening to Music"],
};

console.log(dataAltered);

const { street, city } = dataAltered.address;
console.log(street);
console.log(city);
