import getRandomInt from '../randomint.js';
import brainGameStructure from '../index.js';

const playBrainEvenGame = () => {
  const isEven = (num) => num % 2 === 0;

  const brainEvenGameRound = () => {
    const randomInt = getRandomInt(1, 100);
    const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
    return [randomInt, correctAnswer];
  };

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  brainGameStructure(rules, brainEvenGameRound);
};

export default playBrainEvenGame;
