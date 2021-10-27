// const person = {
//   name: "John Doe",
//   age: 30
//  }


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`Hello, ${this.name}! you are ${this.age} years old! `);
  }
}


//  module.exports = person;

module.exports = Person;