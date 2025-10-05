/*

let jsPsych = initJsPsych();

// Define the timeline as an empty array where we will add all our trials
let timeline = [];

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

let conditions = [];



// Add the welcome trial to our timeline
timeline.push(welcomeTrial);

// Run the experiment
jsPsych.run(timeline);



jsPsych = initJsPsych();
let timeline = [];

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

timeline.push(welcome);

let numTrials = 3;

for (let i = 0; i < numTrials; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 + num2;

    let mathTrial = {
        type: jsPsychSurveyHtmlForm,
        html: `<p>What is ${num1} + ${num2}?</p>
        <p><input name="answer" type="number" required></p>`,
        data: { num1, num2, correctAnswer },
        on_finish: function (data) {
            // Extract the numeric answer from the response
            let response = Number;
            data.answer = response;
            data.correct = response === data.correctAnswer;
        },
        button_label: "Submit"
    };

    timeline.push(mathTrial);
}


let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true }) //filter({ trial_type: 'survey-html-form' })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version'])
            .csv();
        console.log(data);
        console.log(jsPsych.data.get().values());
    }
};
timeline.push(debriefTrial);


jsPsych.run(timeline);

*/

// Initialize jsPsych and timeline
let jsPsych = initJsPsych(); // This sets up jsPsych for the experiment.
let timeline = []; // stores each trial of the experiment

// Add a welcome screen to the timeline
timeline.push({
    type: jsPsychHtmlKeyboardResponse, // waits for a keyboard press
    stimulus: `
      <h1>Welcome to the Math Response Time Task!</h1> 
      <p>Click the correct answer as quickly as possible.</p>
      <p>Press SPACE to begin.</p>`,
    choices: [' '], // Only SPACE will continue to the next screen.
});

// Number of math problems to show
let num_trials = 3;

// Make a loop to add num_trials math trials to the timeline
for (let i = 0; i < num_trials; i++) {
    // Get two random numbers (each between 1 and 10)
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 + num2; // This is the correct answer to display.

    // Pick a random number as the incorrect answer, not matching the correct answer
    let altAnswer;
    do {
        altAnswer = Math.floor(Math.random() * 19) + 2; // Pick from 2 to 20
    } while (altAnswer === correctAnswer); // If duplicate, try again

    // Convert both answers to strings (jsPsych button choices must be strings)
    let correctAnswerString = correctAnswer.toString();
    let altAnswerString = altAnswer.toString();

    // Randomly put the correct answer on the left or right button
    // This helps prevent participants from just clicking the same side each time
    let choicesArr;
    if (Math.random() < 0.5) {
        choicesArr = [correctAnswerString, altAnswerString];
    } else {
        choicesArr = [altAnswerString, correctAnswerString];
    }

    // Add this trial to the timeline
    timeline.push({
        type: jsPsychHtmlButtonResponse, // makes answer buttons.
        stimulus: `<h3>${num1} + ${num2} = ?</h3>`, // Show the math problem
        choices: choicesArr, // two answer buttons' labels
        data: {
            num1: num1, // Save these numbers for later analysis
            num2: num2,
            correctAnswer: correctAnswer,
            altAnswer: altAnswer
        },
        // This function runs at the end of every trial
        on_finish: function (data) {
            /* 
            When a participant presses a button:
            - data.response is 0 or 1 (the index of the clicked button)
            - choicesArr[data.response] is the label of the button (a string)
            - convert it to a number to compare to correctAnswer
            */
            let answer = Number(choicesArr[data.response]); // Which answer did they click?
            data.answer = answer; // Save their answer to the trial data.
            // Set correct to true only if they selected the correct sum
            data.correct = (answer === correctAnswer);
            // All needed fields are now in the data for each trial
        }
    });
}

// Add a final "thank you" screen to the timeline, with data printout
timeline.push({
    type: jsPsychHtmlButtonResponse, // Ends the experiment
    stimulus: `<h2>Thank you for participating!</h2>
               <p>Click Finish to see your data in the console.</p>`,
    choices: ['Finish'],
    // When this finishes, print all data for math trials to the console
    on_finish: function () {
        /*
        After experiment is over:
        - Get all trials that used the html-button-response plugin (the math)
        - Print out specified fields for each trial in one line per trial 
        */
        let results = jsPsych.data.get().filter({ trial_type: 'html-button-response' }).values();
        console.log("rt,time_elapsed,num1,num2,correctAnswer,altAnswer,answer,correct");
        results.forEach(t => {
            console.log([
                t.rt,               // How long they took to answer
                t.time_elapsed,     // Time since experiment onset
                t.num1,             // First random num generated
                t.num2,             // Second random num generated
                t.correctAnswer,    // Correct sum of randgen nums (one button)
                t.altAnswer,        // incorrect sum (another button)
                t.answer,           // what participant selected
                t.correct           // if they selected correctly 
            ].join(","));
        });
    }
});

// start experiment
jsPsych.run(timeline);

