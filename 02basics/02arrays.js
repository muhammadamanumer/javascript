const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][0]);

// const allHeroes = marvel.concat(dc);
// console.log(allHeroes);

// const allHeroes = [...marvel, ...dc];
// console.log(allHeroes);

const anotherArray = [2, 3, 3, [3, 4, 4], 3, [3, [3, 3]], 3];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("aman"));
console.log(Array.from("aman"));
console.log(Array.from({ name: "aman" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
