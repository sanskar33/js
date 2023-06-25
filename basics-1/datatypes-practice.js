//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
// declaration
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // symbol ka return type bhi symbol hota hai 
const anotherId = Symbol('123')

console.log(id === anotherId);  // false because symbol unique value return krta hai kisi ek cheez ko humesha unqiue banata hai 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array
let myObj = {
    name: "sanskar",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// return typeof variables in js 
// Primitive Datatypes
/* Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object */

// https://262.ecma-international.org/5.1/#sec-11.4.3




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive) , Heap(Non-Primitive)
/*
let myName = 'Sanskar'
let anothername = myName
anothername = 'ilu'

console.log( myName);
console.log(anothername);

let userOne  = {

    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sanskar33@gmail.com"

console.log(userOne);
console.log(userTwo);

*/