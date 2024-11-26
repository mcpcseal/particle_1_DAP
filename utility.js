function index2D(x, y, width) {
  let index = Math.round(x) + width * Math.round(y);
  return index;
}

function drawLine(x, y, length, rot) {
  const halfLength = length / 2
  push();
  translate(x + length, y + length);
  rotate(rot);
  line(-length, 0, length, 0);  
  pop();
}