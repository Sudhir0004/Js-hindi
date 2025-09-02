// let a= 10
// const b=10                           //{} is scope  //var is used in scope //var is very problematic
let a=300
if (true) {
    let a= 10
const b=10   
// console.log("INNER:", a);
}
// console.log(a);
// console.log(b);
// console.log(a);

 function one (){
const username ="sudhir"

function two (){
    const website = "youtube"
    console.log(username);
    
}
// console.log(website);
two()
 }
//  one()

if (true) {
    const username= "sudhir"

    if (username == "sudhir") {
        const website ="website"
        // console.log(username+website);
        
    }
//    console.log(website);
    
}
// console.log(username);

//.................interesting

console.log(addone(5))
function addone (num){
return  num  +  1
}

addtwo(5)
const addtwo = function(num2){
return num2+ 2
}