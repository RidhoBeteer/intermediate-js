const otherUrl = "https://jsonplaceholder.typicode.com/users/";

const fetching = fetch(otherUrl);

// with then catch
const thenCatch = () => {
  fetching
    .then((result) => {
      const hasil = result.json();
      return hasil;
    })
    .then((hasil) => console.log(hasil))
    .catch((error) => {
      console.log(error);
    });
};

// thenCatch();

// with try-catch
const tryCatch = async () => {
  try {
    const result = await fetching;
    const data = result.json();
    data.then((list) => {
      console.log(list);
    });
  } catch (error) {
    console.log(error.message);
  }
};

tryCatch();
