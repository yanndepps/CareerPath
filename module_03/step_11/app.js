// key is the name of the property, value is the data the key points to
// objects usually hold multiple properties

const person = {
  name: "rick",
  age: 70,
  friends: ["morthy", "sam", "samantha", "joe"],
  address: {
    street: "123 street",
    city: "somewhere",
  },
};

// two notations for accessing an object's data
// 1. the first one is known as the dot notation ( person.name ) :

// console.log(person.friends[3]);
// console.log(person.address.city);

// 2. the second one is the bracket notation :
// use the string representation of the key we want to access :
console.log(person["address"]["street"]);
