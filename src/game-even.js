// @flow

import startGame from './index';
import { getRandomInt } from './tools';


const startMessage = 'Answer "yes" if number odd otherwise answer "no".\n';

const getQuestion = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  startGame(startMessage, getQuestion);
};
