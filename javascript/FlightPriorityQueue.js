const BinaryMinHeap = require('./classes/BinaryMinHeap');
const testData = require('./test_data/testData.json');

const comparePlatinumPassengers = (currentPassenger, nextPassenger) => {
  if (currentPassenger.seatClass === nextPassenger.seatClass) {
    return currentPassenger.checkInTime < nextPassenger.checkInTime ? -1 : 1;
  } else {
    return currentPassenger.seatClass < nextPassenger.seatClass ? -1 : 1;
  }
};

const compareSameSeatClassPassengers = (currentPassenger, nextPassenger) => {
  if (currentPassenger.tier === nextPassenger.tier) {
    return currentPassenger.checkInTime < nextPassenger.checkInTime ? -1 : 1;
  } else {
    return currentPassenger.tier < nextPassenger.tier ? -1 : 1;
  }
};

const comparePassengers = (currentPassenger, nextPassenger) => {
  // Isolate platinum members
  // Then sort by seatClass, then tier, then CheckInTime
  if (currentPassenger.tier === 0 && nextPassenger.tier === 0) {
    // console.log(comparePlatinumPassengers(currentPassenger, nextPassenger));
    return comparePlatinumPassengers(currentPassenger, nextPassenger);
  } else if (currentPassenger.seatClass === nextPassenger.seatClass) {
    return compareSameSeatClassPassengers(currentPassenger, nextPassenger);
  } else {
    return currentPassenger.seatClass < nextPassenger ? -1 : 1;
  }
};

const flightPriorityQueue = new BinaryMinHeap(comparePassengers);

testData.forEach((passenger, idx) => {
  if (idx < testData.length - 1)
    console.log(comparePassengers(passenger, testData[idx + 1]));
});
// testData.forEach(passenger => flightPriorityQueue.push(passenger));
