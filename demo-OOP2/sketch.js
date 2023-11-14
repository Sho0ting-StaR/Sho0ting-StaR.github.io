// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Guy {
  constructor(name,x,y,size,speed,color){
    this.name = name;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
    this.size = size;
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.size);
  }
  walk(){
    let theChoice=random(100);
    if(theChoice<25){
      this.y += this.speed;
    }
    else if(theChoice<50){
      this.x -= this.speed;
    }
    else if(theChoice<75){
      this.y -= this.speed;
    }
    else{
      this.x += this.speed;
    }
  } 
}

let peter;
let lois;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  peter= new Guy("peter Griffin",windowWidth/2,windowHeight/2,20,2,"green");
  lois = new Guy("lois",windowWidth/3,windowHeight/3,20,30,"orange");
}

function draw() {
  // background(220);
  peter.display();
  peter.walk();
  lois.display();
  lois.walk();
}
