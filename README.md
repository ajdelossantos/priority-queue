# "Come fly with me!" - A Priority Queue

Your airline needs a way to board passengers onto flights!

# Phase I

## Background Info

`Passengers` have `tiers`:

```
"tiers": {
  0: "platinum",
  1: "gold",
  2: "silver",
  3: "bronze"
}
```

For a given flight, `Passengers` have a `seatClass`:

```
"seatClass": {
  0: "first_class",
  1: "business_class",
  2: "economy_class"
}
```

Design an algorithm that takes in an array of `Passengers` and returns an array representing the order `Passengers` board the plane.

- Platinum class boards first, in the order they checked in

For everyone else,

- Board by `seatClass` first, then by `tier`, then by `checkInTime`

A priority queue sounds perfect!

Be as efficient as possible, aiming for at least sub-polynomial time and space complexities. Can you achieve sub-linear time complexities?

Let's use an object-oriented approach, in preparation for Phase II.

## Input and Output

### Input:

- an array of `Passenger` objects, sorted by check in time

```javascript
// Passenger Schema

  Passenger {
    "id": INT,
    "name": STRING,
    "tier": INT,
    "seatClass": INT,
    "checkInTime": INT // Just treat this like a timestamp
  }

// Input

const inputArray = [
  {
    "id": "cb23b555-611f-402b-9e28-6ef710ebb5f6",
    "name": "Judd Hills",
    "tier": 2,
    "seatClass": 1,
    "checkInTime": 0
  },
  {
    "id": "6832d4e6-b51a-46b8-84ca-6605e80cb8f3",
    "name": "Lina Kirlin",
    "tier": 3,
    "seatClass": 0,
    "checkInTime": 1
  },
  {
    "id": "d3ea4e58-87ff-4b78-b3d8-40fb380c246f",
    "name": "Velva Kihn",
    "tier": 3,
    "seatClass": 2,
    "checkInTime": 2
  },
  {
    "id": "e1e5cfcb-925c-4335-9d11-d9b2f30fccc5",
    "name": "Ernie Moen",
    "tier": 0,
    "seatClass": 0,
    "checkInTime": 3
  },
  {
    "id": "66f7d258-0051-4b16-9f06-8cf243e45e05",
    "name": "Nathan Armstrong",
    "tier": 3,
    "seatClass": 2,
    "checkInTime": 4
  },
]
```

### Output:

- an array of `Passenger` names, representing the order they will board

```javascript
const boardingQueue = new PriorityQueue(inputArray);

boardingList.inspect(); // => ["Ernie Moen", "Lina Kirlin, "Judd Hills", "Velva Kihn", "Nathan Armstrong"]
```

# Phase II

Let's refactor your code and make it "enterprise grade" (lol).

## Info and Constraints

- Your algorithm needs to handle:

  - when someone checks in; `enqueue(passenger)`
  - when someone boards the plane; `dequeue()`
  - when someone cancels; `delete(inputArrayIndex)`

* Assume your input array is always sorted for you.

* Optimize!
