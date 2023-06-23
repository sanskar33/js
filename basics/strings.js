const name = "Sanskar"
const repoCount = 50


// console.log(name +  repoCount + " Value");  // this  method is not reiable or advised 


// instead of this use below method it is called string interpolation
console.log(`My name is ${name} and my repoCount is  ${repoCount}`);


// one more trick of defining string
// behind the scene object invoke hu raha hai with new keyword object ban raha and constructor ke andar u are defining string name 
const gameName =  new String('Sanskar'); // String {'Sanskar'} in this 0:"S" 1:"a" , 2:"n" ......7:"r" , length:7 ,  Prototype :  String  ,  and many more methods we will get when we define this way which we can use to our advantage 
console.log(gameName[0]);  // S
console.log(gameName.__proto__); //  {} object mila hai empty 
console.log(gameName.length);  // 7 
console.log(gameName.toUpperCase()); // SANSKAR
console.log(gameName); //  String {'Sanskar'}  Original string doesn't chnage because string is primitive data type and it is stored in stack memory which work as call by value method 
console.log(gameName.charAt(4));  // k  on which index which character is there here 0-based indexing is there so k is o/p 
console.log(gameName.indexOf('r')); // 6

const Name =  new String('Sanska-r'); 
const newString = Name.substring(0,4);  // Sans is o/p starting index of a string and ending index of a string but the last index means character is excluded here 
console.log(newString);

// substr aur slice maine ye difference hai in slice u can write -ve values because -ve indexing reverse se hoti hai usmaine and start index in reverese is -1 

const anotherString = Name.slice(-8,4);  // iske case maine -ve values de sakte hu jis case maine indexing reverse se start hogi original string ki 
console.log(anotherString);


const string1 = " Sansk "
console.log(string1); //  Sansk    here with spaces it will be printed 
console.log(string1.trim());//Sansk here spaces will be eliminated and printed 



const url = "https://sanskar.com/sanskar%33bhatt"
console.log(url.replace('%33','-')); // https://sanskar.com/sanskar-bhatt   in replace method 1st write in quotes what u want to replace then in second quote write with what u want to replace 

console.log(url.includes('sanskar'))


const string3 =  new String('Sanskar-sa-tp');

console.log(string3.split('-')); // [ 'Sanskar', 'sa', 'tp' ] here separator and limit is argument our separator is '-' so three arrays are obtained as o/p 