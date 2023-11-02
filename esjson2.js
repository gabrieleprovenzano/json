class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    static fromJson(json) {
        const parsedData = JSON.parse(json);
    
        if (parsedData.id && parsedData.firstName && parsedData.lastName && parsedData.age) {
          return new Person(parsedData.id, parsedData.firstName, parsedData.lastName, parsedData.age);
        } else {
          throw new Error("Invalid JSON data.");
        }
      }
  
    toJson() {
      return JSON.stringify(this);
    }
  }
  
  const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
  const developer = Person.fromJson(json);
  console.log(developer);  