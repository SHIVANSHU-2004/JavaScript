// function & parameters

function sayName(){
console.log("S");
console.log("H");
console.log("I");
console.log("V");
console.log("a");
console.log("N");
console.log("S");
console.log("H");
console.log("U");
}

//sayName();

/*function addTwoNumbers(a, b) {
    console.log(a + b);
}

addTwoNumbers(2,8);
*/

function addTwoNumbers(a, b) {
let result = a + b
return result;
}

const result = addTwoNumbers(6,8)

console.log("Result: ",result);

// 
function calculateCartPrice(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice(200,300,500,2000,2500,1254))


const user ={
    username: "hitesh",
    price:5965
}
function handleobject(anyobject){
console.log('username is ${anyobject.username} and price is ${anyobject.price}');
}
handleobject(user)
