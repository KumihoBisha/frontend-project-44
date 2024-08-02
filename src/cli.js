import readlineSync from 'readline-sync';

const showGreetingUser = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);

  return userName;
};

export default showGreetingUser;
