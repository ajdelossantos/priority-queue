// We'll need these additional modules
const ascendingComparator = require('./ascendingComparator');
const parentIndex = require('./parentIndex');

/* Game plan: track the rightmost leaf node, swapping it with its parent until the heap property is restored

1. Start with the rightmost leaf
2. Compare it to its parent
3. Swap it with the parent if it's larger/smaller
4. Repeat
5. Stop when the node is in the right place

*/

// For input flexibility, we're passing in an object as the argument. Label your inputs carefully!
const heapifyUp = ({
  inputArray,
  childIndex,
  comparisonFunction = ascendingComparator,
  length = inputArray.length
}) => {
  // An iterative implementation. Recursion also works.
  let isHeap = false;
  // Let's start with the leaf node passed in
  let currentIndex = childIndex;
  let currentNode = inputArray[currentIndex];

  // If the current index is ever 0, you've bubbled up a new root and you're done!
  while (!isHeap && currentIndex !== 0) {
    // Let's grab the current parent
    const currentParentIndex = parentIndex(currentIndex);
    const currentParent = inputArray[currentParentIndex];

    // Check if the parent needs to bubble down
    if (comparisonFunction(currentNode, currentParent) < 0) {
      // If so, swap it!
      [inputArray[currentParentIndex], inputArray[currentIndex]] = [
        inputArray[currentIndex],
        inputArray[currentParentIndex]
      ];

      // Reset the current pointers to the node you just swapped with
      currentIndex = currentParentIndex;
      currentNode = inputArray[currentIndex];
    } else {
      // If at any point no swap is needed, then your heap property is restored!
      isHeap = true;
    }
  }
  return inputArray;
};

module.exports = heapifyUp;
