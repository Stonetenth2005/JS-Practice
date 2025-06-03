let score = '33anc';

score = Number(score) // capital 'N'

console.log(typeof score); // returns number despite of score being NaN (exception case)

// Number(null) will be 0
// Number(undefined) will be undefined
// Number(true) will be 1

let isLoggedIn = 4

console.log(Boolean(isLoggedIn)); // true

// 1 => True
// 0 => False
// "" => False
// "Tushar" => True

let someNumber = 33
let someString = String(someNumber);

console.log(someNumber); // returns number 33
console.log(someString); // returns string "33"