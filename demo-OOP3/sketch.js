// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Ball {
  constructor(x,y){
    this.x =x;
    this.y =y;
    this.radius = random(50,81);
    this.dx = random(-5,5);
    this.dy = random(-5,5);
    this.r = random(120);
    this.g = random(100);
    this.b = random(90);
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;

    if(this.y - this.radius <0||this.y + this.radius >windowHeight){
      this.dy *= -1;
    }

    if(this.x - this.radius<0||this.x + this.radius > windowWidth){
      this.dx *= -1;
    }
  }

  display() {
    noStroke();
    if(!(this.r>255)){
      this.r= Math.floor(this.r)+1;
    }
    else{
      this.r=0;
    }
    fill(this.r,this.g,this.b);
    circle(this.x,this.y,this.radius);
    
  }

  bounceOff(other){
    let radiSum = this.radius + other.radius;
    let distanceApart = dist(this.x,this.y,other.x,other.y);
    if(radiSum > distanceApart) {
      if(this.y - this.radius <0||this.y + this.radius >other.y +other.radius){
        this.dy *= -1;
      }
  
      if(this.x - this.radius<0||this.x + this.radius > other.x +other.radius){
        this.dx *=-1;
      }
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theBall = new Ball(windowWidth/2,windowHeight/2);
  ballArray.push(theBall);
}

function draw() {
  background(220);
  for(let someBall of ballArray){
    someBall.move();
    for(let nums of ballArray){
      if(!(nums === someBall)){
        someBall.bounceOff(nums);
      }
    }
    someBall.display();
  }
  if(frameCount%12===0){
    mo();
  }
}

function mo(){
  let aBall = new Ball(mouseX,mouseY);
  ballArray.push(aBall);
}