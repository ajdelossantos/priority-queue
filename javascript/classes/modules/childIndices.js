// Class-agnostic function to calculate childindices for a binary heap
const childIndices = (length, index) => {
  // Formula for calculating children for zero-indexed arrays => (2i + 1) && (2i + 2)
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  const result = [];

  // For safety, check to see if the indices are in range so we don't pass in 'undefined'
  if (left < length) result.push(left);
  if (right < length) result.push(right);

  // returns left and right child in that order or returns an empty array for leaf nodes
  return result;
};

module.exports = childIndices;
