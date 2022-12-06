const { read } = require('../../utils/file');

const NUMBER_OF_LETTERS = 14;

const checkIfGroupIsComplete = (group) => {
  const unique = [...new Set(group)];
  return unique.length === NUMBER_OF_LETTERS;
};

const main = () => {
  const buffer = read('./input.txt');
  const letters = buffer.split('').filter((letter) => letter !== '\n');
  const groups = [];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (groups.length === NUMBER_OF_LETTERS) {
      groups.shift();
    }
    groups.push(letter);
    if (checkIfGroupIsComplete(groups)) {
      return i + 1;
    }
  }
};

console.log(main());