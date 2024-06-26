// Primitive

// 7 types: string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 12345665434345676n // BigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "Naagraj", "Doga"]

let obj = {
    name: "Rahul",
    age: "23"
}

const myFunction = function() {
    console.log("Hello function")
}

// console.log(typeof bigNumber); // bigint
// console.log(typeof heros); // object
// console.log(typeof obj); // object
// console.log(typeof myFunction); // function
// console.log(typeof anotherId); // Symbol


// Memories...

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Rahul"

let secName = myName
secName = "test2"

console.log(secName);
console.log(myName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = 'user2@gmail.com';

console.log(user2.email); // user2@gmail.com
console.log(user1.email); // user2@gmail.com