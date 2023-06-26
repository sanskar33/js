// array 


// collection of multiples into single variable 
// they are resizable
//  they can have mix datatypes (like string and no can be in a same array)
// 0-based indexing 
// arrays in js whenever u will do copy operation it makes shallow copies 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]); // 3

// Array methods

// myArr.push(6)  // 0,1,2,3,4,5,6
// myArr.push(7)  // 0,1,2,3,4,5,6,7
// myArr.pop()    // 0,1,2,3,4,5,6

// myArr.unshift(9) // 9,0,1,2,3,4,5 start maine add kr deta hai 
// myArr.shift()   //  0,1,2,3,4,5  start maine se front element ko remove kr deta hai 



// quetionaire methods which gives o/p as false 

// console.log(myArr.includes(9));  // false


// console.log(myArr.indexOf(3));  // 3 if that element don't exist in the array then it will return -1

// const newArr = myArr.join() // it converts into string 

// console.log(myArr); // [0,1,2,3,4,5]
// console.log( newArr); // 0,1,2,3,4,5 
// console.log(typeof newArr) // String 

// slice, splice

console.log("A ", myArr);  // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3) // element at index 1,2 which is 1,2

console.log(myn1); // [1,2]
console.log("B ", myArr); // B [0,1,2,3,4,5]  //  here original array doesn't gets modified while returning a piece of array in case of slice


/* splice splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
if u don't mention item1 it will simply return an array of deleted elements 
otherwise if u mention item1 it will insert that element in the position mentioned in start argument 
*/ 
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // C  [ 0, 4, 5 ] // here original array gets modified while returning a piece of array in case of splice 

console.log(myn2);   // [ 1, 2, 3 ]