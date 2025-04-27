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
