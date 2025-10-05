/*


let conditions = [];
for (let i = 0; i < 3; i++) {
    //Generate two random numbers (num1 and num2)
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    //Calculate the correct answer (sum)
    let correctAnswer = num1 + num2;

    conditions.push({ num1, num2, correctAnswer });

}

*/

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

