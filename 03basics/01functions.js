function sayMyName() {
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("N");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);

// }
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(5, 9);
// console.log(result);

function loginUserMessage(username = "ali") {
  if (!username) {
    console.log("please log in");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("aman"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(1, 2, 3, 4, 5));

const user = {
  username: "aman",
  price: 199,
};

function handleObject(object) {
  console.log(`Username is ${object.username} and price is ${object.price}`);
}

// handleObject(user);
handleObject({ username: "ali", price: 299 });

const myNewArray = [100, 200, 300];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 30]));
