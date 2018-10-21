const BinaryMinHeap = require('../classes/BinaryMinHeap');

describe('BinaryMinHeap', () => {
  describe('indexing functions', () => {
    test('calculates child indices correctly', () => {
      expect(BinaryMinHeap.childIndices(6, 0)).toEqual([1, 2]);
      expect(BinaryMinHeap.childIndices(6, 1)).toEqual([3, 4]);
      expect(BinaryMinHeap.childIndices(6, 2)).toEqual([5]);
    });

    test('calculates parent indices correctly', () => {
      expect(BinaryMinHeap.parentIndex(5)).toEqual(2);
      expect(BinaryMinHeap.parentIndex(4)).toEqual(1);
      expect(BinaryMinHeap.parentIndex(3)).toEqual(1);
      expect(BinaryMinHeap.parentIndex(2)).toEqual(0);
      expect(BinaryMinHeap.parentIndex(1)).toEqual(0);

      function parentIndexOfZero() {
        BinaryMinHeap.parentIndex(0);
      }

      expect(parentIndexOfZero).toThrowError('root has no parent');
    });
  });

  describe('heapify up and down', () => {
    console.log(
      'Remember! heapifyUp and heapifyDown take an object for arguments!'
    );
    test('heapifyDown works correctly', () => {
      const test1 = [7, 4, 5];
      const result1 = [4, 7, 5];

      const test2 = [7, 4, 5, 6, 8];
      const result2 = [4, 6, 5, 7, 8];

      expect(
        BinaryMinHeap.heapifyDown({ inputArray: test1, parentIndex: 0 })
      ).toEqual(result1);
      expect(
        BinaryMinHeap.heapifyDown({ inputArray: test2, parentIndex: 0 })
      ).toEqual(result2);
    });

    test('heapifyUp works correctly', () => {
      const test3 = [4, 5, 1];
      const result3 = [1, 5, 4];

      const test4 = [3, 4, 5, 1];
      const result4 = [1, 3, 5, 4];

      expect(
        BinaryMinHeap.heapifyUp({ inputArray: test3, childIndex: 2 })
      ).toEqual(result3);
      expect(
        BinaryMinHeap.heapifyUp({ inputArray: test4, childIndex: 3 })
      ).toEqual(result4);
    });

    // Callback function passed to heapify turns MinHeap into MaxHeap
    const descendingComparator = (x, y) => {
      if (x < y) {
        return 1;
      } else if (x > y) {
        return -1;
      } else {
        return 0;
      }
    };

    test('heapifyDown with callback works correctly', () => {
      const test5 = [1, 2, 3];
      const result5 = [3, 2, 1];

      const test6 = [1, 5, 4, 3];
      const result6 = [5, 3, 4, 1];

      expect(
        BinaryMinHeap.heapifyDown({
          inputArray: test5,
          parentIndex: 0,
          comparisonFunction: descendingComparator
        })
      ).toEqual(result5);
      expect(
        BinaryMinHeap.heapifyDown({
          inputArray: test6,
          parentIndex: 0,
          comparisonFunction: descendingComparator
        })
      ).toEqual(result6);
    });

    test('heapifyUp with callback works correctly', () => {
      const test7 = [2, 1, 3];
      const result7 = [3, 1, 2];

      const test8 = [4, 3, 1, 5];
      const result8 = [5, 4, 1, 3];

      expect(
        BinaryMinHeap.heapifyUp({
          inputArray: test7,
          childIndex: 2,
          comparisonFunction: descendingComparator
        })
      ).toEqual(result7);
      expect(
        BinaryMinHeap.heapifyUp({
          inputArray: test8,
          childIndex: 3,
          comparisonFunction: descendingComparator
        })
      ).toEqual(result8);
    });
  });

  describe('heap operation', () => {
    test('has a store that starts empty', () => {
      const testHeap0 = new BinaryMinHeap();

      expect(testHeap0.store).toEqual([]);
    });

    test('pushes correctly', () => {
      const testHeap1 = new BinaryMinHeap();

      testHeap1.push(7);
      expect(testHeap1.store).toEqual([7]);

      testHeap1.push(5);
      expect(testHeap1.store).toEqual([5, 7]);

      testHeap1.push(6);
      expect(testHeap1.store).toEqual([5, 7, 6]);

      testHeap1.push(4);
      expect(testHeap1.store).toEqual([4, 5, 6, 7]);
    });

    test('extracts correctly', () => {
      const testHeap2 = new BinaryMinHeap();
      [7, 5, 6, 4].forEach(int => testHeap2.push(int));

      expect(testHeap2.extract()).toEqual(4);
      expect(testHeap2.store).toEqual([5, 7, 6]);

      expect(testHeap2.extract()).toEqual(5);
      expect(testHeap2.store).toEqual([6, 7]);
    });
  });
});
