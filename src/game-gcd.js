// @flow

import startGame from './index';
import { getRandomInt } from './tools';


const startMessage = 'Find the greatest common divisor of given numbers.\n';

const gcd = (num1, num2) => ((num2 === 0) ? num1 : gcd(num2, num1 % num2));


const getQuestion = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = [num1, num2].join(' ');
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
};

export default () => {
  startGame(startMessage, getQuestion);
};
