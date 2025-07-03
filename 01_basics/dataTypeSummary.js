// JS is a dynamic language, a dynamic language determines types at runtime, not at compile time.

// in JS, we don’t declare variable types. A variable can change its type while the program runs.

// In a static language, variable types are fixed when declared, and type errors are caught before running the program.


//  Primitive data types : Points to the actual value, not the address. They are mutable

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // value indefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false, since each symbol is unique, even with the same decription.

const bigNumber = 3456543576654356754n // datatype bigint



// Reference (Non primitive): Stored by referance, also mutable. Datatype of all non-primitive types is function

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let heros1 = heros // points to the same address

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){  // datatype of function returns Object, more specifically object function
    console.log("Hello world");
}

// ****************************** Stack & Heap ******************************

// all primitive types use stack memory (it gives a copy of declared variable)

// all non-primitive types use heap memory (it gives a referance of the declared variable, not the copy)

let name = "Tushar"
let newName = name;

newName = "Srivastava" // it doesnt change the value of name, since its a copy of the original variable, not the original one
console.log(name);
console.log(newName);

let obj1 = {
    email: "1@gmail.com",
    name: "Tushar"
}

let obj2 = obj1;
obj2.email = "2@gmail.com";

console.log(obj2.email) // 2@gmail.com
console.log(obj1.email) // also changes this email, since its the original address