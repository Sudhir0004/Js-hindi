// for loops
for (let i = 0; i <= 10 ; i++) {     
   // this is loop const element = array[i];
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

    
} // outside cursor of element is not allowed tp print  like this 
// console.log(element); this is outside so this cant print this speciality of loops
// u can use mutiple time of i is variable to declare bcz first one is on their scope outside cant print so you can use multiple
//you can use loop inside loopm 
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value:${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value:${j} and inner loop`);
        console.log(i+ '*'+j+'='+i*j);
        
    }
    
} 
let myArray = ["batman","superman","bheem"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// BREAK and continue

// for (let index = 1; index < index<= 20 ; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`value of i is ${index}`);
// }
    
for (let index = 1; index < index<= 20 ; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`value of i is ${index}`);
   
    
}