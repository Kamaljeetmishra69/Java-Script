 const myArray = [1,2,3,4,5,6,7,"kamaljeet",true]
// console.log(myArray);

// // another way to declare array in js

 const newArray = new Array(1,2,3,4,5,"priyanshu");
// console.log(newArray);


// //Arrays in js is shallow copy not deep copy shallow copy means it share the same reference point


// console.log(newArray[0])
// console.log(newArray[1])
// console.log(newArray[2])
// console.log(newArray[3])
// console.log(newArray[4])



// // Array methods

// // push to insert in last 
// myArray.push("juhi");
// console.log(myArray)

// //pop to remove from last
// myArray.pop()
// console.log(myArray)


// // unshift is used for to adda in first but it changes the indexing
// myArray.unshift(0)
// console.log(myArray)
// // shift is used for remove first element from array 
// myArray.shift()
// console.log(myArray)

// let newarr2 = new Array (6,5,4,3,2,1)
// console.log(newarr2)
// newarr2.shift()
// console.log(newarr2)


// includes method is used to check weather element is present or not in array 
console.log(myArray.includes(9))
//here 9 is not in array so it return false 


//indexof is used to show the the element index ki wo kon si index pr hai for examle element 4 is on on index 3 
// & if element is not present in array then output is -1
console.log(myArray.indexOf(4))


//join is used to array in another but it changes the  type in string

const newArray= myArray.join()
console.log(newArray)
console.log(typeof newArray);


//slice & splice both method is used to cut the peace of array 
//slice exclude range  splice include range
// in slice actual array remain as tease but in splice it cut the portion for which you aply splice operation