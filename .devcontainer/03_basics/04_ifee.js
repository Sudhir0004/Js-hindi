//imediately Invoked function expresion (IIFE)

(function chai (){
    //name IFEE
console.log('DB CONNECTED');
}) ();
// ; must used in two IFEE 
 ( (name) => {

    console.log('DB CONNECTED 2 ${name}');
    
})('sudhir');