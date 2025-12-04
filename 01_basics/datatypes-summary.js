// Primitive 
// 7 types call by value : String, Number, Boolean, null , undefined , Symbol, BigInt
// JS is a dynamically typed language. This means that variable types are determined at runtime, 
// and you dont need to explicitly declare the type of a variable before using it.
// Languages like Java, C#, C , typescript are statically typed , and they require you to specify explicitly when declaring them.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id) //Symbol(123)
console.log(anotherId) //Symbol(123)
console.log(id == anotherId) // false

const bigNumber = 432324423523453243n;


// Non Primitive / Reference 
//Array, Objects, Functions

const heroes = ["spiderman", "Iron Man", "Batman"];

let myObj = {
    name : "yogo",
    age : 22,
}

const myFun = function() {
    console.log("Hello world");
}

//console.log(typeof myFun) // function
//console.log(typeof myObj) // object
//console.log(typeof id) // symbol



/************************************** Memory ******************************************** */

// Stack (Primitive), Heap (Non-Primitive)

let myYTname = "thegoyalyogesh";
let anotherName = myYTname;
anotherName = "chaiAurCode"

console.log(myYTname);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi : "ygoyal@ybl",
}

let userTwo = userOne

userTwo.email = "yogo@google.com";

console.log(userOne.email );
console.log(userTwo.email );
