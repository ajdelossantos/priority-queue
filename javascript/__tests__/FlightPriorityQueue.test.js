const Passenger = require('../classes/Passenger');
const FlightPriorityQueue = require('../FlightPriorityQueue');

describe('FlightPriorityQueue', () => {
  const passenger1 = new Passenger({
    name: 'A',
    tier: 0,
    seatClass: 0,
    checkInTime: 4
  });

  const passenger2 = new Passenger({
    name: 'B',
    tier: 0,
    seatClass: 0,
    checkInTime: 5
  });

  const passenger3 = new Passenger({
    name: 'C',
    tier: 0,
    seatClass: 1,
    checkInTime: 3
  });

  const passenger4 = new Passenger({
    name: 'D',
    tier: 3,
    seatClass: 2,
    checkInTime: 1
  });

  const passenger5 = new Passenger({
    name: 'E',
    tier: 3,
    seatClass: 2,
    checkInTime: 2
  });

  let testQueue = new FlightPriorityQueue();

  afterEach(() => {
    testQueue1 = new FlightPriorityQueue();
  });

  describe('Platinum tier passengers', () => {
    describe('When comparing platinum tier passengers to non-platinum tier passengers, it', () => {
      test('should always sort platinum tier passengers before non-platinum passengers', () => {
        testQueue.enqueue(passenger4);
        testQueue.enqueue(passenger3);

        expect(testQueue.generateBoardingList()).toBe(['C', 'D']);
      });
    });

    describe('When comparing platinum tier passengers to other platinum tier passengers, it', () => {
      test('should sort by seatClass', () => {
        testQueue.enqueue(passenger3);
        testQueue.enqueue(passenger1);

        expect(testQueue.generateBoardingList()).toBe(['A', 'C']);
      });

      describe('When platinum tier passengers have the same seatClass, it', () => {
        test('should sort by checkInTime', () => {
          testQueue.enqueue(passenger2);
          testQueue.enqueue(passenger1);

          expect(testQueue.generateBoardingList()).toBe(['A', 'B']);
        });
      });
    });
  });

  describe('Gold, silver, and bronze tier passengers', () => {});
});
