// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true becuase js convert string 2 into o 
// console.log("02" > 1); // true

console.log(null > 0); //false
console.log(null == 0); //false  // here null is not beimg converted because in eqaulity check conversion is not happening 
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0); // false
// ===  means strict check ( strictly check value and datatypes also)
console.log("2" === 2); //false in this case it checks for both the datatypes as well as value