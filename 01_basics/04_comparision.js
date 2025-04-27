console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
console.log("2"===2);
console.log("2"==2);

/*
== (double equals) → loose equality

It compares values but ignores types.

It does type coercion automatically if needed.

'5' == 5   // true (string '5' is converted to number 5)
0 == false // true (false is converted to 0)

=== (triple equals) → strict equality

It compares both value and type.

No type conversion happens.

'5' === 5   // false (different types: string vs number)
0 === false // false (number vs boolean)
5 === 5     // true (both value and type match)

*/