const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  const userInput = data.toString().trim().split(' ')[1]

  pwd(cmd);
  ls(cmd);
  cat(cmd, userInput);
  curl(cmd, userInput)
  process.stdout.write('\nprompt > ');
})
