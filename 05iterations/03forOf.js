const arr = [1, 3, 4, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "hello world!";

for (const greet of greetings) {
  if (greet.includes(" ")) {
    break;
  }
  //   console.log(greet);
}

const map = new Map();

map.set("IN", "India");
map.set("PK", "Pakistan");
map.set("CI", "China");
map.set("CI", "China");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, value);
}

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObj) {
//   console.log(key, value);
// }
