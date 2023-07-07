/* 
switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/


// agar break nhi lagega to ase match hone ke baad neehe ke case bhi chal jayeyga means run karega except default 

const month = "march"
switch (month){
    case "jan":
        console.log("Janunary");
        break;
    case "feb":
        console.log("Feburary");
        break;
    case "march":
        console.log("March");
       // break;
    case "april":
        console.log("April");
        break;
   

    default:
        console.log("default");
        break;
}