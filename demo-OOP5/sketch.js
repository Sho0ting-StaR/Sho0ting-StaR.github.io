// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let p;
let someConfetti;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Particle(width/3,height/2);
  someConfetti = new Confetti(2*width/3,height/2);
}

function draw() {
  background(0);
  p.update();
  p.display();
  someConfetti.update();
  someConfetti.display();

}

class Particle {
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.size=20;
  }

  update(){
    this.x+=random(-5,5);
    this.y+=random(-5,5);
  }

  display(){
    circle(this.x,this.y,this.size);
  }
}

class Confetti extends Particle {
  constructor(x,y) {
    super(x,y);
  }
  update(){
    super.update();
    this.size += random(-3,3);
  }
  display() {
    rect(this.x,this.y,this.size,this.size);
  }
}