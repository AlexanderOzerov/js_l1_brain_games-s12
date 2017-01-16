// @flow

import startGame from './index';
import { getRandomInt } from './tools';

const startMessage = 'What number is missing in this progression?\n';

const makeProgression = () => {
  const result = [];
  const startNumber = getRandomInt(1, 20);
  const mult = getRandomInt(2, 10);
  result[0] = startNumber;
  for (let i = 1; i < 10; i += 1) {
    result[i] = result[i - 1] * mult;
  }
  return result.map(x => String(x));
};

const getQuestion = () => {
  const progression = makeProgression();
  const emptyNumber = getRandomInt(0, 10);
  const correctAnswer = progression[emptyNumber];
  progression[emptyNumber] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => {
  startGame(startMessage, getQuestion);
};
