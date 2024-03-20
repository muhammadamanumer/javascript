let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2001, 1, 25);
// let myCreatedDate = new Date(2001, 1, 25, 4, 3, 55);
// let myCreatedDate = new Date("2001, 2, 25");
let myCreatedDate = new Date("2, 25, 2001");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`;

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
