const { read } = require('../../utils/file');
const { sum } = require('../../utils/math');

const getWrongItem = (groupOf3Backpack) => {
  const firstBackpack = groupOf3Backpack[0].split('');
  const secondBackpack = groupOf3Backpack[1].split('');
  const thirdBackpack = groupOf3Backpack[2].split('');
  return firstBackpack.find((item) => {
    return secondBackpack.includes(item) && thirdBackpack.includes(item);
  });
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
  const backpacksGrouped = [];
  for (let i = 0; i < backpacks.length; i += 3) {
    backpacksGrouped.push([backpacks[i], backpacks[i + 1], backpacks[i + 2]]);
  }
  const wrongItems = backpacksGrouped.map((groupOf3Backpack) => {
    return getWrongItem(groupOf3Backpack);
  });
  const priorities = wrongItems.map((item) => calculatePriorities(item));
  return sum(priorities);
};

console.log(main());
