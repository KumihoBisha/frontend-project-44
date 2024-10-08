import getRandomInt from '../randomint.js';
import brainGameStructure from '../index.js';

const playBrainCalcGame = () => {
  const getCorrectAnswer = (operator, firstNum, secondNum) => {
    switch (operator) {
      case '+':
        return firstNum + secondNum;
      case '-':
        return firstNum - secondNum;
      case '*':
        return firstNum * secondNum;
      default:
        throw new Error(`Wrong operator ${operator}`);
    }
  };

  const brainCalcGameRound = () => {
    const operators = ['+', '-', '*'];
    const index = getRandomInt(0, operators.length - 1);

    const num1 = getRandomInt();
    const num2 = getRandomInt();

    const question = `${num1} ${operators[index]} ${num2}`;
    const correctAnswer = getCorrectAnswer(operators[index], num1, num2);
    return [question, correctAnswer];
  };

  const rules = 'What is the result of the expression?';
  brainGameStructure(rules, brainCalcGameRound);
};

export default playBrainCalcGame;
