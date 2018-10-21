const faker = require('faker');
const fs = require('fs');

const testData = [];

function randomizeSeatClass() {
  let rng = Math.random();

  if (rng < 0.7) {
    return 2;
  } else if (rng < 0.9) {
    return 1;
  } else {
    return 0;
  }
}

function randomizeTier() {
  let rng = Math.random();

  if (rng < 0.6) {
    return 3;
  } else if (rng < 0.8) {
    return 2;
  } else if (rng < 0.95) {
    return 1;
  } else {
    return 0;
  }
}

function generateTestData() {
  console.log('hi');
  for (let i = 0; i < 200; i++) {
    const passenger = {
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      tier: randomizeTier(),
      seatClass: randomizeSeatClass(),
      checkInTime: i
    };

    testData.push(passenger);
  }
}

generateTestData();

fs.writeFile('testDataSmall.json', JSON.stringify(testData), err => {
  if (err) throw err;
  console.log('Success!');
});
