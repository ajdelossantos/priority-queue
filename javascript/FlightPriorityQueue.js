const BinaryMinHeap = require('./classes/BinaryMinHeap');

class FlightPriorityQueue extends BinaryMinHeap {
  constructor() {
    this.queue = new BinaryMinHeap();
  }

  enqueue() {
    return false;
  }

  generateBoardingList() {
    return [];
  }
}

module.exports = FlightPriorityQueue;
