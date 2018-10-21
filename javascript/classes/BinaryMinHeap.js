const ascendingComparator = require('./modules/ascendingComparator'); // Callback for ascendingHeapSort
const childIndices = require('./modules/childIndices');
const parentIndex = require('./modules/parentIndex');
const heapifyUp = require('./modules/heapifyUp');
const heapifyDown = require('./modules/heapifyDown');

class BinaryMinHeap {
  constructor(comparisonFunction = ascendingComparator) {
    this.store = [];
    this.count = this.count.bind(this); // for safety
    this.comparisonFunction = comparisonFunction;
  }

  // O(1)
  count() {
    return this.store.length;
  }

  // O(1)
  peek() {
    return this.store[0];
  }

  // O(log n)
  push(int) {
    // First, push the new value into the store
    this.store.push(int);

    // Restore the heap property, starting from the new leaf node and bubbling up
    BinaryMinHeap.heapifyUp({
      inputArray: this.store,
      childIndex: this.count() - 1,
      comparisonFunction: this.comparisonFunction
    });

    // Finally, return the store
    return this.store;
  }

  // O(log n)
  // We want to extract the first element! So...
  extract() {
    // First, swap the first and last element of the store
    [this.store[0], this.store[this.count() - 1]] = [
      this.store[this.count() - 1],
      this.store[0]
    ];

    // Next, pop off the element we want
    const extractedElement = this.store.pop();

    // Restore the heap property, starting from the new root node and bubbling down
    BinaryMinHeap.heapifyDown({
      inputArray: this.store,
      parentIndex: 0,
      comparisonFunction: this.comparisonFunction
    });

    // Finally, return the extracted element
    return extractedElement;
  }

  toString() {
    return `
      BinaryMinHeap { 
        store: [${this.store.map(
          (el, idx) => (idx === 0 ? `${el}` : ` ${el}`)
        )}],
        length: ${this.count()}
      }
    `;
  }

  /*==================================================
    See modules for implementation of class methods
  ==================================================*/

  static childIndices(length, index) {
    return childIndices(length, index);
  }

  static parentIndex(index) {
    return parentIndex(index);
  }

  static heapifyUp({
    inputArray,
    childIndex,
    comparisonFunction = ascendingComparator,
    length = inputArray.length
  }) {
    return heapifyUp(arguments[0]);
  }

  static heapifyDown({
    inputArray,
    parentIndex,
    comparisonFunction = ascendingComparator,
    length = inputArray.length
  }) {
    return heapifyDown(arguments[0]);
  }
}

module.exports = BinaryMinHeap;
