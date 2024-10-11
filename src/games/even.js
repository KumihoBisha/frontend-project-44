import getRandomNumber from '../getRandomNumber.js';
import isEven from '../isEven.js';
import runBrainGameStructure from '../index.js';

const playBrainEvenGame = () => {
  const runBrainEvenGameRound = () => {
    const randomNumber = getRandomNumber(1, 100);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, answer];
  };

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runBrainGameStructure(rules, runBrainEvenGameRound);
};

export default playBrainEvenGame;
