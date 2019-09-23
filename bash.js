const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const fileName = data.toString().split(' ')

  console.log(fileName)
  pwd(cmd);
  ls(cmd);
  cat(cmd);
  process.stdout.write('\nprompt > ');
})

  // process.stdout.write('You typed: ' + cmd);
