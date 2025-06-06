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

//**************************** OPERATIONS ****************************

let value = 3
console.log(-value) // value returns -3

/*
Opertations -
2+2
2-2
2/2
2%2
2*2
2**2 = 2^2
*/

// String Operations
let str1 = 'Hello'
let str2 = ' Tushar'
console.log(str1+str2); // returns 'Hello Tushar'

console.log("1"+2+2) // returns 122
console.log(1+2+"2") // returns 32

console.log(+true) // returns 1
console.log(+"") // returns 0

let num1, num2, num3
num1 = num2 = num3 = 2+2 // assignment of same value to a variable

// pre & post increment -

//pre increment -

let count = 5;
let result = ++count;
console.log(result); // result gets the new value: 6.
console.log(count);  // count becomes 6 immediately.

//post increment -

let count1 = 5;
let result1 = count1++;
console.log(result1); // result1 gets the old value of count1: 5.
console.log(count1);  // Then count1 is incremented to 6.

/*
1. Evaluate count
→ This gives the current value, 5.

2. Assign to x
→ Now x is set to 5.

3. Increment count
→ After the assignment is done, JavaScript increases count to 6.
*/