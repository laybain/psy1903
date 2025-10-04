/*
let conditions = [];
for (let i = 0; i < 3; i++) {
    //Generate two random numbers (num1 and num2)
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    //Calculate the correct answer (sum)
    let correctAnswer = num1 + num2;

    conditions.push({ num1, num2, correctAnswer });

}

let jsPsych = initJsPsych();

//Define the experiment timeline
let timeline = [];

let data = [];

//Add Welcome Screen
// Define a welcome trial using jsPsych’s jsPsychHtmlKeyboardResponse plugin
let welcomeTrial = {
    // Indicate the plugin type we’re using
    type: jsPsychHtmlKeyboardResponse,

    // What content to display on the screen
    stimulus: `
    <h1>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin.</p>
    `,

    // Listen for the SPACE key to be pressed to proceed
    choices: [' '],
};

start time
let trial1 = {
    type: survey - html - form
    stimulus: `<h1> What is ${num1} + ${num2} ? </h1>`
}
answer =
    type: jsPsychHtmlKeyboardResponse


end time
//collect response time and collect time elapsed tracked by jsPsych

//??Parse participant’s answer as a number??


Compare answer to correctAnswer from condition

//Record whether answer is correct(true / false)
if (answer == correctAnswer) then answer = true 

Store all this info in the trial’s data



// add Debrief screen
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    //thank you message
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        //Output as CSV to the console
        console.log(data);
    }
}

timeline.push(welcomeTrial);
timeline.push(debriefTrial);

jsPsych.run(timeline);




After experiment ends:

//Extract relevant fields:rt time_elapsed num1 num2 correctAnswer answer correct


*/

// 1. Welcome screen
let welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h2>Welcome to the Math Response Time Task!</h2>
    <p>In this experiment, you will be shown a series of math questions.<br>
    Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin.</p>
  `,
    choices: [' ']
};

// 2. Make trials with a for loop
let num_trials = 3;
let math_trials = [];

for (let i = 0; i < num_trials; i++) {
    // Generate two random numbers 
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 + num2;

    math_trials.push({
        type: jsPsychSurveyHtmlForm,
        preamble: 'Question ' + (i + 1) + ' of ' + num_trials,
        html: '<p>' + num1 + ' + ' + num2 + ' = <input name="answer" type="number" /></p>',
        data: {
            num1: num1,
            num2: num2,
            correctAnswer: correctAnswer
        },
        button_label: "Submit"
    });
}

// 3. Debrief & results
let debrief = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Thank you for participating!</p><p>Press the button to finish.</p>',
    choices: ['Finish'],
    on_finish: function () {
        let data = jsPsych.data.get().filter({ trial_type: 'survey-html-form' }).values();
        let output = [];
        for (let i = 0; i < data.length; i++) {
            let trial = data[i];
            let answer = Number(trial.response.answer);
            let correct = answer === trial.correctAnswer;
            output.push({
                rt: trial.rt,
                time_elapsed: trial.time_elapsed,
                num1: trial.num1,
                num2: trial.num2,
                correctAnswer: trial.correctAnswer,
                answer: answer,
                correct: correct
            });
        }
        console.log("Math Response Time Results:", output);
    }
};

// 4. Timeline & run experiment
let timeline = [];
timeline.push(welcome);
for (let i = 0; i < math_trials.length; i++) {
    timeline.push(math_trials[i]);
}
timeline.push(debrief);

jsPsych.run(timeline);
