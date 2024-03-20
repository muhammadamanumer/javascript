// Singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "aman",
  "full name": "muhammad aman",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "aman@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ali@google.com";
// Object.freeze(JsUser);
JsUser.email = "aman@google.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js user ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
