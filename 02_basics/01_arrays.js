// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

/*
👉 slice() in JavaScript
Copies part of an array (or string) without changing the original array.

Returns a new array.

Think: ✂️ "Cut and give me a copy, but don’t touch the original."

let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4); // from index 1 to index 3 (not including 4)
console.log(sliced);  // [2, 3, 4]
console.log(arr);     // [1, 2, 3, 4, 5] (original unchanged)

👉 splice() in JavaScript
Changes the original array (⚡ modifies it).

Can remove, replace, or add elements.

Think: 🛠️ "Cut, add, delete, and modify the original."

let arr = [1, 2, 3, 4, 5];
let spliced = arr.splice(1, 3); // start at index 1, remove 3 elements
console.log(spliced);  // [2, 3, 4]
console.log(arr);      // [1, 5] (original array changed!)

*/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);