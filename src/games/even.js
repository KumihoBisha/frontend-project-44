import getRandomNumber from '../getRandomNumber.js';
import runBrainGameStructure from '../index.js';

const isEven = (num) => num % 2 === 0;

const runBrainEvenGameRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const playBrainEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runBrainGameStructure(description, runBrainEvenGameRound);
};

export default playBrainEvenGame;
