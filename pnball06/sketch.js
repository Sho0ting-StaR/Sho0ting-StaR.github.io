// Perlin noise ball

let ballarray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
  window.setInterval(spawnBall,2000);
}

function draw() {
  // background(220);
  noStroke();
  for(let theBall of ballarray){
    fill(theBall.color);
    //move
    theBall.x = noise(theBall.time) * width;
    theBall.y = noise(theBall.time+300) * height;
    //display
    circle(theBall.x,theBall.y,theBall.size);
    theBall.time+=0.001;
  }
}

function spawnBall(){
  let ball = {
    x:random(width),
    y:random(height),
    size:random(10,50),
    color:color(random(255),random(255),random(255),random(255)),
    time:random(1000),
  };
  ballarray.push(ball);
}

function mousePressed(){
  spawnBall();
}