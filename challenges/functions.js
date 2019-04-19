// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(item1, item2, cb) {
  return cb(item1, item2);
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(item1,item2){
  return item1 + item2
}

function greeting(first, last) {
  return (` Hello ${first} ${last}, nice to meet you!`)
}

function multiply(thisONE,thatONE){
return thisONE * thatONE
}

function subtract(x,y) {
  return x - y
}

function times100(x,y){
  return x * 100 + y * 100
}
console.log(consume(2,2,add))
console.log(consume(4,4,multiply))
console.log(consume("Mary","Poppins",greeting))
console.log(consume(5,3,subtract))
console.log(consume(1,2,times100))
// // ==== Closures ==== 

// // Explain in your own words why `nestedfunction()` can access the variable `internal`.

// // Explanation: 

// //--@@@@@@@ 'nestedfunction()' can access the variable 'internal' because it is within the lexical scope of myFunction .

// // const external = "I'm outside the function";

// // function myFunction() {
// //   console.log(external);
// //   const internal = "Hello! I'm inside myFunction!";

// //   function nestedFunction() {
// //     console.log(internal);
// //   };
// //   nestedFunction();
// // }
// // myFunction())