// Write a constructor function called Account that creates an object with properties login and email.
// Add a method called getInfo() to the prototype of the constructor function, which outputs the values of the login and email fields of the object that invokes it to the console.

const Account = function (data) {
  this.login = data.login;
  this.email = data.email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

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
