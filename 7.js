// Date & Time in depth JS  . goes to mdn website 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23 )
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());


let myCreatedDated = new Date("01-12-2023")

let myTimeStamp = Date.now

console.log(myCreatedDated);
console.log(myCreatedDated.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());