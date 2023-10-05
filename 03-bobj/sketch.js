//bobj notation demo 
// october 5 2023

let ball = {
  x: 150,
  y: 150,
  d: 40,
  r: 240,
  g: 12,
  b:40,
  dx: 4,
  dy: 3,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function displayBall(){
  fill(ball.r, ball.g, ball.b);
  circle(ball.x, ball.y, ball.d);
}
function moveBall(){
  ball.x +=ball.dx;
  ball.y +=ball.dy;
  ball.r = random(0,256);
  ball.g = random(0,256);
  ball.b = random(0,256);
  if(ball.x >= windowWidth){
    ball.x = 1;
  }
  if(ball.y >= windowHeight){
    ball.y = 1;
  }
}