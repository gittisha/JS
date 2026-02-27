//Immediately invoked function expressions (IIFE)
//to execute a function immediately after its definition, we can use an IIFE. It is a function that is defined and executed immediately. 
// It is a common pattern in JavaScript to create a new scope and avoid polluting the global scope.

(function chai(){ //named iife
    console.log(`DB CONNECTED`)
})();  // ; should be used to avoid further problems in iife

(function coffee(){
    console.log(`DB CONNECTEDTwo`)
})();


( () => { //simple iife using arrow function
    console.log(`DB CONNECTED Three`);
})();


( (name) => {
    console.log(`DB CONNECTED Three ${name}`);
})('Swarnadeep'); // we can also pass arguments to the IIFE, as shown 
// in the example above. The argument 'Swarnadeep' is passed to the function 
// and logged to the console.