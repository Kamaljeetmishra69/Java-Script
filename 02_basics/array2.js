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
// console.log(new_heros)


const another_array= [1,2,3,[4,5,6],7,[8,9,[1,4,56]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//string to array conversion
console.log(Array.isArray("kamaljeet"))
console.log(Array.from("kamaljet is learning technology"))


//multile variable ko single array me 
let score1 =1;
let score2 =2;
let score3 =3;
console .log(Array.of(score1,score2,score3))