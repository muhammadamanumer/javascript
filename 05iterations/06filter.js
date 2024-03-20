const coding = ["js", "ruby", "java", "python"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

const num = [1, 2, 3, 4, 5, 5, 6, 7, 8];
// const newNum = num.filter((num) => num > 4);

const newNum = [];

num.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});
// console.log(newNum);
const dummy = [
  {
    id: 1,
    name: "Chair",
    color: "Brown",
    material: "Wood",
    price: 49.99,
  },
  {
    id: 2,
    name: "Table",
    color: "Black",
    material: "Glass",
    price: 149.99,
  },
  {
    id: 3,
    name: "Lamp",
    color: "Silver",
    material: "Metal",
    price: 29.99,
  },
  {
    id: 4,
    name: "Sofa",
    color: "Gray",
    material: "Fabric",
    price: 299.99,
  },
];

const newDummy = dummy.filter((val) => val.price >= 200 && val.name == "Sof");
console.log(newDummy);
