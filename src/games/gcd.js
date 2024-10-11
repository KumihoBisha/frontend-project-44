import getRandomNumber from '../getRandomNumber.js';
import getGreatestCommonDivisor from '../getGreatestCommonDivisor.js';
import runBrainGameStructure from '../index.js';

const playBrainGcdGame = () => {
  const runBrainGcdGameRound = () => {
    const number1 = getRandomNumber(1, 99);
    const number2 = getRandomNumber(1, 99);

    const question = `${number1} ${number2}`;
    const answer = String(getGreatestCommonDivisor(number1, number2));
    return [question, answer];
  };

  const rules = 'Find the greatest common divisor of given numbers.';
  runBrainGameStructure(rules, runBrainGcdGameRound);
};

export default playBrainGcdGame;
