const coding = ["js", "ruby", "java", "python"];

coding.forEach(function (val) {
  //   console.log(val);
});

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

let myCoding = [
  {
    name: "ali",
    age: 25,
  },
  {
    name: "aman",
    age: 22,
  },
  {
    name: "umer",
    age: 60,
  },
];

myCoding.forEach((item) => {
  console.log(item.age);
});
