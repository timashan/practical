class Person {
  constructor(fname) {
    this.fname = fname;
  }
}

const TopObj = function () {
  this.age = 18;
};

const person1 = Reflect.construct(Person, ["Tim"]);
console.log(person1, person1.__proto__ === Person.prototype);

const person2 = Reflect.construct(Person, ["Jack"], TopObj);
console.log(person2, person2.__proto__ === TopObj.prototype);
