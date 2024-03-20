const myNums = [1, 2, 3];

const newNums = myNums.reduce((ac, cv) => {
  return ac + cv;
}, 10);

// console.log(newNums);

const arr = [
  {
    item: "js",
    price: 999,
  },
  {
    item: "js",
    price: 999,
  },
  {
    item: "js",
    price: 999,
  },
  {
    item: "js",
    price: 999,
  },
];

const newArr = arr.reduce((acc, cv) => acc + cv.price, 0);

console.log(newArr);
