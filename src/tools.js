// @flow

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomSign = () => {
  const number = getRandomInt(1, 4);
  switch (number) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};
