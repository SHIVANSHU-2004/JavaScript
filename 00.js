/*var a= "hello world"
var b =10;
var c = 12;
var b = c;
var d =b+c;
var e = b*c;
var f =5;


var firstname ="shivanshu";
var lastname = "varshney";
var fullname = firstname+ " " + lastname;

console.log("this is the value of " , f);

console.log(b);
console.log(fullname);
console.log(typeof firstname);

console.log(a);
//console.log(b);
//console.log(c);
console.log(d);
console.log(e);

// arithmetic operation*/



//Array
// it is an ordered list of values. it is an dynamic array.
// collections of the data elements./ list of ordererd values.
// each value is called element specified by index . / it can hold the mixed type values
// An array can hold the multiple values of mixed types.
/* charcterstics
1. hetrogeneous(different types of datatypes values )
2. dynamic array
3. declare the array with the const keyword.
*/

console.log("Programming with array in the JS file....");

/*creation of the array
1. array constructor
2. using array literal notation[]*/

const colors =new Array('RED','GREEN','YELLOW','PINK')
console.log(colors);

// literals notations 
let consonants = ['red','green','yellow',2,85,800152,2.5];
console.log(consonants);
console.log(consonants[2]);
console.log(consonants[-2]);
consonants[2]="shivanshu";
console.log(consonants);


/*operations in array (important)
1.Push()
2.Unshift()
3.Pop()
4.Shift()
5.Indexof()*/

let tish =['push','pop','shift','indexof'];
tish.push('fish');
console.log(tish);
tish.unshift('lish');
console.log(tish);
tish.pop(-1);
console.log(tish);

let result =tish.indexOf('shift');
console.log(result);

// 10 element array
let array = ['shyam',5,'fyam',4,'fly',8,'selly',12,'tripti',52,'ouutrum',46];
console.log(array);
// change the value 5 to 500
array[1]=500;
console.log(array);

// count the string element and count the integer element
//console.count(array);
for(i=0; i<=9;i++){
console.log(typeof array[i]);
v=i++;
console.log(v);
}

let stringArray = [];
let IntArray = [];
for( let i=0;i<array.length;i++){
    if (typeof array[i]=='string') {
        stringArray.push(array[i]);
    } else if (typeof array[i] =='number'){
        IntArray.push(array[i]);
    }
    }

console.log(stringArray);
console.log(IntArray);
    
// this the terminology type questio  which is comes to the mid term exam.
// where we find the highest and lowest values from an array.

function findMinMax(){
let cart =[120,450,852,542,987,654];
console.log(cart);
let minValue = Math.min(...cart);// we are used  spread operator where we are find the individual elements in an array
console.log(minValue);
let maxValue = Math.max(...cart);
console.log(maxValue);
console.log(cart.sort());
console.log(cart.reverse());
console.log(cart.slice(0, 3));
}
findMinMax();

let username =['shivam','seeta','lakhan','Meeta','Aaradhna']
console.log(username);
let useri =username.sort();
console.log(useri);
console.log(...username);
console.log(username.reverse());
console.log(username.sort());

let numbers =[15,23,45,65,45,85];
numbers.sort(function(a,b){
    return a -b;
    

});
console.log(numbers);



let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());



let myCreatedDated = new Date("01-12-2023")

let myTimeStamp = Date.now
console.log(myCreatedDated);





 


/*let array1 =[1,45,65,85,89];
let array2 =['shilpi','philips','timplis','gilips','simplis','filips'];
console.log()*/


