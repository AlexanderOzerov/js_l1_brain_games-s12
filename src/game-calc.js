// @flow

import play from './index';
import { getRandomInt, getRandomSign } from './tools';


const startMessage = 'What is the result of the expression?\n';

const makeQuestion = () =>
 `${getRandomInt(0, 100)} ${getRandomSign()} ${getRandomInt(0, 100)}`;

const checkAnswer = value => value !== '';

const countAnswer = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    default:
      return Number(num1) * Number(num2);
  }
};

const getCorrectAnswer = (value) => {
  const [num1, sign, num2] = value.split(' ');
  return String(countAnswer(num1, sign, num2));
};

export default () => {
  play(startMessage, makeQuestion, checkAnswer, getCorrectAnswer);
};
