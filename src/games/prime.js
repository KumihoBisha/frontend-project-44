import getRandomNumber from '../getRandomNumber.js';
import runBrainGameStructure from '../index.js';

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

const runBrainPrimeGameRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const playBrainPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runBrainGameStructure(description, runBrainPrimeGameRound);
};

export default playBrainPrimeGame;
