const canvas = document.getElementById('luckwheel');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const segments = 8;
const sliceDegree = 360 / segments;
const color = ['#ff6663', '#ffc069', '#ffff66', '#60ff60', '#66ffff', '#6660ff', '#c266ff', '#ff66c2'];

for (let i = 0; i < segments; i++) {
  ctx.beginPath();
  ctx.fillStyle = color[i];
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, i * sliceDegree * Math.PI / 180, (i + 1) * sliceDegree * Math.PI / 180);
  ctx.fill();
}

function spinLuckwheel() {
  const degree = Math.random() * 360;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < segments; i++) {
    ctx.beginPath();
    ctx.fillStyle = color[i];
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, i * sliceDegree * Math.PI / 180, (i + 1) * sliceDegree * Math.PI / 180);
    ctx.fill();
  }
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, degree * Math.PI / 180, (degree + sliceDegree) * Math.PI / 180);
  ctx.fill();
}
