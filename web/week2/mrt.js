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
alert('You answered ' + answer1 + ' in ' + responseTime1 + ' seconds.');

let num3 = Math.floor(Math.random() * 10) + 1;
let num4 = Math.floor(Math.random() * 10) + 1;

let question2 = ('What is ' + num3 + '+' + num4 + '?');

let start2 = Date.now();
let answer2 = prompt(question2);
let end2 = Date.now();
let responseTime2 = ((end2 - start2) / 1000).toFixed(3);
alert('You answered ' + answer2 + ' in ' + responseTime2 + ' seconds.');

let num5 = Math.floor(Math.random() * 10) + 1;
let num6 = Math.floor(Math.random() * 10) + 1;

let question3 = ('What is ' + num5 + '+' + num6 + '?');

let start3 = Date.now();
let answer3 = prompt(question2);
let end3 = Date.now();
let responseTime3 = ((end3 - start3) / 1000).toFixed(3);
alert('You answered ' + answer3 + ' in ' + responseTime3 + ' seconds.');

