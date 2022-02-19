const empties = document.querySelectorAll(".empties");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", function () {
  fill.className += " hold";
  setTimeout(() => (fill.className = ""), 0);
});

fill.addEventListener("dragend", function () {
  fill.className = "fill";
});

document.addEventListener("dragenter", function (e) {
  e.preventDefault();
  const empty = e.target.closest(".empty");
  if (!empty) return;
  empty.className += " hover";
});

document.addEventListener("dragleave", function (e) {
  const empty = e.target.closest(".empty");
  if (!empty) return;
  empty.className = "empty";
});

document.addEventListener("drop", function (e) {
  const empty = e.target.closest(".empty");
  if (!empty) return;
  empty.append(fill);
  empty.className = "empty";
});

document.addEventListener("dragover", function (e) {
  e.preventDefault();
});
