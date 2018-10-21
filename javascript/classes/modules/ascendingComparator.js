// Use as a callback for sorting integers
// You probably don't want to edit this...
const ascendingComparator = (x, y) => {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = ascendingComparator;
