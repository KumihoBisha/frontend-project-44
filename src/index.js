import readlineSync from 'readline-sync';
import showGreetingUser from './cli.js';

const roundsCount = 3;

const brainGameStructure = (rules, getGameData) => {
  const userName = showGreetingUser();
  console.log(rules);

  for (let score = 0; score < roundsCount; score += 1) {
    const [challenge, correctAnswer] = getGameData();
    const userAnswer = readlineSync.question(`Question: ${challenge}\nYour answer: `);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGameStructure;
