const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

/*
👉 push() in JavaScript
Adds elements to the end of an array.

Modifies (changes) the original array.

Returns the new length of the array.

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

You can also push multiple elements:
arr.push(5, 6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

👉 concat() in JavaScript
Combines two (or more) arrays (or values).

Does NOT change the original array.

Returns a new array.

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5]
console.log(arr1);     // [1, 2, 3] (original array is unchanged)

You can also concat values directly:
let result = arr1.concat(6, 7);
console.log(result); // [1, 2, 3, 6, 7]

*/

/*
👉 What is spread in JavaScript?
Spread (...) is a special syntax to expand (spread out) elements of an array, object, or string into individual elements.

It unpacks things.

👉 How spread looks:
let arr = [1, 2, 3];
console.log(...arr); 
// Output: 1 2 3
Instead of printing [1,2,3], it spreads and prints 1 2 3 individually!

👉 Common Uses of Spread:
1. Copying arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1];  // creates a shallow copy
console.log(arr2); // [1, 2, 3]

2. Merging arrays
let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

3. Passing array elements as function arguments
function add(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];
console.log(add(...numbers)); // 6

4. Copying/merging objects
let obj1 = {name: "Rohan"};
let obj2 = {age: 25};
let combined = {...obj1, ...obj2};
console.log(combined); // {name: "Rohan", age: 25}

*/
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));