const isUserloggedIn = true;
const temperature = 41;

// if (temperature === 40) {
//   console.log("temperatur is less than 50");
// } else {
//   console.log("temperatur is greater than 50");
// }

// console.log("executed");

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`power is ${power}`);
// }

// console.log(`power is ${power}`);

// const balance = 1000;

// if (balance < 500) {
//   console.log("hello");
// } else if (balance < 600) {
//   console.log("hello");
// } else if (balance < 700) {
//   console.log("hello");
// } else {
//   console.log("hello from else");
// }

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromEmail = true;
const LoggedInFromGoogle = false;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Ok ki report");
}

if (LoggedInFromEmail || LoggedInFromGoogle) {
  console.log("Logged in");
}
