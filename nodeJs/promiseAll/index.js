const superagent = require("superagent");

const getDogPic = async function () {
  try {
    const resPro1 = superagent.get("https://dog.ceo/api/breeds/image/random");
    const resPro2 = superagent.get("https://dog.ceo/api/breeds/image/random");
    const resPro3 = superagent.get("https://dog.ceo/api/breeds/image/random");

    const all = await Promise.all([resPro1, resPro2, resPro3]);
    all.forEach((el) => console.log(el.body.message));
  } catch (err) {
    throw err;
  }
};
getDogPic();
