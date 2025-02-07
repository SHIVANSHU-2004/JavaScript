// if 

/*if (true){

}
const isUserloggedIn = false;
if (isUserloggedIn){

}
//<,>,<=,>=, ==, != ,

2=="2" // it will be execute the following */

/*const ( temperature < 50 ){
    console.log("less than 50");
}
console.log("temperature is greater than 50");*/


// control statements 
// 1.conditional statement (IF , IF-ELSE, Switch statement )
// 2. iterative statement 


const isUserloggedIn = true;
const temperature = 41;

if (temperature ===40){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("executed");

const score = 200;

if (score >100) {
    let power = "fly"
    console.log('user power: ${power}');
}
console.log('user power: ${power}');

// implicit method 
const balance = 23000;

if (balance > 1000) console.log("test"),
console.log("test2");


//check multiple condition 

if (balance <500) {
    console.log("less than");
} else if (balance < 750) {
    console .log("less than 700");
} else {
    console.log("less than 1200");
}

const UserloggedIn =true;
const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(UserloggedIn && debitCard && 2==2){
    console.log("allow to buy the course ");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
}



// now the new format 
//switch case statement 
switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2: 
        console.log("feb");
        break;
    case 3: 
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;

    default:
        console.log("default case matching ");
        break;
}

//truthy & falsey
const userEmail = []

if(userEmail)
{
    console.log("got the user email");
}else {
    console.log("don't have the user email");
}

//falsy value 
false , 0, -0, BigInt ,0n, "", null, undefined, NaN 
// truthy value
"0", 'false'," ", [],{},function(){}

if (userEmail.length === 0){
    console.log("array is empty");
}
// Nullish coalesing operator (??): null undefined 

let val1;
val1 =5?? 10
val1 = null ?? 10 
val1 = undefined ?? 15
val1 = null ?? 10 ??20

console.log(val1);

// terniary operator 
condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80"): console.log("greater them 80")