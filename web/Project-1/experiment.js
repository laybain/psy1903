let wordPool = [
    "apple", "table", "ocean", "cloud", "chair", "house", "banana", "garden",
    "lemon", "door", "window", "flower", "train", "biscuit", "zipper",
    "tree", "pencil", "pillow", "street", "camera"
];

// Always the same target
let targetWord = "ocean";

// 5 trials at each cloud size (1, 5, 10)
let experimentConditions = [
    { cloudSize: 1 }, { cloudSize: 1 }, { cloudSize: 1 }, { cloudSize: 1 }, { cloudSize: 1 },
    { cloudSize: 5 }, { cloudSize: 5 }, { cloudSize: 5 }, { cloudSize: 5 }, { cloudSize: 5 },
    { cloudSize: 10 }, { cloudSize: 10 }, { cloudSize: 10 }, { cloudSize: 10 }, { cloudSize: 10 }

];


function shuffleNoConsecutiveRepeats(arr, key) {

    // Step 1: Split by key
    let buckets = {};
    arr.forEach(item => {
        if (!buckets[item[key]]) buckets[item[key]] = [];
        buckets[item[key]].push(item);
    });

    let result = [], lastType = null;
    while (result.length < arr.length) {
        // Candidates: all types except lastType, and which have any left
        let possibleTypes = Object.keys(buckets).filter(type => type != lastType && buckets[type].length > 0);
        if (possibleTypes.length === 0) {
            // If only one type left (i.e., at the very end), must allow repeat
            possibleTypes = Object.keys(buckets).filter(type => buckets[type].length > 0);
        }
        // Randomly pick one of possibleTypes
        let type = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
        let trial = buckets[type].pop();
        result.push(trial);
        lastType = type;
    }
    return result;
}

//AI used to create this function that shuffles the array of cloudsize so that no two in a row of trials  are the same

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// shuffleArray function taught via AI 
// Fisher-Yates shuffle algorithm









