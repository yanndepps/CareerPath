// social js

const socialBook = {
  name: "John",
  age: 28,
  city: "New York",
  cars: ["BMW", "Mercedes", "Skoda", "Toyota"],
  intro: function () {
    return `hi my name is ${this.name} and I'm from ${this.city}`;
  },
  education: [
    {
      school: "London College",
      degree: "IT Programming",
      startingYear: 2005,
      finishingYear: 2010,
      teachers: [
        {
          name: "David",
          age: 45,
          speciality: "Databases",
        },
        {
          name: "Josh",
          age: 37,
          speciality: "Networks",
        },
      ],
    },
    {
      school: "Harvard",
      degree: "Bachelor in Computer Science",
      startingYear: 2010,
      finishingYear: 2015,
      teachers: [
        {
          name: "Mary",
          age: 37,
          speciality: "Machine Learning",
        },
        {
          name: "Jane",
          age: 34,
          speciality: "English",
        },
      ],
    },
    {
      school: "MIT",
      degree: "Masters in Computer Science",
      startingYear: 2015,
      finishingYear: 2020,
      teachers: [
        {
          name: "Zach",
          age: 47,
          speciality: "Poetic Computation",
        },
        {
          name: "Golan",
          age: 54,
          speciality: "Digital Culture",
        },
      ],
    },
  ],
};
