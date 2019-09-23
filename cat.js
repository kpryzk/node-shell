const fs = require('fs');

module.exports = function(cat, fileName) {
  cat = cat.split(' ')[0]

  if (cat === 'cat') {
    fs.readFile(fileName, 'utf8', (err, file) => {
      if (err) {
        throw err;
      } else {
        console.log(file)
      }
    });
  }
};
