// ways of declaring objects is by literals or by constructor 
// when u make object by constructor it means apne tareeke ka ek hi object ye aisa banata hai 

// when u make by object by lietrals no singelton se made only when u make objects by constructor way singleton is made

// Object.create it is syntax for making by object by constructor way in this case singleton is made 
// Object literals 

// by default name ko system as a string treat krta hai like "name" ;"Sanskar"


const mySym = Symbol("Key1")
 const User = {

    name:  "Sanskar",
    "full name" : "Sanskar  Bhatt" ,// now one can't access this object value by using . operator because it is treated as string 
    age:  23,
    Location : "Bhopal",
    [mySym] : "mykey1", // way of taking symbol as a key 
    email : "sanskarbhatt33@gmail.com",
    isLoggedIn: false ,
    LastLoginDays: ["Monday","Saturday"]
 }

 console.log(User.email) // sanskarbhatt33@gmail.com one way of accessing elemnts of objects 
 console.log(User["email"]) // sanskarbhatt33@gmail.com nother way of accessing elements of objects 
 console.log(User["full name"]) // Sanskar Bhatt
 console.log(User[mySym]);  // myKey1 way of accesing symbol as a key and printing it's value 


 // how to change values of objects 
 User.email = "sanskarbhatt1927@gmailcom";

 // console.log(User); 
 /* name: 'Sanskar',
 'full name': 'Sanskar  Bhatt',
 age: 23,
 Location: 'Bhopal',
 email: 'sanskarbhatt1927@gmailcom',
 isLoggedIn: false,
 LastLoginDays: [ 'Monday', 'Saturday' ],
 [Symbol(Key1)]: 'mykey1' */ 

 // Object.freeze(User)

 User.email = "sanskar21@gmail.com"
 // console.log(User);
 /* name: 'Sanskar',
 'full name': 'Sanskar  Bhatt',
 age: 23,
 Location: 'Bhopal',
 email: 'sanskarbhatt1927@gmailcom',
 isLoggedIn: false,
 LastLoginDays: [ 'Monday', 'Saturday' ],
 [Symbol(Key1)]: 'mykey1' */ 

 // email doesn't change because we freeze the object /* 



// how to add functions in a objects 

User.greeting = function() {
   console.log("Hello");
}

console.log(User.greeting); // [Function (anonymous)]

// console.log(User.greeting());  // Hello 
// Udefined 


User.greetingtwo = function() {
   console.log(`Hello js user, ${this.name}`);
}


console.log(User.greeting());  // Hello next line maine // undefined 
console.log(User.greetingtwo()); // Hello js User, Sanskar next line maine // Undefined 