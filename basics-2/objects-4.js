
// Here declaring object by use
//  of literals or by  constructor 
// 


// const tinderUser = new Object()
//console.log(tinderUser) // {}  empty object // ye singelton object hoga jo use of constructor se bana hai

const tinderUser = {}
console.log() // {}  empty object // ye ek non-singelton object hai use of literals se bana hai 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 console.log(tinderUser);



 // Nested Objects Declaring 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sanskar",
            lastname: "Bhatt"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // Sanskar


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // same array wali problem hogi jb hum ek array ko dusre array maine push kr rahe they 
const obj3 = Object.assign({},obj1,obj2) // advised to use empty object as first argument 
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // here empty empty object act as target and other arguments act as a a source 

//const obj3 = {...obj1, ...obj2}  
// console.log(obj3);  // all object will be merged 



// Database se array of objects aayenge like below 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

 // console.log(Object.keys(tinderUser)); //  'id', 'name', 'isLoggedIn' ]  saare keys ko ek array maine daalkar return kiya hai 
 // console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]  values ka array is returned 
 // console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]  yaha har key values ko ek array banakar return kiya gya hai 


 // it checks weather isLoggedin value hai ya nhi object maine it returns boolean  
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true 




// destructuring of object 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sanskar"
}

// console.log(course.courseInstructor) // Sanskar

 

// destructuring of courseInstructor value is given below 
// const {courseInstructor} = course // right side maine jis object se le rahe value wo mention krte hai 

 // console.log(courseInstructor); // sanskar 
 



 // We can even customize aur change the name of the key in the object which we are destructuring 


const {courseInstructor: instructor} = course
 console.log(instructor);  // Sanskar


 // below given is a JSON 
// {
//     "name": "Sanskar",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// sometimes we get response from api as a array of objects given below 
[
    {},
    {},
    {}
]
