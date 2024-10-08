import getRandomInt from '../randomint.js';
import brainGameStructure from '../index.js';

const playBrainPrimeGame = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.floor(num / 2); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const brainPrimeGameRound = () => {
    const randomInt = getRandomInt(1, 100);
    const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';
    return [randomInt, correctAnswer];
  };

  const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';
  brainGameStructure(rules, brainPrimeGameRound);
};

export default playBrainPrimeGame;
