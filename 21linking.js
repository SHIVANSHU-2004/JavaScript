console.log("hello world");
console.log("hello JS world, I am not logged in");

let a=50;
let b=50;
console.log("sum is :" , a +b);
// this is not show in console window.

let pencilPrice = 10;
let erserPrice = 5;
console.log("the total price is :" + pencilPrice + erserPrice + "Rupees");
let output = 'the total price is : ${pencilPrice +  ersrPrice} Rupees.';
console.log(output);

// conditional 
console.log("before my if statement");
let age = 56;
if (age >=18){
    console.log("you are eligible for vote in india....");
    console.log("u re eligible for drive ...")
}
console.log("after my if statement");

// else if statement;
let age1 = 15;
if(age1 >= 18){
    console.log("u can vote");
}elseif(age1 < 18)
{
    console.log("u can not vote ");
}


// nested if else 
let marks =42;

if(marks >=33){
    console.log("pass");
    if(marks >=80){
        console.log("Grade :C");
    }
else{
    console.log("Grade :a");
}
}
else {
    console.log("better luck next time ..");
}
  


if(null){
    console.log("it is the true value..");
}else{
    console.log("it is the false value ..");

}

let color ="red";
switch(color) {
    case "green":
        console.log("GO.");
        break;
    case "red":
        console.log("Stop..");
    case "yellow": 
    console.log ("Slow down");
    break;
    default :
    console.log("broken light..");
}


alert ("something is wrong..");
alert ("this is the simple alert..");
console.log ("this is the simple log..");
console.error("this is the warnong message...");


prompt("Enter your name: ");
console.log("firstname");
prompt ("enter your college Rollno.");
console.log("Rollno.");

let firstname = prompt ("Enter your first name");
let lastname = prompt ("Enter your last name");
console.log("welcome", firstname, lastname);
let msg = "welcome" +firstname + lastname +"";
alert(msg);

// string method 
let str ="hello ";
console.log(str);

// trim method
let msg1 = "      hello  ji ";
msg1.trim()

// prompt 
let password = prompt("set your password");
let newPass = password.trim();
console.log(password);



