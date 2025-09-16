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
*/

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


