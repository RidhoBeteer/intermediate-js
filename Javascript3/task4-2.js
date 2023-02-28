import coffeeData from "./coffee.json" assert { type: "json" };
// console.log(coffeeData);

const demo = document.getElementById("demo");

const coffeeList = () => {
  return new Promise((resolve, reject) => {
    const list = coffeeData;
    const isError = false;

    if (!isError) {
      resolve(list);
    } else {
      reject(new Error("errrr!"));
    }
  });
};

const getCoffeeList = async () => {
  try {
    const response = await coffeeList();
    response.forEach((coffee) => printList(coffee));
  } catch (error) {
    console.log(error.message);
  }
};

const printList = async (item) => {
  const card = document.createElement("div");
  card.className = "card";

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const cardTitle = document.createElement("p");
  cardTitle.className = "card-title";
  cardTitle.innerText = item.title;

  const cardDesc = document.createElement("p");
  cardDesc.className = "card-desc";
  cardDesc.innerText = item.description;

  cardContent.append(cardTitle, cardDesc);
  card.append(cardContent);
  demo.append(card);
};

getCoffeeList();
