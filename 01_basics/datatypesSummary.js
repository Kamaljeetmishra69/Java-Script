//*****************************datatypes summary****************************

// primtive datatypes & reference dataypes(non premitive)

// primitive dataypes 
//string ,number,boolean , symbol, BigInt, null,undefined


//reference types
//Array, function, objects

// let heros =["shaktiman ","akchay khana","me" ]
// console.log(heros)
// console.log(typeof heros)


//  let myObject={
//     name :"kamaljeet Mishra",
//     course : "MCA",
//     enrollmentId  : "A453145024001"
// }
// console.log(myObject)
// console.log(typeof myObject)

// const myFunction = function(){
//     console.log("hello world")
// }
// console.log(myFunction)
// console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory concept

//stack (primitive)  ,  heap (non primitive)


let Id = "abcd"

let id_Update = Id;
id_Update = "bfdsa"
console.log(Id)
console.log(id_Update)



let object_1 = {
    email : "abc@gmail.com",
    useid : 4556,

}
object_2 = object_1
object_2.email = "kamaljeetm572gmail.com"
console.log(object_1.email)
console.log(object_2.email)