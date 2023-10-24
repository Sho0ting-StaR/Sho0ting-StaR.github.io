// terrain generation
// Your Name
// Date 10/23/23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let terrain = [];
let bbackground =[];
let xOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles(terrain,0.0003,0);
  spawnRectangles(bbackground,0.001,100);
}

function draw() {
  background(40);
  displayRects(bbackground,0,0.8);
  displayRects(terrain,10,1);


  if (keyIsDown(RIGHT_ARROW)){
    if(xOffset < terrain.length-6){
      xOffset +=5;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(xOffset > 5){
      xOffset -=5;
    }
  }
  drawYou();
}

function drawYou(){
  fill(18);
  stroke(0);
  rect(width/2,height - terrain[width/2+xOffset].height -20,20,20);
  fill(255);
  noStroke();
  rect(width/2+5,height - terrain[width/2+xOffset].height -17,3,3);
  rect(width/2+18,height - terrain[width/2+xOffset].height -18,3,3);
}

function displayRects(array,col,spd){
  for(let i = xOffset*spd;i < width + xOffset;i++){
    fill(col);
    stroke(col);
    let thisRect = array[i];
    rect(thisRect.x - xOffset,height-thisRect.height,1,thisRect.height);
  }
}

function spawnRectangles(array,speed,start){
  let time = start;
  for(let x = 0; x < 10000; x++){
    let h = noise(time)*height;
    let thisRect = {
      x: x,
      height: h,
    };
    array.push(thisRect);
    time += speed;

  }
}