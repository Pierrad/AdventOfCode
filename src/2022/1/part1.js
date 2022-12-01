const { read } = require('../../utils/file');
const { sum } = require('../../utils/math');

const main = () => {
  const input = read('./input.txt');
  const elves = input.split('\n\n');
  const elvesSumCalories = elves.map((elf) => {
    const foods = elf.split(/\n/).filter((food) => food !== '');
    return sum(foods);
  });
  return Math.max(...elvesSumCalories);
};

console.log(main());