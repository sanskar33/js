//var c = 300
// when curly braces comes with if-else or function then it is called a scope 
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Sanskar"

    function two(){
        const website = "expense-tracker"
        console.log(username);
    }
    // console.log(website);

     two() // Sanskar 

     // when inner function is able to use the outside function variables then its closure
    // when child function is able to use parent function variable it is called closures
}

// one()

if (true) {
    const username = "Sanskar"
    if (username === "Sanskar") {
        const website = " expense-tracker"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6

function addone(num){
    return num + 1
}



addTwo(5)

// ye expression hai , function declare krke humlog ek variable addTwo maine hold kiya gya hai 
const addTwo = function(num){
    return num + 2
}