// Dates

let myDate = new Date() // date ka ek object or instance 
 // console.log(myDate)   // 2023-06-24T18:27:57.438Z
// console.log(myDate.toString());  // Sat Jun 24 2023 18:28:26 GMT+0000 (Coordinated Universal Time)
 // console.log(myDate.toDateString()); // Sat Jun 24 2023 
 // console.log(myDate.toISOString());  // 2023-06-24T18:31:26.401Z
 // console.log(myDate.toJSON());  // 2023-06-24T18:32:21.592Z
 // console.log(myDate.toLocaleDateString()); // 6/24/2023
//  console.log(myDate.toLocaleString());  // 6/24/2023, 6:34:23 PM
// console.log(typeof myDate);  // Object


//  let myCreatedDate = new Date()
// console.log(myCreatedDate);  // 2023-06-24T18:38:03.407Z


// one  way of declaring specific date 
//  let myCreatedDate = new Date(2023, 0, 23) // here first month start with 0 
 // console.log(myCreatedDate);  // 2023-01-23T00:00:00.000Z
 // console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023



 // another way of declaring date with time 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); //    1/23/2023, 5:03:00 AM
//  let myCreatedDate = new Date("2023-01-14") // here 1st month start with 01 
// console.log(myCreatedDate.toLocaleString());  // 1/14/2023, 12:00:00 AM
 let myCreatedDate = new Date("01-14-2023")
 // console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM
 

let myTimeStamp = Date.now()

 // console.log(myTimeStamp);  // 1687632431075  1st jan 1970 se abtk ka miliseconds value 
// console.log(myCreatedDate.getTime());  // 1673654400000 
// console.log(Date.now());  // 1687632772722
// console.log(Math.floor(Date.now()/1000));  // here it is divided  into seconds

 let newDate = new Date()
// console.log(newDate);
/* console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); 

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
*/ 