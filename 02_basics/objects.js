//objects are in two way declaration 
//1 object constructor
//2 object literals 

//we only discuss object literals now 

const myObject ={
    name :"kamaljeet",
    fullname: "kamaljeet mishra",
    age :18,
    location: "noida",
    email: "abcd@GPUler.com",
    
}
// console.log(myObject)
// console.log(myObject.email)
// console.log(myObject.name)
// console.log(myObject.fullname)
// console.log(myObject[fullname])

myObject.fullname = "kamaljeet kumar Mishra"
//  console.log(myObject)

// Object.freeze(myObject)

myObject.greeting = function(){
    console.log("heelo js user");
}
myObject.greeting2 = function(){
    console.log(`heelo js user, ${this.name}`);
}
//  console.log(myObject)
//  console.log(myObject.greeting());
//  console.log(myObject.greeting);

 console.log(myObject.greeting2());
 console.log(myObject.greeting2);