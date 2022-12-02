const { read } = require('../../utils/file');
const { sum } = require('../../utils/math');

const getOpponentMove = {
  'A': 'rock',
  'B': 'paper',
  'C': 'scissors',
}

const getExpectedResult = {
  'X': 'lose',
  'Y': 'draw',
  'Z': 'win',
}

const getScoreBasedOnMoveSelected = {
  'rock': 1,
  'paper': 2,
  'scissors': 3,
}

const getScoreBasedOnResult = {
  'win': 6,
  'draw': 3,
  'lose': 0,
}

const getPlayerMove = (opponent, expected) => {
  const moves = ['rock', 'paper', 'scissors'];
  const opponentMove = moves.indexOf(getOpponentMove[opponent]);
  const expectedResult = getExpectedResult[expected];
  if (expectedResult === 'win') {
    return moves[(opponentMove + 1) % 3];
  }
  if (expectedResult === 'lose') {
    return moves[(opponentMove + 2) % 3];
  }
  return moves[opponentMove];
}

const main = () => {
  const input = read('./input.txt');
  const rounds = input.split('\n').filter((round) => round !== '');
  const scores = rounds.map((round) => {
    const [opponent, expected] = round.split(' ');
    return getScoreBasedOnMoveSelected[getPlayerMove(opponent, expected)] + getScoreBasedOnResult[getExpectedResult[expected]];
  });
  return sum(scores);
};

console.log(main());