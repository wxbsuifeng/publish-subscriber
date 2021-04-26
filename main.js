const eventEmitter = require('./eventEmitter')
const { run } = require('./testSub')

function gameStartFn() {
  console.log('Please press alt + f4 to play games ', this.gameName);
}

class Test {
  constructor() {
    this.gameName = '对局1';
  }

  play() {
    let fn = gameStartFn.bind(this)
    eventEmitter.on('gameStart', fn);
    run();
    eventEmitter.off('gameStart', fn)
  }
}

let test1 = new Test();
test1.play();

