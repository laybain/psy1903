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


let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];

function getWordLengths(words) {


    let lengths = [];
    for (let word of words) {
        lengths.push(word.length);
    }
    return lengths
}

console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5]


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

*/

alert(

    "Welcome to the even/odd response time task.\n\n" +
    "You are about to see a series of numbers.\n\n" +
    "If the number you see is EVEN, type the letter 'e'.\n" +
    "If the number you see is ODD, type the letter 'o'.\n\n" +
    "Please answer as quickly and accurately as possible.");

let results = [];

//Run 5 trials 
for (let i = 0; i < 5; i++) {

    //generate random num 1-20
    let number = Math.floor(Math.random() * 20) + 1;

    let start = Date.now();

    //prompt for user input/response
    let response = prompt(`Type the letter 'e' for EVEN \n\n Type the letter 'o' for ODD \n\nNumber: ${number}`);

    let end = Date.now();

    let responseTime = (end - start) / 1000;

    //check responses
    if (response === null) response = "";

    response = response.trim().toLowerCase();

    let isEven = number % 2 === 0;

    let correct = (response === "e" && isEven) || (response === "o" && !isEven);


    //accumulate results
    results.push({ number: number, response: response, correct: correct, responseTime: + responseTime.toFixed(3) }); //track response time as part of results
}

alert("Thank you for participating in the experiment!");

console.log(results);

