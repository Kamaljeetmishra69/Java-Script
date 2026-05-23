// reduce method is also same as filter and map but tere is concept about accumulator and currentvalue 
// lt us know how to implement this 


const myarray = [ 1,2,3,4] ;

 const result =  myarray.reduce((accumulator, nextvalue) => (accumulator + nextvalue), 0)
 console.log(result);
