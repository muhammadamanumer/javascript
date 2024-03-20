let arr1 = [1, 2, 8, 3, 4];
let arr2 = [2, 6, 6, 7, 8];

let arr3 = [...arr1, ...arr2];
arr3.sort((a, b) => a - b);
arr3 = [...new Set(arr3)];
// console.log(arr3);

let newa = [2, 3, 3, 4, 5, 6, 7, 8, 9];
newa = [...new Set(newa)];
// console.log(newa);

for (let i = 0; i < 5; i++) {
  const element = i;
  //   console.log(element);
}

let myArray = ["hacker", "bondu", "giyan"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
let unsortedArray = [5, 3, 8, 1, 2];
let sortedArray = bubbleSort(unsortedArray);
// console.log(sortedArray); // Output: [1, 2, 3, 5, 8]

let arr = [12, 34, 5, 40, 3];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let swap = arr[i];
//       arr[i] = arr[j];
//       arr[j] = swap;
//     }
//   }
// }

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let swap = arr[i];
      arr[i] = arr[j];
      arr[j] = swap;
    }
  }
}

// console.log(arr);

// let hel = [1, 5, 5, 6, 6, 6];

// let [a, b, ...hello] = hel;

// console.log(b, hello);

// let { a, b } = { a: 3, b: 7 };
// console.log(a, b);

// let obj = { a: 1, b: 2 };

// let { a, b } = obj;

// console.log(a, b);

let arrayy = [1, 3, 5];

// let objj = { ...arrayy };
// console.log(objj);

// function sum(v1, v2, v3) {
//   return v1 + v2 + v3;
// }
// console.log(sum(...objj));
// console.log(sum(arrayy));

let objjj = {
  name: "aman",
  company: "youtube",
};

console.log({ ...objjj, hello: "ali", and: "me too" });
