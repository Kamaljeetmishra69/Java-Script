 function myFunction(){
    console.log("hi How are you");
 }
 
 //myFunction()   //Function call or execution // hi how are you
 myFunction // functio reference used in react 


 function Add( num1,num2) {
    //console.log(num1+num2);
     console.log(`result is :" ${num1+num2}`);
 }
 //Add()  //result is :" NaN
 //Add(8,5)  //result is :" 13


 function AddMethod (num1,num2){
    let result = num1+num2;
    return result
 }
   let result = AddMethod( 6,4)
   //console.log(result)



   function loginUserDetail ( username= "sam" ){
    // if(username===undefined){
    //     console.log("please enter username")
    //     return
    // }
    if(!username)
    {
        console.log("please enter username")
        return
    }
        console .log(`${username} just logged in`)
   }
   //loginUserDetail()//undefined just logged in
   //loginUserDetail("kamaljeet")

//rest operator
   function calculateCardPrice(...num)
   {
      return  num
      
   }

   //console.log(calculateCardPrice(3,66,8876,));    //[ 3, 66, 8876 ]


    const user= {
      username = "kamaljeet",
      price =56789
    }


    function handleUser(anyobject)
    {
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    }
   // handleUser(user);
   handleUser({
      username = "kamaljeet",
      price =56789
    }) 




    const newArray=[4000,67788,87766,886554]

    function getSecondArrayValue(arraypara){
      return arraypara[2]

    }
   
    console.log(getSecondArrayValue(newArray))