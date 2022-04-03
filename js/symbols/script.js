let symbol = Symbol("debug");
console.log(symbol, symbol.toString(), typeof symbol);

const symbol2 = Symbol();
console.log(symbol === symbol2);

/////////////////////////

let symbol3 = Symbol("val");

const obj = {
  fname: "tim",
  [symbol3]: "this is an object",
};

console.log(obj);
console.log(obj[symbol3]);

/////////////////////////

const symbol4 = Symbol.for("key1");
const symbol5 = Symbol.for("key1");
console.log(symbol4 === symbol5);

///////////////////////

const symbol6 = Symbol.for("key");
const person = {
  fname: "tim",
};

const func = function (person) {
  const symbol = Symbol.for("key");
  person[symbol] = "yes";
};
func(person);

console.log(person[symbol6]);

//////////////////////

class Person {}

const person1 = new Person();
Person.prototype[Symbol.toStringTag] = "Per";
console.log(person1);

/////////////////////

let arr = [1, 2, 3];
arr[Symbol.toPrimitive] = function () {
  return 999;
};
console.log(arr + 1);
