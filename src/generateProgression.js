const generateProgression = (startingElement, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const progressionElement = startingElement + step * i;
    progression.push(progressionElement);
  }
  return progression;
};

export default generateProgression;
