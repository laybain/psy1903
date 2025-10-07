let jsPsych = initJsPsych();

let timeline = [];

//Welcome screen
let welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h2 class="experiment-heading">Welcome to the Math Response Time Task!</h2>
  <p>In this experiment, you will be shown a series of math questions.<br>
  <p>There are three parts to this experiment; the questions will increase in difficulty with each part.<br>
  Please answer as quickly and accurately as possible.</p>
  <p>Press <span class='key'>SPACE</span> to begin.</p>
  `,
    choices: [' ']
};

timeline.push(welcome);

var likert_scale = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree"
];

var trial = {
    type: jsPsychSurveyLikert,
    questions: [
        { prompt: "I enjoy solving math problems.", name: 'Math Enjoy', labels: likert_scale },
        { prompt: "I find math easy.", name: 'Math Easy', labels: likert_scale },
    ],
    data: {
        collect: true
    },
    randomize_question_order: true
};

timeline.push(trial)

//Make trials with a for loop
let num_trials = 3;
for (let i = 0; i < num_trials; i++) {
    // Generate two random numbers 
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 + num2;

    let math_trial = {
        type: jsPsychSurveyHtmlForm,
        html: `<span class="equation"><span class="eqnum">${num1}</span> + <span class="eqnum">${num2}</span> = 
<input name="answer" type="text" required /></span>`,
        data: {
            num1: num1,
            num2: num2,
            correctAnswer: correctAnswer
        },
        button_label: "Submit",
        data: {
            collect: true
        },
    };
    timeline.push(math_trial);

}




let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: "NO_KEYS",
};
timeline.push(debriefTrial);




jsPsych.run(timeline);



