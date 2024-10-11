import readlineSync from 'readline-sync';

const roundsCount = 3;

const runBrainGameStructure = (rules, getGameData) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);
  console.log(rules);

  for (let round = 0; round < roundsCount; round += 1) {
    const [description, correctAnswer] = getGameData();
    const userAnswer = readlineSync.question(`Question: ${description}\nYour answer: `);
    if ((correctAnswer) !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runBrainGameStructure;
