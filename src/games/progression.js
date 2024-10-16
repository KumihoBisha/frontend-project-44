import getRandomNumber from '../getRandomNumber.js';
import runBrainGameStructure from '../index.js';

const generateProgression = (startingElement, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const progressionElement = startingElement + step * i;
    progression.push(progressionElement);
  }
  return progression;
};

const runBrainProgressionGameRound = () => {
  const progressionStart = getRandomNumber(1, 9);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = 10;

  const progression = generateProgression(progressionStart, progressionStep, progressionLength);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);

  const answer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const playBrainProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  runBrainGameStructure(description, runBrainProgressionGameRound);
};

export default playBrainProgressionGame;
