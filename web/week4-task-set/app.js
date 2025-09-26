/*

//function named convertTemp that converts a temperature between Celsius and Fahrenheit.


function celsiusToFahrenheit(temperature) {
    return (temperature * 1.8) + 32;
}

console.log(celsiusToFahrenheit(10)); // Expected output: 50
console.log(celsiusToFahrenheit(-5)); // Expected output: 23

function named convertTemp that converts a temperature between Celsius and Fahrenheit.

//function c-->f f-->c
function convertTemp(temperature, convertTo) {

    //conditional determining whether given temp is in c or f

    //if c then (°C * 1.8) + 32 = °F
    if (convertTo == 'c') {
        return ((temperature - 32) / 1.8)
    }
    //if f then (°F - 32) / 1.8 = °C
    else {
        return (temperature * 1.8) + 32;
    }

}

console.log(convertTemp(10, 'c')); // Expected output: -12.222222222222221
console.log(convertTemp(10, 'f')); // Expected output: 50



//Write a JavaScript function named getWordLengths that takes an array of words and returns a new array containing the length of each word.

//function to count number of letters in each value within array

//Define the Function

Create a function named getWordLengths that accepts one parameter (words).
Initialize the Result Holder

Inside the function, prepare to collect the lengths of each word.
You can either:
Create an empty array to push lengths into, or
Map directly to a new array (using array methods).
Iterate Over the Input Array

Go through each word in the words array.
You can use a loop (e.g., for loop) or the map method.
Determine Each Word's Length

For each word, calculate its length using the string's length property.
Store/Return the Lengths

Gather these lengths into a new array (either by pushing to it inside the loop or as the result of the mapping).
Return the new array from the function.
Test the Function

*/

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];

function getWordLengths(words) {


    let lengths = [];
    for (let word of words) {
        lengths.push(word.length);
    }
    return lengths
}

console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5]





