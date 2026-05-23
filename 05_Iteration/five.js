// for each lop does not return value 
const arrau = ["ram","shyam","komal"]
const value = arrau.forEach((item)=>{
    console.log(item)
})
//console.log(value)   //ram
                     //shyam
                     //komal
                     //undefined


// thats why use filter jo ki filter value return krta hai  


const myNums = [1,2,3,4,5,6,7,8,9,10];
const val = myNums.filter((i) => i<6)
console.log(val)
 
// another way to do the same work return is mandatory in this case 
const myNums = [1,2,3,4,5,6,7,8,9,10];
const val = myNums.filter((i) => {
     return i<6
})
console.log(val)


