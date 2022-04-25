const superagent = require("superagent");
const fs = require("fs");

superagent.get("https://dog.ceo/api/breeds/image/random").end((err, res) => {
  if (err) console.log(err);
  const data = res.body.message;

  fs.writeFile("test.txt", data, (err) => console.log("written"));
});

/////////////////////////////////////////////

const writeFilePro = (file, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, file, (err) => {
      if (err) reject(err);
      resolve("written");
    });
  });

superagent
  .get("https://dog.ceo/api/breeds/image/random")
  .then((data) => {
    console.log(data.body.message);
    return writeFilePro("text.txt", data.body.message);
  })
  .then((res) => console.log(res));

/////////////////////////////////////////////

const getDogPic = async function () {
  const data = await superagent.get("https://dog.ceo/api/breeds/image/random");
  console.log(await writeFilePro("text.txt", data.body.message));
};
getDogPic();
