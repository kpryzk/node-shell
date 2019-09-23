const fs = require('fs');

module.exports = function(cat) {
  if (cat === 'cat') {
    fs.readFile('./', 'utf8', (err, file) => {
      if (err) {
        throw err;
      } else {
        console.log(file);
        process.stdout.write(file)
      }
    });
  }
};
