/*
let jsPsych = initJsPsych();
let timeline = [];

// Welcome trial (first)
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        <h1>Welcome to the Experiment!</h1>
        <p>You will see a series of letter strings.</p>
        <p>If the string is a valid word, press <span class="key">F</span>.</p>
        <p>If the string is NOT a valid word, press <span class="key">J</span>.</p>
        <p>This task has two parts. Press <span class="key">SPACE</span> to start.</p>
    `,
    choices: [' ']
};
timeline.push(welcomeTrial);

// Outer loop: blocks
for (let block of blocks) {
    // Block intro trial
    let blockIntroTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
            <h2>${block.title}</h2>
            <p>${block.instructions}</p>
            <p>Press <span class="key">SPACE</span> to begin this block.</p>
        `,
        choices: [' ']
    };
    timeline.push(blockIntroTrial);

    // Randomize this block's conditions
    let conditions = jsPsych.randomization.repeat(block.conditions, 1);

    // Inner loop: trials in block
    for (let condition of conditions) {
        // Main trial
        let mainTrial = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `<h1>${condition.characters}</h1>`,
            choices: ['f', 'j'],
            data: {
                collect: true,
                block: block.title,
                characters: condition.characters,
                isWord: condition.isWord
            },
            on_finish: function (data) {
                // Determine correctness
                data.correct =
                    (condition.isWord && data.response === 'f') ||
                    (!condition.isWord && data.response === 'j');
            }
        };
        timeline.push(mainTrial);

        let feedbackTrial = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `<h1>Incorrect!</h1>`,
            choices: ['NO KEYS'],
            trial_duration: 1000,
            on_load: function () {
                let lastTrial = jsPsych.data.getLastTrialData().values()[0];
                if (lastTrial.correct) {
                    jsPsych.finishTrial();  // Skips feedback if correct
                }
            }
        };
        timeline.push(feedbackTrial);



        let feedbackTrial = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `<h1>Incorrect!</h1>`,
            choices: ['NO KEYS'],
            trial_duration: 1000, // 1 second
            on_load: function () {
                let lastTrial = jsPsych.data.getLastTrialData().values()[0];
                if (lastTrial.correct) {
                    jsPsych.finishTrial();
                }
            }
        };
        timeline.push(feedbackTrial);

        // ----- Optional: Fixation Trial -----
        let fixationTrial = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `<h1>+</h1>`,
            choices: ['NO KEYS'],
            trial_duration: 500
        };
        timeline.push(fixationTrial);
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
    timeline.push(debriefTrial)
}
jsPsych.run(timeline);




*/

// ---------- 3. DATA TO RECORD EACH TRIAL
// - condition ("one-word", "five-words", "ten-words")
// - trial number
// - target word
// - list of all words shown (array)
// - selected word
// - correct (boolean)
// - reaction time
