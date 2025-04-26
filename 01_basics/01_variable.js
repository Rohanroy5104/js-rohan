const accountId = 14453
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // Not allowed due to const

accountEmail = "rohan@gmail.com"
accountPassword = "2121216"
accountCity = "Bengaluru"
// console.log([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
