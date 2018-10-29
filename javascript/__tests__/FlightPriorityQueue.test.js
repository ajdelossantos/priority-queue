const Passenger = require('../classes/Passenger');
const FlightPriorityQueue = require('../FlightPriorityQueue');

describe('FlightPriorityQueue', () => {
  const passenger1 = new Passenger({
    name: 'A',
    tier: 0,
    seatClass: 0,
    checkInTime: 3
  });

  const passenger2 = new Passenger({
    name: 'B',
    tier: 0,
    seatClass: 0,
    checkInTime: 4
  });

  const passenger3 = new Passenger({
    name: 'C',
    tier: 0,
    seatClass: 1,
    checkInTime: 2
  });

  const passenger4 = new Passenger({
    name: 'D',
    tier: 2,
    seatClass: 1,
    checkInTime: 1
  });

  const passenger5 = new Passenger({
    name: 'E',
    tier: 1,
    seatClass: 1,
    checkInTime: 5
  });

  const passenger6 = new Passenger({
    name: 'F',
    tier: 3,
    seatClass: 2,
    checkInTime: 0
  });

  const passenger7 = new Passenger({
    name: 'G',
    tier: 3,
    seatClass: 2,
    checkInTime: 6
  });

  let testQueue = new FlightPriorityQueue();

  afterEach(() => {
    testQueue = new FlightPriorityQueue();
  });

  describe('#generateBoardingList', () => {
    test('should output an array of strings', () => {
      testQueue.enqueue(passenger7);
      const firstPassengerName = testQueue.generateBoardingList()[0];

      expect(Array.isArray(testQueue.generateBoardingList())).toBe(true);
      expect(typeof firstPassengerName).toBe('string');
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
          testQueue.enqueue(passenger2);

          expect(testQueue.generateBoardingList()).toBe(['B', 'C']);
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

    describe('Gold, silver, and bronze tier passengers', () => {
      test('it should sort by seatClass', () => {
        testQueue.enqueue(passenger6);
        testQueue.enqueue(passenger5);

        expect(testQueue.generateBoardingList()).toBe(['E', 'F']);
      });
      describe('When comparing passengers that have the same seatClass', () => {
        test('it should sort by tier', () => {
          testQueue.enqueue(passenger5);
          testQueue.enqueue(passenger4);

          expect(testQueue.generateBoardingList()).toBe(['D', 'E']);
        });
        describe('When comparing passengers that have the same tier AND seatClass', () => {
          test('it should sort by checkInTime', () => {
            testQueue.enqueue(passenger7);
            testQueue.enqueue(passenger6);

            expect(testQueue.generateBoardingList()).toBe(['F', 'G']);
          });
        });
      });
    });

    describe('When sorting large numbers of passengers, it', () => {
      test('should sort correctly', () => {
        const smallBoardingList = new FlightPriorityQueue();

        smallBoardingList.enqueue(passenger1);
        smallBoardingList.enqueue(passenger3);
        smallBoardingList.enqueue(passenger5);
        smallBoardingList.enqueue(passenger7);
        smallBoardingList.enqueue(passenger6);
        smallBoardingList.enqueue(passenger4);
        smallBoardingList.enqueue(passenger2);

        expect(smallBoardingList.generateBoardingList()).toBe([
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G'
        ]);
      });
    });
  });
});
