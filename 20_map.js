//The Map object holds key-value pairs and remembers the original
// insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const  map = new Map();
map.set('IN',"india")
map.set('IN',"pakistan")
map.set('IN',"america")
map.set('IN',"France")
map.set('IN',"germany")

console.log(map);

const myObject= {
     'game1':'PUBG',
     'game2':'FREE FIRE'
}


const coding = ["js","c++","python","java"]
const values = coding.forEach((item) =>{
    console.log(item);
})


for (const [key , value] of myObject){
    console.log(key,':-',value);
}

// object

const myObject1 = {
        js:'javascript',
        cpp:'c++',
        rb:'ruby',
        swift:"swift by the apple"
}

for (const key in myObject1){
    console.log('${key} shortcut is for ${myObject1[key]}');
}


const programming = ["js","rb","cpp","swift"]

for(const key in programming){
    console.log(programming[key]);
}


const programming1 = ["js","rb","cpp","swift"]

coding.array.forEach(function (item) {
    console.log(item);
});

function printMe(item){
    console.log(item);
}


coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
})

const myNums = [1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15]

const newNums = myNums.filter((num)=> 6)
console.log(newNums);