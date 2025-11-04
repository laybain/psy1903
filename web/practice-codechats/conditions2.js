let blocks = [
    {
        title: 'Block 1: Short Words',
        instructions: 'You will see short (3-letter) words or nonwords.',
        conditions: [
            { characters: 'cat', isWord: true },
            { characters: 'bus', isWord: true },
            { characters: 'zim', isWord: false },
            { characters: 'vof', isWord: false }
        ]
    },
    {
        title: 'Block 2: Long Words',
        instructions: 'You will see longer (5-letter) words or nonwords.',
        conditions: [
            { characters: 'apple', isWord: true },
            { characters: 'train', isWord: true },
            { characters: 'bramu', isWord: false },
            { characters: 'elgop', isWord: false }
        ]
    }
];
