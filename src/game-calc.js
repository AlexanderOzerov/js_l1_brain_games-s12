// @flow

import startGame from './index';
import { getRandomInt, getRandomSign } from './tools';


const startMessage = 'What is the result of the expression?\n';

const getCorrectAnswer = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getQuestion = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const sign = getRandomSign();
  const question = [num1, sign, num2].join(' ');
  const correctAnswer = getCorrectAnswer(num1, sign, num2).toString();
  return { question, correctAnswer };
};

export default () => {
  startGame(startMessage, getQuestion);
};
