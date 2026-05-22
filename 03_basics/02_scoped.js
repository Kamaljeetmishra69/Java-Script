let a= 10;
const b= 20;
var c = 30;

// console.log(a)
// console.log(b)
// console.log(c) 
//output    
//10
//20
//30

//var is outdated becoz it is of global scope

var value= 2000;

if(true){
    var value = 456; 
}
//console.log(value)// var is global scope


//that why modern programing comes on let concept
let value2= 2000;
if(true){   
    let value2 = 456;
}
//console.log(value2)

function addOne(num ){
    return num +1;
}
addOne(4);



const addTwo = function(num){
    return num + 2;
}
addTwo(56);



