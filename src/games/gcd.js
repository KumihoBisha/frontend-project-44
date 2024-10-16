import getRandomNumber from '../getRandomNumber.js';
import runBrainGameStructure from '../index.js';

const getGreatestCommonDivisor = (number1, number2) => {
  if (number2 !== 0) {
    const remainder = number1 % number2;
    return getGreatestCommonDivisor(number2, remainder);
  }
  return number1;
};

const runBrainGcdGameRound = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);

  const question = `${number1} ${number2}`;
  const answer = String(getGreatestCommonDivisor(number1, number2));
  return [question, answer];
};

const playBrainGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runBrainGameStructure(description, runBrainGcdGameRound);
};

export default playBrainGcdGame;
