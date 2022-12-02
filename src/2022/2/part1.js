const { read } = require('../../utils/file');
const { sum } = require('../../utils/math');

const getOpponentMove = {
  'A': 'rock',
  'B': 'paper',
  'C': 'scissors',
}

const getPlayerMove = {
  'X': 'rock',
  'Y': 'paper',
  'Z': 'scissors',
}

const getScoreBasedOnMoveSelected = {
  'X': 1,
  'Y': 2,
  'Z': 3,
}

const getOutcome = (opponent, player) => {
  const moves = ['rock', 'paper', 'scissors'];
  const playerMove = moves.indexOf(getPlayerMove[player]);
  const opponentMove = moves.indexOf(getOpponentMove[opponent]);
  const diff = playerMove - opponentMove;
  if (diff === 0) {
    return 3;
  }
  if (diff === 1 || diff === -2) {
    return 6;
  }
  return 0;
}

const main = () => {
  const input = read('./input.txt');
  const rounds = input.split('\n').filter((round) => round !== '');
  const scores = rounds.map((round) => {
    const [opponent, player] = round.split(' ');
    return getOutcome(opponent, player) + getScoreBasedOnMoveSelected[player];
  });
  return sum(scores);
};

console.log(main());