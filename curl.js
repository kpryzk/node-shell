const request = require('request')

module.exports = function(curl, userInput) {
  if (curl === 'curl') {
    request(userInput, function(error, response, body) {
      console.error('error:', error);
      console.log('statusCode:', response && response.statusCode)
      console.log('body:', body)
    })
  }
}
