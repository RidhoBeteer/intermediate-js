const url = "https://jsonplaceholder.typicode.com/users";

const fetchData = async (str) => {
  try {
    const result = await fetch(url);
    const dataRaw = await result.json();
    const copyOfDataRaw = [...dataRaw];
    copyOfDataRaw.forEach((el) => console.log(el.name));
    // console.log(dataRaw);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
