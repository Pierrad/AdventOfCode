const fs = require('fs');
const path = require('path');

const read = (filename) => {
  const filePath = path.join(filename);
  return fs.readFileSync(filePath, 'utf8');
};

module.exports = {
  read,
};
