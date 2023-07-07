const user = {
    username: "Sanskar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// function chai(){
//     let username = "Sanskar"
//     console.log(this.username); // undefined ye this works in case of object only not in case of functions
// }

// chai()

// const chai = function () {
//     let username = "Sanskar"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Sanskar"
    console.log(this); // {}
}


 // chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return 
// const addTwo = (num1, num2) =>  num1 + num2


// const addTwo = (num1, num2) => ( num1 + num2 )


// yaha object return hu raha arrow function ke through
const addTwo = (num1, num2) => ({username: "sanskar"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()