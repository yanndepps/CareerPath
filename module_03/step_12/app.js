const car = {
  type: 'honda',
  make: 'civic',
  wheel: 4,
  honkSound: 'BLLEERP',
  honk: function () {
    console.log(this.honkSound);
  }
}

// how to add properties to an object :
// car.hasHadAccident = true;
// console.log(car);

// objects can hold functions
// a function within an object is then refered to as a method
// call our method using () :
// car.honk();

// using the this keyword inside of an object : the object refers to itself
// car.honk();

// Objects and Arrays are passed by reference : how variables interact with this piece of data :
const newCar = car;
newCar.type = 'jeep';
console.log(newCar.type);
console.log(car.type);

// we now have two variables pointing to the same object in memory ...
