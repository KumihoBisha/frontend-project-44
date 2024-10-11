import getRandomNumber from '../getRandomNumber.js';
import getValueOfExpression from '../getValueOfExpression.js';
import runBrainGameStructure from '../index.js';

const playBrainCalcGame = () => {
  const runBrainCalcGameRound = () => {
    const operators = ['+', '-', '*'];
    const operatorIndex = getRandomNumber(0, operators.length - 1);
    const operator = operators[operatorIndex];

    const number1 = getRandomNumber(1, 99);
    const number2 = getRandomNumber(1, 99);

    const question = `${number1} ${operator} ${number2}`;
    const answer = String(getValueOfExpression(operator, number1, number2));
    return [question, answer];
  };

  const rules = 'What is the result of the expression?';
  runBrainGameStructure(rules, runBrainCalcGameRound);
};

export default playBrainCalcGame;
