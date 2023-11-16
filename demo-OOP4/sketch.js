// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let l of points){
    l.update();
    l.display();
  }
}

function mousePressed(){
  let point = new MovingPoint(mouseX,mouseY);
  points.push(point);
}

class MovingPoint {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.color = color(random(255),random(255),random(255));
    this.radius = 15;
    this.xtime = random(1000);
    this.ytime = random(1000);
    this.dTime = 0.01;
    this.reach = 150;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.radius*2);

  }

  update(){
    let dx = noise(this.xtime);
    this.dx = map(dx,0,1,-5,5);
    let dy = noise(this.ytime);
    this.dy = map(dy,0,1,-5,5);
    this.x += this.dx;
    this.y += this.dy;
    this.xtime +=this.dytime;
    this.ytime +=this.dytime;

    if(this.x<0){
      this.x+=width;
    }
    if(this.x>width){
      this.x=0;
    }
    if(this.y<0){
      this.y+=height;
    }
    if(this.y>height){
      this.y=0;
    }
  }

  connectTo(pointsArray){
    for(let other of pointsArray){
      if(this!==other){
        if(dist(this.x,this.y,other.x,other.y)<this.reach){
          stroke(this.color);
          line(this.x,this.y,other.x,other.y);
        }
      }
    }
  }
}