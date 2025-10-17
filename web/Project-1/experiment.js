let jsPsych = initJsPsych({
    show_progress_bar: true
});


let timeline = [];

// Instructions

let instructions = {

    type: jsPsychHtmlKeyboardResponse,
    stimulus: `

<h2 class="experiment-heading">Welcome to the Distractor Load and Cognitive Processing Speed in Visual Search Task!</h2>
<h2 class="experiment-heading">Instructions</h2>
<p>In this experiment, you will see a series of "word clouds" appear on the screen. Each word cloud contains a selection of words displayed in the same font and size.<br>
<p>Your task is to find and click on the target word. This will always be the same throughout the experiment. The target word will be provided at the top of the screen so you can refer to it during each trial.</p>
<p>Each word cloud may vary in the number of words it contains.</p>
<p>The location of the target word within the word cloud will change each time.</p>
<p>Your goal:Find and click the target word as quickly and as accurately as possible in each word cloud.</p>
<p>Press <span class='key'>SPACE</span> to begin.</p>
`,

    choices: [' ']

}

timeline.push(instructions);


//random cloudsize for each trial
shuffleArray(experimentConditions);

//Create the distractor pool (all words except targetWord)
// Make a new array with all words BUT "ocean"—used for picking distractors

var distractorPool = [];
for (var i = 0; i < wordPool.length; i++) {
    if (wordPool[i] !== "ocean") { // If this word is NOT "ocean"...
        distractorPool.push(wordPool[i]); // ...add it to the list of distractors
    }
}

// all our trial word clouds
var all_trials = [];

// For EVERY trial we build...
for (var i = 0; i < experimentConditions.length; i++) {
    var thisCond = experimentConditions[i]; // Get this trial's condition (cloudSize)
    var cloud = ["ocean"]; // Start each word cloud with only "ocean" (the target)

    //add random distractors until we reach the correct total size
    var usedDistractors = []; // Keep track of distractors we've added for this cloud
    while (cloud.length < thisCond.cloudSize) { // Until cloud is big enough
        shuffleArray(distractorPool);
        var word = distractorPool[0]; // Pick a random distractor word
        if (usedDistractors.indexOf(word) === -1) { // If we haven't added this word yet...
            cloud.push(word); // Add it to this word cloud
            usedDistractors.push(word); // Keep track, to avoid duplicates
        }
    }

    shuffleArray(cloud); //so that target word isn't always first

    // Record this trial setup so we can use it later
    all_trials.push({
        cloudSize: thisCond.cloudSize, // How many words are in the cloud
        target: "ocean", // The target word (always "ocean")
        wordCloud: cloud // The shuffled array of words to show
    });
}


for (let i = 0; i < all_trials.length; i++) {
    timeline.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p>Find the word: <b>ocean</b></p>`,
        choices: all_trials[i].wordCloud,
        data: {
            trial_index: i,
            condition: all_trials[i].cloudSize,
            target: 'ocean',
            wordCloud: all_trials[i].wordCloud
        },
        on_finish: function (data) {
            const response = data.response;
            if (response !== null && all_trials[i].wordCloud[response] === 'ocean') {
                data.correct = true;
            } else {
                data.correct = false;
            }
            console.log(`Trial ${i}: Correct? ${data.correct}`);
        }
    });
}


//save results
let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO_KEYS'],
    stimulus: `
        <h1>Please wait...</h1>
        <span class="loader"></span>
        <p>We are saving the results of your inputs.</p>
        `,
    on_start: function () {


        let prefix = 'Visual Search Task';
        let dataPipeExperimentId = 'Oe3be8zN6vR5';
        let forceOSFSave = true;


        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();


        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');


        let isLocalHost = window.location.href.includes('localhost');

        let destination = '/save';
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/';
        }

        // Send the results to our saving end point
        fetch(destination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: dataPipeExperimentId,
                filename: prefix + '-' + participantId + '.csv',
                data: results,
            }),
        }).then(data => {
            console.log(data);
            jsPsych.finishTrial();
        })
    }
}
timeline.push(resultsTrial);


console.log(all_trials);

let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
<h1>Thank you!</h1>
<p>This study looked at how the number of words in a word cloud affects how quickly people can find a target word. Your responses will help us learn about attention and distraction.</p>
<p>This kind of research helps psychologists learn how people filter out irrelevant information when searching for something specific, which is important for understanding attentional processes in everyday life.</p>
<p>All of your answers will be kept confidential.</p>
<p>Thank you again for your time and contribution.</p>
<p>You can now close this tab.</p>
`,
    choices: "NO_KEYS",
    on_start: function () {
        jsPsych.progressBar.progress = 1;
    }
};

timeline.push(debriefTrial);


jsPsych.run(timeline);



// ---------- 3. DATA TO RECORD EACH TRIAL
// - condition ("one-word", "five-words", "ten-words")
// - trial number
// - target word
// - list of all words shown (array)
// - selected word
// - correct (boolean)
// - reaction time