const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const fileName = data.toString().trim().split(' ')[1]

  pwd(cmd);
  ls(cmd);
  cat(cmd, fileName);
  process.stdout.write('\nprompt > ');
})
