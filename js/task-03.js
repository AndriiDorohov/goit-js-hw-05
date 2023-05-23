// Write a class called Storage that creates objects for managing a goods warehouse.
// When called, it will receive one argument - an initial array of goods - and store it in the items property.
// Add the following methods to the class:

// getItems() - returns the current array of goods.
// addItem(item) - receives a new item and adds it to the current goods.
// removeItem(item) - receives an item and, if it exists, removes it from the current goods.

class Storage {
  constructor(goods) {
    this.items = goods;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    while (this.items.includes(item)) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}

const storage = new Storage([
	'Nanoids',
	'Prolonger',
	'Iron Guppies',
	'Antigravitator',
	]);
	
	const items = storage.getItems();
	console.table(items); // [ "Nanoids", "Prolonger", "Iron Guppies", "Antigravitator" ]
	
	storage.addItem('Droid');
	console.table(storage.items); // [ "Nanoids", "Prolonger", "Iron Guppies", "Antigravitator", "Droid" ]
	
	storage.removeItem('Prolonger');
	console.table(storage.items); // [ "Nanoids", "Iron Guppies", "Antigravitator", "Droid" ]
	