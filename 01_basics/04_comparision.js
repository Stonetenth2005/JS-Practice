console.log("2">1) // returns true, js converts "2" automatically to Number
console.log("02">1) // returns true

console.log(null>0); // false, since null is still not converted to 0
console.log(null==0); // false, still not converted to 0, but (==) comparator will now convert null to 0
console.log(null>=0); // true, since now null is converted to 0

console.log(undefined==0) // false
console.log(undefined>=0) // undefined is always false in such cases

// Strict Check
console.log("2"===2) // now returns false, since different data type