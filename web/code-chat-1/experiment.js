let jsPsych = initJsPsych();
let timeline = [];

// Welcome trial will go here

let welcomeTrial = {
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
timeline.push(welcomeTrial);

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

















