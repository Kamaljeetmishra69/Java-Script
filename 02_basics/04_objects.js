const { useSyncExternalStore } = require("react")

//const tinderUser = new Object()  //singleton object
const tinderUser = {} // non singleton object
tinderUser.Id  = "abc123"
tinderUser.name = "sammy"
tinderUser.isLoggedIn= false

//console.log(tinderUser)

const regualrUser = {
    email:"somae@gamil.com",
    fullname:{
        userFullname:{
            firstname : "kamaljeet",
            lastname : "Mishra"
        }
    }
}
//console.log(regualrUser);//  fullname: { userFullname: { firstname: 'kamaljeet', lastname: 'Mishra'} } }
//console.log(regualrUser.fullname);//{ userFullname: { firstname: 'kamaljeet', lastname: 'Mishra' } }
//console.log(regualrUser.fullname.userFullname);//{ firstname: 'kamaljeet', lastname: 'Mishra' }


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1,obj2}
//console.log(obj3) //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4 = Object.assign({} ,obj1,obj2);
//console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 


const user = [
    {
        id:1,
        email:"K@gmail.com"
    },
    {
        id:2,
        email:"K@gmail.com"
    },
    {
        id:3,
        email:"K@gmail.com"
    },
    
]
 user[2].email

console.log(tinderUser);