// loops
// used to run code a certain amount of times or until a certain condition is met.

// for (let i = 0; i < 100; i++) {
//   console.log(i + ' ' + 'x fuck you switerland!');
// }

// const favFoods = ['pizza', 'pasta', 'banana', 'cheese'];
// 1.
// for (let i = 0; i < 4; i++) {
//   console.log(favFoods[i]);
// }
// 2.
// for (let i = 0; i < favFoods.length; i++) {
//   console.log(favFoods[i]);
// }

// odd or even
// const nums = [1,2,3,4,5,6];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     console.log(nums[i]);
//   }
// }

// while
// let count = 0;
// while(count < 10) {
//   console.log('hi');
//   count++;
// }

//Loop through the following array and count how many "computer" there are. Log the final count:
// const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp","stapler", "computer",  "computer"];
// let counter = 0;

// for(let i = 0; i < officeItems.length; i++) {
//   if (officeItems[i] === 'computer') {
//     counter += 1;
//   }
// }

// console.log(counter);

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
// Optional bonus challenges for this problem
// #1 - Log to the console a personalized message like:
// Mike is not old enough to see the movie

// #2 - Check to see if the movie goer is a male or female for an even more personalized message.
// Mike is not old enough to see the movie, don't let HIM in.
// or
// Madeline is old enough. SHE'S good to see the movie.

const movieGoers = [
  {
    name: 'Mike',
    age: 12,
    gender: 'male'
  },
  {
    name: 'Madeline',
    age: 80,
    gender: 'female'
  },
  {
    name: 'Cheryl',
    age: 22,
    gender: 'female'
  },
  {
    name: 'Sam',
    age: 30,
    gender: 'male'
  },
  {
    name: 'Suzy',
    age: '4',
    gender: 'female'
  }
]

for (let i = 0; i < movieGoers.length; i++) {
  if (movieGoers[i].age >= 18 && movieGoers[i].gender === 'male') {
    console.log(`${movieGoers[i].name} is old enough. He is good to see the movie`);
  } else if (movieGoers[i].age >= 18 && movieGoers[i].gender === 'female') {
    console.log(`${movieGoers[i].name} is old enough. She is good to see the movie`);
  } else if (movieGoers[i].age < 18 && movieGoers[i].gender === 'male') {
    console.log(`${movieGoers[i].name} is not old enough, don't let him in`);
  } else if (movieGoers[i].age < 18 && movieGoers[i].gender === 'female') {
    console.log(`${movieGoers[i].name} is not old enough, don't let her in`);
  }
}

// for( var i = 0; i < movieGoers.length; i++) {
//   if( movieGoers[i].age >= 18 ) {

//     if( movieGoers[i].gender === "male") {
//       console.log(movieGoers[i].name + " is old enough, he's good to see the movie");
//     } else {
//       console.log(movieGoers[i].name + " is old enough, she's good to see the movie");
//     }

//   } else {
//     if( movieGoers[i].gender === "male") {
//       console.log(movieGoers[i].name + " is not old enough to see the movie, don't let HIM in.");
//     } else {
//       console.log(movieGoers[i].name + " is not old enough to see the movie, don't let HER in.");
//     }
//   }
// }
