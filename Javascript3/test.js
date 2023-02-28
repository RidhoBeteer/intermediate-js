const coffeeList = new Promise((resolve, reject) => {
  const list = fetch("./coffee.json");
  const isError = false;

  if (!isError) {
    resolve(list);
  } else {
    reject(new Error("errrr!"));
  }
});

coffeeList
  .then((response) => response.json())
  .then((data) => {
    const coffees = [...data];
    coffees.forEach((coffee) => {
      console.log(`${coffee.title} -- ${coffee.description}`);
      console.log(coffee.image);
    });
  })
  .catch((error) => console.log(error.message));
