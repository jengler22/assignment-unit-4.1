console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( Jake ) {
  return 'Hello, Jake!';
}
// Remember to call the function to test
console.log('test - should say "Hello, Jake!"', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( num1, num2 ) {
  // return firstNumber + secondNumber;
  return num1 + num2
}
addNumbers(15,20)

console.log("result of addition", 15 + 20 ); 


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){

  return num1 * num2 * num3

}
multiplyThree(2,5,10)

console.log("result of multiplication is", 2*5*10);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
isPositive();
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
const arrayOfNumbers = [1,2,3]; 
function getLast(arrayIn){
  return arrayIn[arrayIn.length - 1];
}
console.log('when calling with an array, expect 3', getLast(arrayOfNumbers));
console.log('when calling with an array, expect 5', getLast([3,4,5]));
console.log('when passing an empty array, expect undefined', getLast([]));
//console.log('The last item is', array[array.length - 1]);
  //getLast();

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
      function find(value, listOfItems) {
        for(let item of listOfItems) {
          console.log(value, item);
          if(value === item) {
            console.log('Found a match!');
            return true;
          } else {
            console.log('does not match');
          }
        }
        return false;
      }
      console.log(`find 'A' in ['A','B','C'], expect: true-`, find('A', ['A','B','C']));
      console.log(`find 'Z' in ['A','B','C'], expect: false-`, find('Z', ['A','B','C']));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
