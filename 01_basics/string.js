const cgpa = 8.98;
 const course = "MCA"

 console.log(cgpa + course + " is My academic details");  // this is old fashion to write code


 // use bactics and string interpolation like

 console.log(` hi my name is kamaljeet mishra and i enrolled in course ${course} and gain a CGPA ${cgpa}`);


 // new way to define string 

 const myString = new String ("kamaljeet Mishra");
//  console.log(myString)

//  console.log(myString. __proto__);
 console.log(myString.charAt(2))
 console.log(myString.indexOf('a'))

 console.log(myString.substring(0,6))


 //similarly many function exist like slice, trim , replace ,incudes,split