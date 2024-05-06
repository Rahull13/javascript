// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    // Un-named IIFE
    console.log(`DB Connected Two ${name}`);
} )('Hello')