// Construct the following classes:
// Driver class:


let driverId = 0;
let passengerId = 0;
let tripId = 0;

var store = {drivers: [], passengers: [], trips: []};

class Driver {
	constructor(name){
		this.name = name;
		this.id = ++driverId;
		store.drivers.push(this);
	}

	trips() {
      return store.trips.filter(trip => {
      	return trip.driverId === this.id;
      });
	}

	passengers() {
		return this.trips().map(trip => {
			return trip.passenger();
		});
	}

}

// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a driver has taken
// passengers() - returns all of the passengers that a driver has taken on a trip
// Passenger class:

class Passenger {
	constructor(name) {
		this.name = name;
		this.id = ++passengerId;
		store.passengers.push(this);
	}

	trips() {
		return store.trips.filter(trip => {
			return trip.passengerId === this.id;
		});
	}

	drivers() {
		return this.trips().map(trip => {
			return trip.driver();
		});
	}
}
// A passenger has many trips, and has many drivers through trips.
// new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a passenger has taken
// drivers() - returns all of the drivers that has taken a passenger on a trip
// Trip class:

class Trip {
	constructor(driver, passenger) {
		this.id = ++tripId;
		this.driverId = driver.id;
		this.passengerId = passenger.id;
		// this.driver = driver;
		// this.passenger = passenger;
		store.trips.push(this);
	}

	driver() {
      return store.drivers.find(driver => {
      	return driver.id === this.driverId;
      });
  	}

  	passenger() {
  	  return store.passengers.find(passenger => {
  	  	return passenger.id === this.passengerId;
  	  });
  	}
}
// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip