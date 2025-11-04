//DEVELOPMENT/TESTING (Local Saving)

let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: `
        <h1>Please wait...</h1>
        <p>We are saving the results of your inputs.</p>
        `,
    on_start: function () {
        // ⭐ For local saving, set as below:
        let prefix = 'lexical-decision'; // any string to label experiment file
        let dataPipeExperimentId = 'unused-here'; // not used for local
        let forceOSFSave = false; // ⭐ IMPORTANT: LOCAL SAVE

        // ⭐ Collect and format csv data, as in your notes:
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();

        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

        // ⭐ This is for DEVELOPMENT: check if running at localhost
        let isLocalHost = window.location.href.includes('localhost'); // true if developing locally

        let destination = '/save'; // ⭐ This is where local files are POSTED
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/';
        }

        // ⭐ This POST actually sends data to your local /save endpoint, saving file to /data
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