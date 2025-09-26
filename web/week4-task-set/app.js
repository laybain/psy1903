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
You can use a loop (e.g., for loop) 
Determine Each Word's Length

For each word, calculate its length using the string's length property.
Store/Return the Lengths

Gather these lengths into a new array (either by pushing to it inside the loop or as the result of the mapping).
Return the new array from the function.
Test the Function

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];

function getWordLengths(words) {


    let lengths = [];
    for (let word of words) {
        lengths.push(word.length);
    }
    return lengths
}

console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5]



1. Function Setup
Define a function called getLongestWord (just like you did with getWordLengths).
This function should take an array of words as its parameter.
2. Initialize a Tracker
Create a variable to store the currently "longest word" as you go through the array. Start with an empty string or the first word in the array (depending on your approach).
3. Loop Through the Array
Use a loop (for...of loop works well) to go through each word in the array.
4. Comparison Logic
For each word, compare its .length to the .length of the longest word you have stored.
If the current word is longer, update your tracker variable to this word.
If it's the same length or shorter, do nothing (since you want the first longest word).
5. After the Loop
Once the loop is done, the tracker variable should hold the first longest word.
Return this word.
6. Test
Call the function using console.log and provide an example array to ensure it behaves as expected.


let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];

function getLongestWord(words) { //parameter, what are we inputting? 

    let longestWord = ""; //tracking single longest word so use string instead of array 

    // Loop through each word in the array
    for (let word of words) {

        // Compare the length of this word to our current longest
        if (word.length > longestWord.length) {

            // If this word is longer, replace as the new "longestWord"
            longestWord = word;
        }

    }

    return longestWord;
}

console.log(getLongestWord(words));



let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];

function getWordLengths(words) {

    let lengths = [];
    for (let word of words) {
        lengths.push(word.length);
    }
    return lengths
}

let numbers = [1, 2, 3, 4, 5]

function getOddNumbers(numbers) {

    //Initialize an empty array named results to store odd numbers.

    let results = []

    //Loop through the given array of numbers.

    for (let num of numbers) {
        if (num % 2 == 0) {

        } else {
            results.push(num) //only push odd numbers to results 

        }
    }
    return results

}

console.log(getOddNumbers(numbers));

*/

function filterNumbers(numbers, evenOrOdd) {
    // array to store results
    let results = [];

    for (let number of numbers) {

        // If filter is for even numbers and current number is even
        if (evenOrOdd === 'even' && number % 2 === 0) {
            results.push(number);
        }
        // If filter is for odd numbers and current number is odd
        else if (evenOrOdd === 'odd' && number % 2 !== 0) {
            results.push(number);
        }
    }

    return results;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 'even')); // [2, 4]
console.log(filterNumbers([1, 2, 3, 4, 5], 'odd'));  // [1, 3, 5]