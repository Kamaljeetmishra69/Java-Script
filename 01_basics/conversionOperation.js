let score = 45;
console.log(typeof(score));
console.log(typeof score);
let valueInString = String(score);
console.log(valueInString);
console.log(typeof(valueInString));

let score = null;
console.log(typeof score); //output is object

let score = undefined;
console.log(typeof score); //output is undefined

let score = "kamaljeet";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(valueInNumber); //output in NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log (typeof isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn)

//1 => true, 0 => false 
// ""=> false 
//"sdfghjk" => true