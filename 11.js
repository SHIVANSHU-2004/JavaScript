// object with singleton & constructor 
const tinderUser = {}

tinderUser.id ="123bcg"
tinderUser.name = "Tinder"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"tinder@gmail.com",
     userfullname: {
        firstname:"shruti",
        lastname: "gupta"
    }
}

//console.log(regularUser.userfullname.firstname);

const obj1 ={1: "a", 2: "b", 3: "c"}
const obj2 ={4:"d",5: "e"}
//const obj3={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

// or
const obj3 ={...obj1, ...obj2}
//console.log(obj3);

const users =[
    {
        id:1,
        email:"teetu@gmail.com",
    },
    {
        id:1,
        email:"teetu@gmail.com",
    },
    {
        id:1,
        email:"teetu@gmail.com",
    },

]

users[1].email
console.log(tinderUser);


/*console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
*/


//objects  in destructuring for array.
const course={
    coursename:"js or code",
    price:"998",
    courseInstructor:"hitesh"
}

//course.courseInstructor
const {courseInstructor:instructor} = course

//console.log(courseInstructor);
console.log(instructor);


//api concept: apna work kisi dusre pr dalna
// randomuser.me famous api hi.













