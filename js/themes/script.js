const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

toggle.addEventListener("click", function () {
  html.classList.toggle("dark");
});
