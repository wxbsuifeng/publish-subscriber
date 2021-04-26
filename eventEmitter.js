
const eventList = {};
let eventEmitter = {
  on: (event, fn) => {
    (eventList[event] || (eventList[event] = [])).push(fn)
    console.log(`订阅了${event}！`)
    return eventEmitter;
  },
  emit: (event) => {
    let fnList = eventList[event];
    if(!fnList || fnList.length === 0) {
      return false;
    }

    fnList.map(fn => {
      fn();
    })
  },
  off: (event, fn) => {
    let fnList = eventList[event];

    if(!fnList || fnList.length === 0) {
      return false;
    }

    if (!fn) {
      fnList && (fnList.length = 0);
      return eventEmitter;
    }

    for(let idx = 0; idx < fnList.length; idx++) {
      if(idx ===  fn) {
        fnList.splice(idx, 1);
        break;
      }
    }
    
    console.log('取消了订阅！')
    return eventEmitter;
  },
  once: (event, fn) => {
    function onceFn (){
      off(event, onceFn);
      fn();
    }

    on(event, onceFn);
    return eventEmitter;
  }
}

module.exports = eventEmitter