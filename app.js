console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let count = 1; count <= 100; count++) {
  if (count % 2) console.log(count);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let newCount = 1; newCount <= 100; newCount++) {
  if (!(newCount % 3) && newCount % 5) {
    console.log(`${newCount} goes FIZZ`);
  } else if (!(newCount % 5) && newCount % 3) {
    console.log(`${newCount} goes BUZZ`);
  } else if (!(newCount % 5) && !(newCount % 3)) {
    console.log(`${newCount} goes FIZZBUZZ!!!`);
  } else {
    console.log(`${newCount} is boring. Yawn.`);
  }
}

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let thirdCount = 1;
while (thirdCount <= 100) {
  if (thirdCount % 2) {
    console.log(thirdCount);
  }
  thirdCount++;
}

let fourthCount = 1;
do {
  if (!(fourthCount % 3) && fourthCount % 5) {
    console.log(`${fourthCount} goes FIZZ`);
  } else if (!(fourthCount % 5) && fourthCount % 3) {
    console.log(`${fourthCount} goes BUZZ`);
  } else if (!(fourthCount % 5) && !(fourthCount % 3)) {
    console.log(`${fourthCount} goes FIZZBUZZ!!!`);
  } else {
    console.log(`${fourthCount} is boring. Yawn.`);
  }
  fourthCount++;
} while (fourthCount <= 100);

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
console.log(value);
console.log(n);
console.log(Math.random());

for (let count = 0; count <= n; count++) {
  if (count == value) {
    console.log("Found Value!");
    break;
  }
  if (count == n && count < value) {
    console.log("Epic Fail! Better luck next time!");
  }
}

//Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log(fizzDivisor);
console.log(buzzDivisor);
console.log(num);
console.log(start);

for (let inc = start; inc <= num; inc++) {
  if (!(inc % fizzDivisor) && inc % buzzDivisor) {
    console.log(`${inc} goes FIZZ`);
  } else if (!(inc % buzzDivisor) && inc % fizzDivisor) {
    console.log(`${inc} goes BUZZ`);
  } else if (!(inc % buzzDivisor) && !(inc % fizzDivisor)) {
    console.log(`${inc} goes FIZZBUZZ!!!`);
  } else {
    console.log(`${inc} is boring. Yawn.`);
  }
}
