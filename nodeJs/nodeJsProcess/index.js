const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2; //defualt:4, max:128

//not in event loop
setImmediate(() => console.log("immediate 1")); //3
setTimeout(() => console.log("timer 1"), 0); //2

const createCrypto = function () {
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start)
  ); //async
};

fs.readFile(`${__dirname}/txt/test`, () => {
  //in the event loop
  console.log("I/O Finished"); //4
  console.log("-------------");
  setTimeout(() => console.log("timer 2"), 0); //6
  setTimeout(() => console.log("timer 3"), 2000); //7
  setImmediate(() => console.log("immediate 2")); //5 //event loop waits for I/O in the poll phase, & when theirs none it executes callbacks 1st

  createCrypto() || createCrypto() || createCrypto() || createCrypto();

  process.nextTick(() => console.log("Process.next Tick")); //4 //part of microtasks queue tht gets executed each phase
});

console.log("Top level code"); //1
