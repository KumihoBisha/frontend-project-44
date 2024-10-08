import getRandomInt from '../randomint.js';
import brainGameStructure from '../index.js';

const playBrainGcdGame = () => {
  const getGreatestCommonDivisor = (firstNum, secondNum) => {
    if (secondNum !== 0) {
      const remainder = firstNum % secondNum;
      return getGreatestCommonDivisor(secondNum, remainder);
    }
    return firstNum;
  };

  const brainGcdGameRound = () => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();

    const question = `${num1} ${num2}`;
    const correctAnswer = getGreatestCommonDivisor(num1, num2);
    return [question, correctAnswer];
  };

  const rules = 'Find the greatest common divisor of given numbers.';
  brainGameStructure(rules, brainGcdGameRound);
};

export default playBrainGcdGame;
