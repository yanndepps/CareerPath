// functions

// function sum(num1, num2) {
//   return num1 + num2;
// }

// calling/executing a function
// use a variable to store a result

// arguments are the datas we're feeding in to have the function executes
// const result = sum(7, 40);
// console.log(result);

// what type of datas can we pass ?
// function myFunc(data) {
//   console.log(typeof data);
// }

// myFunc(1);
// myFunc('hello');
// myFunc(true);
// myFunc([1,2,3,4]);
// myFunc({name: 'joe'});

const numArray = [1, 2, 3, 4, 5, 6];
let message = "";

function loopArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      message = i + " is odd";
      console.log(message);
    } else {
      message = i + " is even";
      console.log(message);
    }
  }
}

loopArray(numArray);
