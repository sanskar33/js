// function defination 

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("K");
    console.log("A");
    console.log("R");
}

 // sayMyName()

 // function call krte time jo value bhejte hai use argument bolte hai 
 // aur function defination ke time paranthesis maine jo likhte hai that are parameters 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sanskar"))
// console.log(loginUserMessage("Sanskar")) 
// console.log(loginUserMessage()) sam just logged in


/// ... isiko rest operator bola jaata hai isi ko spread operator bola jaata hai 
// usecase pr depend krta hai kb rest bolenge aur kab spread operator bolenge 

// yaha pr as rest operator use hu raha hai
/*  
function calculateCartPrice(...num1){
    return  num1 // [200,400,500,2000]
} */ 
function calculateCartPrice(val1, val2, ...num1){
    return num1 // [500,2000]  // val1 = 200 , val2 = 400 rest values are gone into num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))



// how to pass any object in a function
const user = {
    username: "sanskar",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// one more way of passing of object into function 
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// passing array into function
const myNewArray = [200, 400, 100, 600]

function SecondValue(getArray){
    return getArray[1]
}

console.log(SecondValue(myNewArray)); // 400
console.log(SecondValue([200, 400, 500, 1000])); // 400