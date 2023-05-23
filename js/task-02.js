// Write a class called User for creating a user with the following properties:
// name - string
// age - number
// followers - number
// Add a method called getInfo() that outputs the following string: 
// "User ${name} is ${age} years old and has ${number of followers} followers".

class User {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.followers = userData.followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
    );
  }
}

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
