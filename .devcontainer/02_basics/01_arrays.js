//array are resizable
//[] element store in this bracket 
const myarr = [0,1,2,3,4,5,6,7,8,9,]
const myHeros=["shaktiman", "herome"]
 const myarr2 = new Array (1,2,3,4)
//  console.log(myarr[1]);
 //array methos

//  myarr.push(5)
//  myarr.push(6)
//  myarr.pop() // remove last word of array
 
// myarr.unshift(9)    // double more date what you type in array 
// myarr.shift()       //remmove double date what you type in unshift 
//   console.log(myarr.includes(9));
//   console.log(myarr.indexOf(8));
 const newarr= myarr.join() // show type of array sting or object

//   console.log(myarr);
//   console.log(typeof newarr);
  

//slice,splice

const myn1 = myarr.slice(1,5)
console.log("A",myn1);
console.log(myn1);
console.log("B",myn1);
//splice
const myn2 = myarr.splice(1,5) // splice never start with 0 where slice start with 0 in
console.log("C",myarr);
console.log(myn2);



