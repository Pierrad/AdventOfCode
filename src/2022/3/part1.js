const { read } = require('../../utils/file');
const { sum } = require('../../utils/math');

const getWrongItem = (backpack) => {
  const middle = backpack.length / 2;
  const firstHalf = backpack.slice(0, middle).split('');
  const secondHalf = backpack.slice(middle).split('');
  const wrongItem = firstHalf.find((item) => secondHalf.includes(item));
  return wrongItem;
};

const calculatePriorities = (item) => {
  const itemCode = item.charCodeAt(0);
  if (itemCode >= 97 && itemCode <= 122) {
    return itemCode - 96;
  }
  if (itemCode >= 65 && itemCode <= 90) {
    return itemCode - 38;
  }
  return 0;
};

const main = () => {
  const input = read('./input.txt');
  const backpacks = input.split('\n').filter((backpack) => backpack !== '');
  const wrongItems = backpacks.map((backpack) => getWrongItem(backpack));
  const priorities = wrongItems.map((item) => calculatePriorities(item));
  return sum(priorities);
};

console.log(main());
