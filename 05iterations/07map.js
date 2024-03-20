const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => num * 2);

const newNums = myNums
  .map((val) => val * 10)
  .map((val) => val + 1)
  .filter((val) => val > 50);

// myNums.forEach((num) => {
//   console.log(num * 2);
// });

console.log(newNums);
