/*
Primitive-
7 types: string, number, boolean, null, undefined, symbol, bigInt

Reference(Non primitive)-
Array, Object, Functions

JavaScript is dynamically typed. 
You don't need to declare types of variables when you create them.

The type is determined at runtime, not at compile time.

A variable’s type can change while the program is running.
let x = 5;        // x is a Number
x = "hello";      // now x is a String
x = true;         // now x is a Boolean
You can see x changes its type dynamically — no error.

*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*
 What is typeof?
typeof is an operator used to find the type of a value or variable.

It returns a string indicating the type.

typeof variableName

typeof 5;             // "number"
typeof "hello";       // "string"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof {name: "Rohan"}; // "object"
typeof [1,2,3];       // "object" (Arrays are technically objects in JS)
typeof function() {}; // "function"
typeof null;          // "object" (⚡ this is a historical bug in JS)

You can combine typeof with conditionals:
if (typeof x === "string") {
    console.log("x is a string!");
}
*/

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchaudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);