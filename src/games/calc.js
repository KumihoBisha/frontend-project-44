import getRandomNumber from '../getRandomNumber.js';
import runBrainGameStructure from '../index.js';

const calculateExpression = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Wrong operator ${operator}`);
  }
};

const runBrainCalcGameRound = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[operatorIndex];

  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculateExpression(operator, number1, number2));
  return [question, answer];
};

const playBrainCalcGame = () => {
  const description = 'What is the result of the expression?';
  runBrainGameStructure(description, runBrainCalcGameRound);
};

export default playBrainCalcGame;
