// @flow

import play from './index';
import { getRandomInt } from './tools';


const startMessage = 'Answer "yes" if number odd otherwise answer "no".';

const makeQuestion = () => getRandomInt(0, 100);

const checkAnswer = (word): boolean => word.toLowerCase() === 'yes' || word.toLowerCase() === 'no';

const getCorrectAnswer = (question) => {
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return answer;
};

export default () => {
  play(startMessage, makeQuestion, checkAnswer, getCorrectAnswer);
};
