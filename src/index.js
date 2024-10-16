import readlineSync from 'readline-sync';

const roundsCount = 3;

const runBrainGameStructure = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);
  console.log(description);

  for (let round = 0; round < roundsCount; round += 1) {
    const [description, correctAnswer] = generateRound();
    console.log(`Question: ${description}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runBrainGameStructure;
