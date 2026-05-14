const array1 = ["skaktiman" ,"sharukhan" ,"akchay khana"]
const Array2 = ["akchaykumar", "salmankhan"]
//array1.push(Array2)
// console.log(array1)

// console.log(array1[0])
// console.log(array1[1])
// console.log(array1[2])
// console.log(array1[3])
// console.log(array1[3][1])

// this is not a good way to merge two array we should use concat method rather than this

 const newarray=array1.concat(Array2)
//console.log(newarray);

//another way to do same work is spread method

const new_heros = [...array1, ...Array2]
console.log(new_heros)