const user = {
  userName: "aman",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("aman umer");
    // console.log(this.userName);
    console.log(this);
  },
};

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isloggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isloggedIn = isloggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("aman", 8, true);
const userTwo = new User("ali", 12, false);

console.log(userOne.constructor);
// console.log(userTwo);
