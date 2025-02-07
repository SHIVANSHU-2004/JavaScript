// primitive  data type

// these are 7 types of data type 
// string, number, boolean, null, undefined,symbol,bigint;

const score =100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId)

const bigNumber = 12254655554586225532n


// reference (non primitive)

// array , objects , functions

const heros = [" xyx","jgh","jfj"];
let myobj={
    name:"shivanshu",
    age:18,
}
 
const myFunction = function() {
    console.log("ghello word");
}

console.log(typeof bigNumber);
