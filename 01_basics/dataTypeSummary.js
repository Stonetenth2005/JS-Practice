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