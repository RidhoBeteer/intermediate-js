const checkLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    const users = [
      {
        username: "ridho",
        password: "ridho123",
      },
      {
        username: "admin",
        password: "admin",
      },
    ];

    const existingUser = users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (existingUser) {
      resolve("Logged In");
    } else {
      reject(new Error("Wrong Username or Password, Try Again!"));
    }
  });
};

const loggingIn = async (user, pass) => {
  try {
    const response = await checkLogin(user, pass);
    // const response = await checkLogin(user, pass).then((result) => result);
    return response;
  } catch (error) {
    return error.message;
  }
};

const myUsername = "ridho";
const myPassword = "ridho123";

// console.log(loggingIn(myUsername, myPassword));

checkLogin(myUsername, myPassword)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
