// @flow

import readlineSync from 'readline-sync';


const greeting = 'Welcome to Brain Games!';

export default (
  startMessage: string,
  getQuestion: Function,
) => {
  console.log(greeting);
  console.log(startMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (roundsLeft: number = 3) => {
    let newRounds = roundsLeft;
    if (roundsLeft < 1) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const { question, correctAnswer } = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      newRounds = roundsLeft - 1;
      console.log('Correct!');
      return iter(newRounds);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    return false;
  };
  return iter();
};
