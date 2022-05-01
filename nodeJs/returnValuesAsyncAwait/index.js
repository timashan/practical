const superagent = require("superagent");

const getDogPic = async function () {
  try {
    const data = await superagent.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    console.log(data.body.message);
  } catch (err) {
    throw err;
  }
  return "READY!";
};

//Aync Await && .then

getDogPic()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

//Aync Await && IIFE

(async () => {
  try {
    const x = await getDogPic();
    console.log(x);
  } catch (err) {
    console.log(err.message);
  }
})();
