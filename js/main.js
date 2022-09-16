const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let paddleX = 0;
const paddleWidth = 75;
const paddleHeight = 10;

const canvasW = canvas.width;
const canvasH = canvas.height;
const paddleY = canvasH - 2*paddleHeight;

canvas.addEventListener('mousemove' , function (e) {
console.log(e);
paddleX = e.clientX;
})

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX,paddleY,paddleWidth,paddleHeight);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

}
drawPaddle();

setInterval(draw , 10);

function draw () {
  ctx.clearRect(0,0,canvasW,canvasH);
  drawPaddle();
}
