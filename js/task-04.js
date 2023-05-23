// Write a class called StringBuilder. It takes one parameter - a string - and assigns it to the _value property.

// Add the following functionality to the class:

// Getter value - returns the current value of the _value field.
// Method append(str) - receives a parameter str (a string) and appends it to the end of _value.
// Method prepend(str) - receives a parameter str (a string) and adds it to the beginning of _value.
// Method pad(str) - receives a parameter str (a string) and adds it to both the beginning and the end of _value.

class StringBuilder {
  constructor(data) {
    this._value = data;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
