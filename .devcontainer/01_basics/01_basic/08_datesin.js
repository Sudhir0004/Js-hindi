//  dates
 let  myDate = new Date ()
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(typeof myDate);

//   let mycreateddate = new Date("2025,8,15")
//   let mycreateddate = new Date(2025-8-15,5,3)
//   let mycreateddate = new Date("2025-8-15")
  let mycreateddate = new Date("2025-8-15")
//  console.log(mycreateddate.toDateString());
//  console.log(mycreateddate.toLocaleString());
 let mytimestamp=Date.now()

//  console.log(mytimestamp);
//  console.log(mycreateddate.getTime());
// //  to cnovert in second
//  console.log(Math.floor(Date.now()/1000));
 
let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// '${newDate.getDate()} and the time
 newDate.toLocaleString('default',{
    Weekday:"Long",
 })