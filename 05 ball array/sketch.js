//bobj notation demo 
// october 5 2023

let ballarray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let ball = spawnball();
  ballarray.push(ball);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function displayBall(){
  for(let i=0;i<ballarray.length;i++){
    let ball = ballarray[i];
    fill(ball.r, ball.g, ball.b);
    circle(ball.x, ball.y, ball.d);
  }
}

function keyTyped(){
  if(key === ""){
    let someball = spawnball();
    ballarray.push(someball);
  }
}


function moveBall(){
  for(let i=0;i<ballarray.length;i++){
    let ball = ballarray[i];
    ball.x +=ball.dx;
    ball.y +=ball.dy;
    ball.r = random(0,256);
    ball.g = random(0,256);
    ball.b = random(0,256);
    if(ball.x >= windowWidth){
      ball.x =1;
    }
    if(ball.x <= 0){
      ball.x =windowWidth;
    }
    if(ball.y >= windowHeight){
      ball.y = 1;
    }
    if(ball.y <= 0){
      ball.y =windowHeight;
    }
  }
}

function spawnball(){
  let dx = random(-3,4);
  let dy = random(-3,4);
  let x= width/2;
  let y= height/2;
  let diameter = 40;
  let col = random(0,256);
}