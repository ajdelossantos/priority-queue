const faker = require('faker');

/*
Passengers have tiers:

"tiers": {
  0: "platinum",
  1: "gold",
  2: "silver",
  3: "bronze"
}

For a given flight, Passengers have a seatClass:

"seatClass": {
  0: "first_class",
  1: "business_class",
  2: "economy_class"
}

Passenger Schema

  <Passenger> {
    "id": INT,
    "name": STRING,
    "tier": INT,
    "seatClass": INT,
    "checkInTime": INT
  }
*/

class Passenger {
  constructor({
    id = faker.random.uuid(),
    name = `${faker.name.firstName()} ${faker.name.lastName()}`,
    tier = Passenger.randomizeTier(),
    seatClass = Passenger.randomizeSeatClass(),
    checkInTime
  }) {
    this.id = id;
    this.name = name;
    this.tier = tier;
    this.seatClass = seatClass;
    this.checkInTime = checkInTime;
  }

  static randomizeSeatClass() {
    let rng = Math.random();

    if (rng < 0.7) {
      return 2;
    } else if (rng < 0.9) {
      return 1;
    } else {
      return 0;
    }
  }

  static randomizeTier() {
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
}

module.exports = Passenger;
