for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  //   console.log(element);
}

// console.log(element);

for (let i = 1; i <= 5; i++) {
  //   console.log(`Table of ${i}`);
  for (let j = 1; j <= 5; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let hero = ["aman", "ali", "umer"];
// console.log(hero.length);

for (let i = 0; i < hero.length; i++) {
  const element = hero[i];
  //   console.log(element);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log(`detected ${i}`);
    break;
  }
  //   console.log(i);
}
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`detected ${i}`);
    continue;
  }
  console.log(i);
}
