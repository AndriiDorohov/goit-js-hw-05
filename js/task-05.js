// Write a class called Car with the specified properties and methods.

class Car {
/*
Add a static method called getSpecs(car),
which takes a car object as a parameter and logs
the values of the properties maxSpeed, speed, isOn, distance, and price to the console.
*/
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price} `,
    );
  }
  /*

The constructor receives a settings object.
Add properties to the future instance of the class:
speed - current speed, initially set to 0
price - car price
maxSpeed - maximum speed
isOn - whether the car is turned on, with values true or false. Initially set to false
distance - total distance traveled, initially set to 0
*/

  constructor(carData) {
    this.speed = 0;
    this._price = carData.price;
    this.maxSpeed = carData.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  /*

Add a getter and a setter for the price property,
which will work with the car price property.
*/
/*

Add code to start the car.
Set the isOn property to true.
*/
  turnOn() {
    this.isOn = true;
  }

  /*

Add code to turn off the car.
Set the isOn property to false,
and reset the current speed to 0.
*/
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

/*

Adds the received value to the speed property,
provided that the resulting speed is not greater than the value of the maxSpeed property.
*/ 
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }

  /*

Subtracts the received value from the speed property,
provided that the resulting speed is not less than zero.
*/
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }

  /*

Adds the mileage (hours * speed) to the distance field,
but only if the car is turned on!
*/
  drive(hours) {
    if (this.isOn) {
      this.distance = this.distance + this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
