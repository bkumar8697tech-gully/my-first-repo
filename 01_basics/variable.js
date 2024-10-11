const accountId=901
let accountEmail="bkd@google.com"
var accountPassword="Bk12323@"
accountCity="Jaipur"
let s;
/* prefer not to use var
because of issue in block scope and functional scope */

console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity]);

//Primitive data types
//number->2^53
//bigint
//string->""
//boolean->true/false
//null->standalone value of empty 
//undefined-> value not assigned not now
//symbol->unique 

//non-primitive data types
//object

console.log(typeof(accountCity));
console.log(typeof(null));
console.log(typeof(undefined));



