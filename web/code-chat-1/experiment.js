let jsPsych = initJsPsych();
let timeline = [];

// Welcome trial will go here


let consentTrial = {

    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h2 class="experiment-heading">Welcome to the Distractor Load and Cognitive Processing Speed in Visual Search Task!</h2>

    <p> The experiment you are about to complete is an educational exercise designed for PSY 1903: Programming for Psychological Scientists; it is not intended as a true scientific experiment.
    <p> No identifying information will be collected, data will not be shared beyond our class, and your participation is completely voluntary.
    <p> If you have any questions, please reach out to Annabella Ritzau (aritzau@college.harvard.edu), one of the researchers.
    <p> If you agree to participate, press <span class= 'key'> SPACE</span> to begin. </p> 
    `,
    choices: [' ']

};

timeline.push(welcome_Page);


let instructionsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `

    <h1>Welcome to the Experiment!</h1>
    <h1 class='welcomeHeader'>Welcome!</h1> 
    <p>In this experiment, you will be shown a series of words.</p>
    <p>Press the letter <span class='key'>F</span> if the word is positive.</p>
    <p>Press the letter <span class='key'>J</span> if the word is negative.</p>
    <p>Press <span class='key'>SPACE</span> to begin.</p>
    `,

    choices: [' ']
};
timeline.push(instructionsTrial);


conditions = jsPsych.randomization.repeat(conditions, 1);

for (let condition of conditions) {
    // ----- Main Trial -----
    let trial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<h1 class='${condition.valance}'>${condition.word}</h1>`,
        choices: ['f', 'j'],
        data: {
            collect: true,
            word: condition.word,
            valence: condition.valence
        },

        on_finish: function (data) {
            if ((condition.valence === 'positive' && data.response === 'f') ||
                (condition.valence === 'negative' && data.response === 'j')) {
                data.correct = true;
            } else {
                data.correct = false;
            }

        }
    };

    timeline.push(trial);

}

// Debrief trial (already given)
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect', 'isWord']);
        console.log(results.csv());
    }
};
timeline.push(debriefTrial);

jsPsych.run(timeline);

















