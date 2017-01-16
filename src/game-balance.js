// @flow

import startGame from './index';
import { getRandomInt } from './tools';


const startMessage = 'Balance the given number.\n';

const balance = (n) => {
  const nums = n.split('').map(x => Number(x)).sort();
  while (nums[nums.length - 1] - nums[0] > 1) {
    nums[nums.length - 1] -= 1;
    nums[0] += 1;
    nums.sort();
  }
  return nums.join('');
};

const getQuestion = () => {
  const question = String(getRandomInt(100, 9999));
  const correctAnswer = balance(question);
  return { question, correctAnswer };
};

export default () => {
  startGame(startMessage, getQuestion);
};
