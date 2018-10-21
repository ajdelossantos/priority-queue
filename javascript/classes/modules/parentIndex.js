// Class-agnostic function that returns a parent index for any given child node in a Binary heap
const parentIndex = index => {
  if (index === 0) {
    // First, throw an error if we reach the root node
    throw new RangeError('root has no parent');
  } else {
    // Inverse operation of calculating children. For zero-indexed arrays, adjust for the off-by-one error.
    return Math.floor((index - 1) / 2);
  }
};

module.exports = parentIndex;
