class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  const developer = (1, 'Mario', 'Rossi', 25);
  const developer2 = JSON.stringify(developer);
  console.log(developer2)