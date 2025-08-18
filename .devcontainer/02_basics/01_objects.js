// singleton //if constructur made then its singleton
  
// object literal
const mySym = Symbol("key1")

const Jsuser = {
    name: "sudhir",
    "full name" : "sudhir pal",
mySym: "mykey1",
     age: 18,
    location : "Vadodara",
    email : "sudhirparul.gmail.com",
    isLoggedin: false,
    lastloginDays :["Monday","Wednesday"],

}
 
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(typeof Jsuser[mySym])

Jsuser.email ="sudhirparulac.in"
    Object.freeze(Jsuser)
Jsuser.email ="sudhirpal@microsoft"
console.log (Jsuser)