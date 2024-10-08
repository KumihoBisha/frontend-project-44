import getRandomInt from '../randomint.js';
import brainGameStructure from '../index.js';

const playBrainProgressionGame = () => {
  const makeProgression = () => {
    const progression = [];
    const stepProgression = getRandomInt(1, 10);
    const startProgression = getRandomInt(1, 9);
    let step = 0;
    for (let i = 0; i < 10; i += 1) {
      progression.push(startProgression + step);
      step += stepProgression;
    }
    return progression;
  };

  const hideElement = (progression) => {
    const hiddenElementIndex = getRandomInt(0, progression.length - 1);
    const hiddenElement = progression[hiddenElementIndex];
    const progressionWithHiddenElement = progression.slice();
    progressionWithHiddenElement[hiddenElementIndex] = '..';
    return [progressionWithHiddenElement, hiddenElement];
  };

  const brainProgressionGameRound = () => {
    const [progression, hiddenElement] = hideElement(makeProgression());
    const question = progression.join(' ');
    const correctAnswer = hiddenElement;
    return [question, correctAnswer];
  };

  const rules = 'What number is missing in the progression?';
  brainGameStructure(rules, brainProgressionGameRound);
};

export default playBrainProgressionGame;
