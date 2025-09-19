/*
//Identify elements on the page we will update 
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

//Generate random numbers to display on page load 
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

// Update elements on the page 
num1.innerHTML = randomNum1;
num2.innerText = randomNum2;

let response = prompt('What is your name?');
let count = response.length;
console.log(count)
let firstLetter = response.charAt(0);
console.log(firstLetter)
let lastLetter = response.charAt(count - 1);
console.log(lastLetter)


let age = 20;
if (age == 25) {
    console.log('Age is 25');
}


let a = 5;
let b = 10;
console.log(a > 3 && b < 15);


let over18 = false;
let hasGuardianApproval = true;
console.log(over18 || hasGuardianApproval); 


let count = 8;
console.log(count % 2 == 0);



let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let question = ('What is ' + num1 + '+' + num2 + '?');


let userAnswer = parseInt(prompt(question), 10);

let correctAnswer = num1 + num2
let feedback = ''

if (userAnswer == correctAnswer) {
    feedback = 'Correct!';
} else if (userAnswer == correctAnswer - 1 || userAnswer == correctAnswer + 1) {
    feedback = 'You were close!';
} else {
    feedback = 'Incorrect.';
}

alert(feedback + ' The expected answer is' + correctAnswer);

let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
}
if (age >= 12 && age < 18) {
    alert('Teenager');
}
if (age >= 18) {
    alert('Adult');
}

let response = prompt('Please enter a whole number')

if (response % 2 == 0) {
    alert("The number you entered was even");
}
else {
    alert("The number you entered was odd");
}


let experimentName = 'Stroop';

let welcomeMessage = 'In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.';

console.log(experimentName);

alert(welcomeMessage);

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let question1 = ('What is ' + num1 + '+' + num2 + '?');

let start1 = Date.now();
let answer1 = prompt(question1);
let end1 = Date.now();
let responseTime1 = ((end1 - start1) / 1000).toFixed(3);

let feedback = '';

if (answer1 == (num1 + num2)) {
    feedback = 'Your response was CORRECT';
} else {
    feedback = 'Your response was INCORRECT'
}

alert('You answered ' + answer1 + ' in ' + responseTime1 + ' seconds.' + feedback);

let num3 = Math.floor(Math.random() * 10) + 1;
let num4 = Math.floor(Math.random() * 10) + 1;

let question2 = ('What is ' + num3 + '+' + num4 + '?');

let start2 = Date.now();
let answer2 = prompt(question2);
let end2 = Date.now();
let responseTime2 = ((end2 - start2) / 1000).toFixed(3);

if (answer2 == (num3 + num4)) {
    feedback = 'Your response was CORRECT';
} else {
    feedback = 'Your response was INCORRECT'
}

alert('You answered ' + answer2 + ' in ' + responseTime2 + ' seconds.' + feedback);

let num5 = Math.floor(Math.random() * 10) + 1;
let num6 = Math.floor(Math.random() * 10) + 1;

let question3 = ('What is ' + num5 + '+' + num6 + '?');

let start3 = Date.now();
let answer3 = prompt(question2);
let end3 = Date.now();
let responseTime3 = ((end3 - start3) / 1000).toFixed(3);

if (answer1 == (num5 + num6)) {
    feedback = 'Your response was CORRECT';
} else {
    feedback = 'Your response was INCORRECT'
}

alert('You answered ' + answer3 + ' in ' + responseTime3 + ' seconds.' + feedback);


alert('thank you for participating!')


let results = document.getElementById('results');
let form = document.getElementById('quiz');
let question = document.getElementById('question');

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let correctAnswer = num1 + num2;
let innerText = 'What is' + num1 + '+' + num2 + '?';
let startTime = Date.now();


form.addEventListener('submit', function (event) {
    event.preventDefault();
    answer(form.elements['answer'].value);
    let endTime = Date.now();
    let responseTime = ((endTime - startTime) / 1000).toFixed(3);

    form.style.display = 'none';

    if (results(question) == correctAnswer) {
        results.innerHTML = 'Correct! You answered in' + responseTime + 'seconds.';
    } else {
        results.innerHTML = 'Incorrect. The answer was' + correctAnswer + 'You answered in' + responseTime + 'seconds.';
    }
});

*/

// Get references to the page elements
let num1Element = document.getElementById('num1');
let num2Element = document.getElementById('num2');
let responseInput = document.getElementById("response");
let feedback = document.getElementById("feedback");
let form = document.getElementById("form");
let instructions = document.getElementById("instructions");

// Generate random numbers
let randomNum1 = Math.floor(Math.random() * 100);
let randomNum2 = Math.floor(Math.random() * 100);
let correctAnswer = randomNum1 + randomNum2;

// Display numbers on the page
num1Element.textContent = randomNum1;
num2Element.textContent = randomNum2;

// Timing
let startTime = Date.now();

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let endTime = Date.now();
    let timeToRespond = ((endTime - startTime) / 1000).toFixed(2); // seconds
    let userAnswer = Number(responseInput.value);

    let resultMsg = 'You answered ' + userAnswer + ' in ' + timeToRespond + ' seconds. Your response was ';

    if (userAnswer === correctAnswer) {
        resultMsg += "CORRECT.";
    } else {
        resultMsg += 'INCORRECT. The correct answer was ' + correctAnswer + '.';
    }

    feedback.textContent = resultMsg;

    // Hide the form and instructions after answer
    form.style.display = 'none';
    instructions.style.display = 'none';
});

