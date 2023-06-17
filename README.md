# Admission criteria

- The repository `goit-js-hw-05` has been created
- When submitting homework, there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`.
  Use `<script type="module">` to close the task code in a separate
scope and avoid identifier name conflicts.
- The names of variables and functions are clear, descriptive
- The code is formatted with Prettier

# Task 1

Write a constructor function `Account` that creates an object with properties
`login` and `email'. In the `prototype` of the constructor function, add the `getInfo()` method,
which outputs to the console the values of the `login` and `email` fields of the object that
called it.

```js
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
```

# Task 2

Write a `User` class to create a user with the following properties:

- `name' - string
- `age' - number
- `followers' - number

Add the 'getInfo()` method, which outputs the string:
`User ${name} is ${age} years old and has ${number of followers} followers`

```js
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
```

# Task 3

Write a `Storage` class that will create objects for warehouse management
goods. When called, it will receive one argument - the initial array of goods, and
write it to the `items` property.

Add class methods:

- `GetItems()' - returns an array of current products
- `addItem(item)` - receives a new product and adds it to the current ones
- `removeItem(item)` - receives the product and, if there is one, removes it from the current

```js
const storage = new Storage([
  'Nanitoids',
  'Prolonger',
  'Iron Bugs',
  'Anti-gravity',
]);

const items = storage.GetItems();
console.table(items); // [ "Nanitoids", "Prolonger", "Iron bugs", "Antigrav"]

storage.addItem('Droid');
console.table(storage.items); // [ "Nanitoids", "Prolonger", "Iron bugs", "Antigrav", "Droid" ]

storage.removeItem('Prolonger');
console.table(storage.items); // [ "Nanitoids", "Iron bugs", "Antigrav", "Droid" ]
``

# Task 4

Write the `StringBuilder` class. It receives one parameter as input - a string,
which it writes to the `_value` property.

Add the following functionality to the class:

- Getter `value` - returns the current value of the `_value' field
- The `append(str)` method - gets the parmeter str (string) and adds it to the end
  `_value`
- The `prepend(str)` method - gets the parmeter str (string) and adds it to the beginning
  value
- The `pad(str)` method - gets the parmeter str (string) and adds it to the beginning and
end of `_value`

```js
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
```

# Task 5

Write a `Car` class with the specified properties and methods.

```js
class Car {
  /*
   * Add the static method `getSpecs(car)`,
   * which takes the machine object as a parameter and outputs
   * in the console, the values of the maxSpeed, speed, isOn, distance and price properties.
   */

  /*
   * The constructor gets the settings object.
   *
   * Add the properties of the future instance of the class:
* speed - the current speed, initially 0
* price - the price of the car
   * maxSpeed - maximum speed
   * isOn - whether the car is started, the values are true or false. Initially false
   * distance - total mileage, initially 0
*/
constructor() {}

  /*
   * Add a getter and setter for the price property,
   * which will work with the car price property.
   */

  /*
   * Add a code to start the car
   * Writes the value true to the isOn property
*/
TurnOn() {}

  /*
   * Add a code to mute the car
   * Writes the value false to the isOn property,
* and resets the current speed to 0
*/
turnOff() {}

  /*
   * Appends the received value to the speed property,
   * provided that the resulting speed
   * no more than the value of the maxSpeed property
*/
accelerate(value) {}

  /*
   * Subtracts the received value from the speed property,
   * provided that the resulting velocity is not less than zero
   */
  decelerate(value) {}

  /*
   * Adds a kilometer (hours * speed) to the distance field,
   * but only if the car is started!
   */
  drive(hours) {}
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
```
