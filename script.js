"use script";

const practialList = document.querySelector(".practical__list");

const convertRepo = (path) => {
  const conv = path
    .split("/")[1]
    .split(/(?=[A-Z])/)
    .join(" ");

  return conv[0].toUpperCase() + conv.slice(1);
};

const getGIT = async function () {
  try {
    const res = await fetch(
      "https://api.github.com/repos/timashan/practical/git/trees/master?recursive=1",
      {
        headers: {
          Authorization: "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",
        },
      }
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    const paths = data.tree
      .map((el) => el.path)
      .filter((el) => el.includes("htmlCss") && el.split("/").length === 2);

    practialList.textContent = "";
    paths.forEach((path) => queryGenerator(path));
  } catch (err) {
    console.error(err);
  }
};

const queryGenerator = function (paths) {
  const html = `
  <li class="practical__item">
     <a class="practical__link" href="${paths}">${convertRepo(paths)}</a>
  </li>`;
  practialList.insertAdjacentHTML("beforeend", html);
};

getGIT();

const heading = document.querySelector(".heading-primary");
const headingChar = [...heading.textContent].slice(1);

const headingType = function () {
  setInterval(type, 15000);
};

const type = function () {
  heading.textContent = "P";
  let count = 0;
  const interval = setInterval(() => {
    if (count >= headingChar.length) return clearInterval(interval);

    heading.textContent += headingChar[count];
    count++;
  }, 400);
};

headingType();
