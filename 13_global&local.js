// scope 
// there are three scopes: let ,var ,const.

/*var c=300// global scope 

 if (true){ // block scope
    let a= 10
    const b = 20
    c= 30
    console.log("INNER:" ,a);
}

for (let i=0; i<Array.length;i++){
    const element = array[i];
}

//console.log(a);
//console.log(b);
//console.log(c);  */


//nested scope 

function one(){
    const username = "shivanshu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}


one ()
if(true) {
    const username ="shivanshu"
      if(username=="shivanshu") {
        const website = "youtube"
        console.log(username ," " + website);
      }
}
//console.log(username);

 function addone(num){
    return num + 1
}

addone(4)

// arrow function 

const user = {
    username: "shivanshu",
    price: 333,

    WelcomeMessage: function() {
        console.log('${this.username} , welcome to website');
        console.log(this);
    }
}

user.WelcomeMessage()
user.username = "richa"
user.WelcomeMessage() 
    

function coffee(){
    console.log(this.username);
}

coffee()   


/*const coffee = function(){
    let username = "shivanshu"
    console.log(this.username);
}*/


const coffee1 = () => {
    let username = "shivanshu"
    console.log(this);
}
// implict me return htate hi or {}.
// explict me return lgate hi

const addTwo=(num1,num2) => (num1 + num2);

console.log(addTwo(4,5))


