const userEmail = []



if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have a user email");
}

/* 

// falsy values 

false , 0 , -0, BigInt 0n, "" , null , undefined, NaN  */ 


// truthy values

//  "0", 'false', " ", [] , {}, function(){}


/*
if(userEmail.length === 0){

    console.log("Array is Empty");
} */ 


// method to check weather object is empty or not 

const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is Empty");

}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15
console.log(val1); // 10




const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80") :  console.log("more than  80");;

