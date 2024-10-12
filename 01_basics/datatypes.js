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

let name="Brijesh"
let id=1001
let rank=12345678902
b=true
const rollnum=9987456
console.log(typeof(name));
console.log(typeof(id));
console.log(typeof(rank));
console.log(typeof(b));
console.log(typeof(rollnum));



console.log(typeof(null));
console.log(typeof(undefined));
//JavaScript is a dynamically because here we don't need to declare
// data types... 
//Primitive

//7 types: String, Number, Boolean, null, undefined, Symbol(to make unique), BigInt

const studentName="Brijesh Kumar"
const score=100
const scoreValue=100.23

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id1=Symbol('123')
const anotherId= Symbol('123')

const bigNumber=7895456252546565n
console.log(id1===anotherId);

console.log(typeof studentName);
console.log(typeof score, scoreValue);
console.log(typeof id1);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof bigNumber)



//Non- Primitive or Reference

// Array, Objects, Functions

const hero=["Shaktimaan","naagraj","doga"]

let myObj={
    name:"Brijesh",
    age:28,
    admission:true
}

const myFunction=function(){
    console.log("Hello World...");
    
}

(function(){
    "use strict";

    function greetMe(yourName){
        alert('Hello ${yourName}');
    }

    greetMe("World");

});



