const eventEmitter = require('./eventEmitter')
module.exports.run = function() {
  eventEmitter.emit('gameStart');
}