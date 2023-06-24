const score = 100
// console.log(score) //100


// this is also a way of explicit conversion which will convert in into Number type advanatge is ismaine kuch properties milti hai hume jaise humein string maine milti hai bs no of properties thodi kam hu jaati hai 
const balance = new Number(100)
// console.log(balance); //[Number: 100] new object maine define kr raha jo Number type ka hai
// console.log(balance.toString()); //100
// console.log(typeof balance); //object ye ab string ban jayeyga so string ke methods use kr sakte hai ab 
//console.log(balance.toString().length); //3 because 3 characters are there 
// console.log(balance.toFixed(2)); //100.00  

const anotherno = 23.8966;
// console.log(anotherno.toPrecision(3)); // 23.9


const otherno = 123.8966;
// console.log(otherno.toPrecision(3)); // 124

const thirdno = 1123.8966;
// console.log(thirdno.toPrecision(3));  // 1.12e+3

const fourthno = 1000000
// console.log(fourthno.toLocaleString()); //  1,000,000

const fifthno = 1000000
// console.log(fifthno.toLocaleString('en-IN')); //  10,00,000


// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++
 
// console.log(Math); // Object [Math] here it comes with many properties like pi, sin, abs , cosine etc 
 
// console.log(Math.abs(-4));  // here -ve values are changed into +ve , there is no vice versa 


// console.log(Math.round(4.3));  // 4 round off krta hai 

// console.log(Math.round(4.7));  // 5 

// console.log(Math.ceil(4.3));  // 5 ceil means top waala no choose karega 

// console.log(Math.floor(4.9));  // 4 neechi wali value lega 

// pow , sqrt ye sab functions or methods aate hai Math library ke saath 
// console.log(Math.min(4,3,6,8)); // 3

// console.log(Math.max(4,3,6,8)); // 8


// console.log(Math.random()); // iske case maine jb bhi run karuge har baar alag alag o/p aayeyga pr wo value 0 se 1 ke beech maine aayeygi 

// console.log((Math.random()*10)) // aise we will shift decimal by one in every value but there will be limitation if value is 0.041 then minimum value by this formula can come 0. something 
// console.log((Math.random()*10)+1); //to remove above formula limitation we will apply this  minimum value by doing this math will come  1 

// console.log(Math.floor(Math.random()*10)+1);  // is formula ke through decimal no ki jagah wo  neeche waali ke value direct dega 
//  above case maine value 1 se 9 ke beech maine dega 
const min = 1
const max = 6

 console.log(Math.floor(Math.random() * (max-min+1))+min)  // generalised formula jis cheez ke through hum ek range maine no pr sakte hai 