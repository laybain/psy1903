//PRODUCTION/OSF SAVING

let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: `
        <h1>Please wait...</h1>
        <p>We are saving the results of your inputs.</p>
        `,
    on_start: function () {
        // ⭐ Set these values for OSF/production:
        let prefix = 'lexical-decision'; // as above
        let dataPipeExperimentId = 'REPLACE-WITH-YOUR-DATAPIPE-ID'; // ⭐ REQUIRED, get from DataPipe dashboard
        let forceOSFSave = true; // ⭐ IMPORTANT: PRODUCTION/OSF SAVE

        // Same data collection as before:
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();

        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

        // Now, we FORCE saving to OSF with forceOSFSave = true
        let isLocalHost = window.location.href.includes('localhost'); // will likely be false
        let destination = '/save';
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/'; // ⭐ THIS is the OSF/PRODUCTION save endpoint
        }

        // ⭐ This POST sends results to DataPipe, which stores them on OSF
        fetch(destination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: dataPipeExperimentId, // ⭐ Must be set correctly!
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