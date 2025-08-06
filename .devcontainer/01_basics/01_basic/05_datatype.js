//Primitive Data 

//7 types= STRINGS,NUMBER,BOOLEAN,NULL=EMPTY NOT "0",UNDEFINED = NOT GIVEN ANY VALUE , SYMBOL,BIGINT
  

const score = 88 
const scorevalue= 55 
const isloggedin = false


const outsideTemp = null

 let userEmail;

 const id = Symbol('123')
const anotherId = Symbol('123')
 
// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n
// console.log(id === anotherid);
//REFERENCE(NON PRIMITVE)
//array,objects,function


const heros =["shaktiman,bheem"]
let myobJ = {
   name:"sudhir",
   age: 18,
   
}
 const myFunction= function(){
    console.log("Hello world");
 }
 console.log( typeof outsideTemp);

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ video 10

// stack memory (primitive ),heap (non primitive)
 let myname=("sudhir")
 let anothername = ("Rinkoo")
 anothername= "Trader"
 console.log(anothername);
 console.log(myname);
 let userone ={ 
   email : "abc@gmail.com",
   upi : "user@axis"

 }
 let usertwo = userone
email: "dot@gmail.com"
console.log(userone);
console.log(usertwo);


 