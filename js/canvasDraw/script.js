const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const size = 10;
const color = "red";

let isPressed = false;
let x, y;

canvas.addEventListener("mousedown", function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", function (e) {
  isPressed = false;
});

canvas.addEventListener("mousemove", function (e) {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawLine(x2, y2, x, y, size, color);
    drawCircle(x, y, size, color);
    x = e.offsetX;
    y = e.offsetY;
  }
});

const drawCircle = function (x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};
drawCircle();

const drawLine = function (x, y, x2, y2, size, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};
drawLine();
