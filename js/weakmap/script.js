const key1 = { a: 1 };
const key2 = { b: 2 };

const weakmap = new WeakMap([[key1, "one"]]);
weakmap.set(key2, "two");

console.log(weakmap);
console.log(weakmap.get(key1));
