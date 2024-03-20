const email = [];

if (email) {
  //   console.log("got user's email");
} else {
  //   console.log("email not found");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', ' ', [], {}, function(){}

// if (email.length === 0) {
//   console.log("Array is emty");
// }

const emtyObj = {};

if (Object.keys(emtyObj).length === 0) {
  //   console.log("Obj is emty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);

// terniary operator

// condition ? true: false

const price = 99;

price == 9 ? console.log("true") : console.log("false");
