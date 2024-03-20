const user = {
  username: "aman",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
  },
};

// user.welcomeMessage();
// user.username = "ali";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "aman";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "aman";
//   console.log(this.username);
// };

// chai();

const chai = () => {
  let username = "aman";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ name: "aman" });

console.log(addTwo(2, 3));
