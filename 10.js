// objects
// singleton means when we make the by the constructor.

// objects litreal 
//Object.create

const mySym = Symbol("Key1")


const JsUser = {
    name:"shianshu",
    [mySym] : "mykey1",
    "full name" : "shianshu varhsney",
    age:18,
    location:"jaipur",
    email:"shianshu@gmail.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday", "Tuesday"]


}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(typeof JsUser.mySym)



JsUser.email = "shuchat@gpt.com"
Object.freeze(JsUser.email)
JsUser.email = "deepuchpdhdgt@gig.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting()); 



JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
    
}
    
    console.log(JsUser.greetingTwo());
 







