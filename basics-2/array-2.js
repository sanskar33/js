const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros) // it modify the original array doesn't return any new array 

 // console.log(marvel_heros);   // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  here total 4 elements are there 
  // console.log(marvel_heros[3])  // [ 'superman', 'flash', 'batman' ]
 // console.log(marvel_heros[3][1]);  // flash 

// const allHeros = marvel_heros.concat(dc_heros) // it returns a new array after concating 
// console.log(allHeros);   // [ 'thor', 'Ironman', 'spiderman',  'superman', 'flash', 'batman' ] 

const all_new_heros = [...marvel_heros, ...dc_heros] // here spread operators are used to merge and in this case array we don't get as o/p but individual items get 

 // console.log(all_new_heros);   // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)

// infinity ki jagah u mention depth , kitne depth tk flat krna hai 
// returns a new array with all sub-array elements concatenated into it recursively upto a specified deptht 
//console.log(real_another_array);



console.log(Array.isArray("Sanskar"))  // false because its string it ask weather the thing inside brackets is array or not 
console.log(Array.from("Sanskar"))  //  [ 'S','a','n','s','a','k','r' ] it converts string into array 
console.log(Array.from({name: "hitesh"})) // [] because ye convert nhi kr paa raha array maine we have to mention ki hum keys ka array banaye ya values ka arraya banaye 

let score1 = 100
let score2 = 200
let score3 = 300




console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]  returns a new array from set of elements 