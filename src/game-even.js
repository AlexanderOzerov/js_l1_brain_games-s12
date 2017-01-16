// @flow

import readlineSync from 'readline-sync';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getAnswer = () => {
  const iter = (tries = 3) => {
    if (tries < 1) {
      console.log('Your answer switched to \'no\'');
      return 'no';
    }
    const answer = readlineSync.question('Your answer: ');
    switch (answer.toLowerCase()) {
      case 'yes':
        return 'yes';
      case 'no':
        return 'no';
      default:
        console.log('Your answer is invalid, please try \'yes\' or \'no\'.');
        break;
    }
    return iter(tries - 1);
  };
  return iter();
};

const play = (name, rounds = 3) => {
  const iter = (roundsLeft) => {
    let newRounds = roundsLeft;
    if (roundsLeft < 1) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const question = getRandomInt(0, 100);
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      newRounds = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      return false;
    }
    newRounds = roundsLeft - 1;
    console.log('Correct!');
    return iter(newRounds);
  };
  return iter(rounds);
};

export default () => {
  const greeting = `Welcome to Brain Games!
Answer "yes" if number odd otherwise answer "no".\n`;

  console.log(greeting);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  play(userName);
};
