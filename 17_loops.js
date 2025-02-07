// loops
// for loop
for (let index = 0; index<=10; index++){
    const element = index;
    if(element == 5){
        console.log("5 is the best number");
    }
    //console.log(element);

}

//console.log(element);

for (let i=0;i<=10;i++){
    console.log('outer loop value:${i}');
    for(let j=0;j<10;j++){
        //console.log('innner loop value ${j} & inner loop ${i}');

        console.log(i+'*'+j+'='+i*j);
    }
}

// break & continue 

for(let i = 0; i <=20; i++){
    if (i == 5){
        console.log('detected 5');
        break;
    }
    console.log('value of i is ${index}');
}
for(let i = 0; i <=20; i++){
    if (i == 5){
        console.log('detected 5');
        continue;
    }
    console.log('value of i is ${index}');
}
