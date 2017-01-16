// @flow

import readlineSync from 'readline-sync';


const greeting = 'Welcome to Brain Games!';
const getAnswer = (checkAnswer) => {
  for (;;) {
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkAnswer(userAnswer)) {
      return userAnswer;
    }
    console.log('Please type valid answer');
  }
};

export default (
  startMessage: string,
  makeQuestion: Function,
  checkAnswer: Function,
  getCorrectAnswer: Function,
) => {
  console.log(greeting);
  console.log(startMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (roundsLeft = 3) => {
    let newRounds = roundsLeft;
    if (roundsLeft < 1) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const question = makeQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer(checkAnswer);
    const correctAnswer = getCorrectAnswer(question);
    if (userAnswer === correctAnswer) {
      newRounds = roundsLeft - 1;
      console.log('Correct!');
      return iter(newRounds);
    }
    newRounds = 0;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    return false;
  };
  return iter();
};
