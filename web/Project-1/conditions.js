// Define the word pool - ideally 20+ words for flexibility
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


// shuffleArray function taught via AI 
// Fisher-Yates shuffle algorithm

function shuffleArray(array) { // Function to shuffle an array in place
    for (let i = array.length - 1; i > 0; i--) { // Start from last index, move backwards to the first
        let j = Math.floor(Math.random() * (i + 1)); // Pick random index from 0 to i (inclusive)
        let temp = array[i]; // Store current element in a temporary variable
        array[i] = array[j]; // Replace current element with element at random index
        array[j] = temp; // Move the original current element to the random position
    }
}





