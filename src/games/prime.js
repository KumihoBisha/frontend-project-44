import getRandomNumber from '../getRandomNumber.js';
import isPrime from '../isPrime.js';
import runBrainGameStructure from '../index.js';

const playBrainPrimeGame = () => {
  const runBrainPrimeGameRound = () => {
    const randomNumber = getRandomNumber(1, 100);
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
    return [randomNumber, answer];
  };

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runBrainGameStructure(rules, runBrainPrimeGameRound);
};

export default playBrainPrimeGame;
