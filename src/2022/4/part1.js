const { read } = require('../../utils/file');

const getExplicitRange = (range) => {
  const rangeSplitted = range.split('-');
  const start = parseInt(rangeSplitted[0]);
  const end = parseInt(rangeSplitted[1]);
  const explicitRange = [];
  for (let i = start; i <= end; i++) {
    explicitRange.push(i);
  }
  return explicitRange;
};

const isRangeContainedInAnotherRange = (range, anotherRange) => {
  return range.every((number) => anotherRange.includes(number)) || anotherRange.every((number) => range.includes(number));
};

const main = () => {
  const input = read('./input.txt');
  const assignmentPairs = input.split('\n').filter((pair) => pair !== '');
  const assignmentPairsSplitted = assignmentPairs.map((pair) => pair.split(','));
  const explicitAssignmentPairs = assignmentPairsSplitted.map((pair) => {
    return [getExplicitRange(pair[0]), getExplicitRange(pair[1])];
  });
  let numberOfContainedRanges = 0;
  for (let i = 0; i < explicitAssignmentPairs.length; i++) {
    const range = explicitAssignmentPairs[i][0];
    const anotherRange = explicitAssignmentPairs[i][1];
    if (isRangeContainedInAnotherRange(range, anotherRange)) {
      numberOfContainedRanges++;
    }
  }
  return numberOfContainedRanges;
};

console.log(main());