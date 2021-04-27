const eventEmitter = require('./eventEmitter')
module.exports.run = function() {
  return eventEmitter.emit('gameStart');
}