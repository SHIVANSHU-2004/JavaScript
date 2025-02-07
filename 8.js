// array

const myGlobal =[0,1,2,3,4,5,6,7,8]
const myheroes= ["xyx","fjhf","ewjw"]
const newheroes = new Array(1,2,3,4)
console.log(myGlobal[1]);
// when we copy the shallow copy then it will give show the deep copy.



// methods of array

//myGlobal.push(6)
//console.log(myGlobal);

//myGlobal.pop(7)
//console.log(myGlobal);

myGlobal.unshift(8)
myGlobal.shift(3)


/*const newMoviles = myGlobal.join(myheroes)
console.log(newMoviles);
console.log(typeof newMoviles);

console.log(myGlobal.includes(5));
console.log(newheroes.indexOf(2));
console.log(myGlobal);*/

// slice splice ;) one place range place and next place not print the range.
// which operation manipulate the array & which is not manipulate .

console.log("S ",myGlobal);
const myn1 = myGlobal.slice(1,3)

console.log(myn1);
console.log("L ",myGlobal);

const myn2 = myGlobal.splice(1, 4)
console.log("C ",myGlobal);
console.log(myn2);





