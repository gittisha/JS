//Immediately invoked function expressions (IIFE)
//prevent global scope pollution

(function chai(){
    console.log(`DB CONNECTED`)
})();

( () => {
    console.log(`DB CONNECTED TWO ${name}`);
})()