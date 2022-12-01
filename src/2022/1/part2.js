const { read } = require('../../utils/file');
const { sortDescending } = require('../../utils/array');
const { sum } = require('../../utils/math');

const main = () => {
  const input = read('./input.txt');
  const elves = input.split('\n\n');
  const elvesSumCalories = elves.map((elf) => {
    const foods = elf.split(/\n/).filter((food) => food !== '');
    return sum(foods);
  });

  const sortedElvesCalories = elvesSumCalories.sort(sortDescending);
  return sum(sortedElvesCalories.slice(0, 3));
};

console.log(main());