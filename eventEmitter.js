module.exports.eventEmitter = {
  eventList: {},
  on: (event, fn) => {
    (this.eventList[event] || (this.eventList = [])).push(fn)
    return this.eventList;
  },
  emit: (event) => {
    let tempArr = this.eventList[event];
    if(!tempArr || tempArr.length === 0) {
      return false;
    }

    tempArr.map(fn => {
      
    })
  }
}