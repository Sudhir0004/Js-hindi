const user = {
username :"sudhir",
price : 999,

welcomemessage:function(){
console.log(' ${this.username}  , welcome to website ');


}
}
// user.welcomemessage()
// user.username ="sudhr"
// user.welcomemessage()
// console.log(this);

// function one(){
// console.log(this.username);
// }
// one()
const chai = () =>{                             //this line is intersting
    let username="sudhir"
    console.log(this.username);
    

}
// const addtwo =(num1,num2)=> num1+num2


//implicit return  // explicit reurn when you usee retun
// const addtwo =(num1,num2)=> num1+num2       //if you use curly bracket when return is mandotory to writen
// if you use () then you write to need return otherwise use 

////how to write object 
const addtwo =(num1,num2)=> ({username: "sudhir"})
console.log(addtwo(3,4));
  const myarray=[12,45,4,5,]
  myarray.forEach()