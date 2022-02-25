const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const size = 25;
const color = "red";

const drawCircle = function () {
  ctx.beginPath();
  ctx.arc(50, 50, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};
drawCircle();

const drawLine = function () {
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(200, 200);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "blue";
  ctx.stroke();
};
drawLine();

const drawRectangle = function () {
  ctx.beginPath();
  ctx.rect(300, 50, 150, 100);
  ctx.fillStyle = "green";
  ctx.fill();
};
drawRectangle();
