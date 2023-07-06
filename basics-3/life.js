// Immediately Invoked Function Expression

// to free from global scope pollution problem we write a function which gets immediately invoked 

// named IIFE
(function one() {
    console.log(`DB CONNECTED`);
})();

// syntax for IIFE
// ()() // 1st parenthisis for function defination 2nd for calling that func..


// when we write two iife after 1st iife write semi-colon 


// un-named IIFE

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Sam')