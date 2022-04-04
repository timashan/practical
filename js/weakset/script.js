const obj1 = { a: 1 };
const obj2 = { b: 2 };

const weakset = new WeakSet([obj1, obj2, { b: 2 }]);
console.log(weakset);

weakset.add(obj2);
console.log(weakset.has(obj2));
weakset.delete(obj1);
