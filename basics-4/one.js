// if
const isUserloggedIn = true 
/* 

const temprature = 42
if(temprature===42){

    console.log("less than 50");

} else{
    console.log("temprature is greater than 50")
}
console.log("executed");  */
/*
2<2 , 3!=2
<, >, <=, >=, == , != , === ( This checks value and datatype both), !==
*/



/*
const score = 200

if(score>100)
{
    let power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // this will throw error becuase let have block scope here we are trying to access it outside the scope */

const balance = 1000

/*
// implicit scope
if(balance>500) console.log("test"),
console.log("test2");
*/

/*
if(balance<500){
  console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}
*/



const userLoggedIn = true

const DebitCard = true

const loggedInFromGoogle = false


const loggedInFromEmail = true
if(userLoggedIn && DebitCard && 2==2) {
       console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail )
{
    console.log("User logged in");
}
