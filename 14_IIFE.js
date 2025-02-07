// immediatiley invoked function expression (IIFE)


(function chai(){

    // named IIFE
    console.log('DB connected');
})();



( (name) => {
    console.log('DB connected TWO ${name}');
})('shivanshu')

