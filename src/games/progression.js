import getRandomNumber from '../getRandomNumber.js';
import generateProgression from '../generateProgression.js';
import runBrainGameStructure from '../index.js';

const playBrainProgressionGame = () => {
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

  const rules = 'What number is missing in the progression?';
  runBrainGameStructure(rules, runBrainProgressionGameRound);
};

export default playBrainProgressionGame;
