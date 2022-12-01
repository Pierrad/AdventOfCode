const sum = (arr, base = 10) => {
  return arr.reduce((a, b) => parseInt(a, base) + parseInt(b, base), 0);
}

module.exports = {
  sum,
};