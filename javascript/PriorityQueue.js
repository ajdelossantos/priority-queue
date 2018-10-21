const BinaryMinHeap = require('./classes/BinaryMinHeap');
const testData = require('./test_data/testData.json');
const fs = require('fs');

function generatePriorityQueue() {
  const platinumPassengersQueue = testData
    .filter(passenger => passenger.tier === 0)
    .sort((x, y) => x.seatClass - y.seatClass || x.checkInTime - y.checkInTime);

  const firstClassPassengersQueue = testData
    .filter(passenger => passenger.seatClass === 0)
    .filter(passenger => passenger.tier != 0)
    .sort((x, y) => x.tier - y.tier || x.checkInTime - y.checkInTime);

  const businessClassPassengersQueue = testData
    .filter(passenger => passenger.seatClass === 1)
    .filter(passenger => passenger.tier != 0)
    .sort((x, y) => x.tier - y.tier || x.checkInTime - y.checkInTime);

  const economyClassPassengersQueue = testData
    .filter(passenger => passenger.seatClass === 2)
    .filter(passenger => passenger.tier != 0)
    .sort((x, y) => x.tier - y.tier || x.checkInTime - y.checkInTime);

  return [].concat(
    platinumPassengersQueue,
    firstClassPassengersQueue,
    businessClassPassengersQueue,
    economyClassPassengersQueue
  );
}

const sortedTestData = generatePriorityQueue();
console.log(sortedTestData);
// fs.writeFile('sortedTestData.json', JSON.stringify(sortedTestData), err => {
//   if (err) throw err;
//   console.log('Success!');
// });
