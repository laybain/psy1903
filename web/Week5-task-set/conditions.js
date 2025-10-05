let conditions = [];

for (let i = 0; i < 3; i++) {

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = (num1 + num2);

    let condition = {
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer
    };
    conditions.push(condition)
};
console.log(conditions)


