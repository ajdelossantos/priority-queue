// We'll need these additional modules
const ascendingComparator = require('./ascendingComparator');
const childIndices = require('./childIndices');

/* Game plan: track the root node, swap it with either its children until the heap property is restored

1. Start with the root node
2. Compare it to its children
3. Swap it with the smallest/largest child
4. Repeat
4. Stop when the node is in the right place

*/

// For input flexibility, we're passing in an object as the argument. Label your inputs carefully!
const heapifyDown = ({
  inputArray,
  parentIndex,
  comparisonFunction = ascendingComparator,
  length = inputArray.length
}) => {
  // An iterative implementation. Recursion also works.
  let isHeap = false;

  // To start, let's grab the root node and its children
  let currentIndex = parentIndex;
  let currentNode = inputArray[currentIndex];
  let currentChildIndices = childIndices(length, currentIndex);

  while (!isHeap) {
    // Grab the values of the current children
    const currentChildren = currentChildIndices.map(index => inputArray[index]);

    // Descriptive variable names for readability
    let leftChildIndex, rightChildIndex, leftChild, rightChild;

    // ES6 array destructure syntax for variable assignment
    [leftChildIndex, rightChildIndex] = currentChildIndices;
    [leftChild, rightChild] = currentChildren;

    // Check if either child needs to bubble up; see ascendingComparator.js for documentation
    if (
      comparisonFunction(currentNode, leftChild) > 0 ||
      comparisonFunction(currentNode, rightChild) > 0
    ) {
      // Initialize a pointer to hold a swap index
      let swapIndex;

      // In a min heap, swap with the smallest child. In a max heap, swap with the largest child.
      // If there's no right child, just swap with the left
      if (comparisonFunction(leftChild, rightChild) < 0 || !rightChild) {
        swapIndex = leftChildIndex;
      } else {
        swapIndex = rightChildIndex;
      }

      // Perform the swap.
      [inputArray[currentIndex], inputArray[swapIndex]] = [
        inputArray[swapIndex],
        inputArray[currentIndex]
      ];

      // Reset the current pointers to the node you just swapped with
      currentIndex = swapIndex;
      currentNode = inputArray[currentIndex];
      currentChildIndices = childIndices(length, currentIndex);
    } else {
      // If at any point no swap is needed, then your heap property is restored!
      isHeap = true;
    }
  }

  return inputArray;
};

module.exports = heapifyDown;
