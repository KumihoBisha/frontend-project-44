const getGreatestCommonDivisor = (number1, number2) => {
  if (number2 !== 0) {
    const remainder = number1 % number2;
    return getGreatestCommonDivisor(number2, remainder);
  }
  return number1;
};

export default getGreatestCommonDivisor;
