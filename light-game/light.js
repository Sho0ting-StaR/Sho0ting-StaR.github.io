// checklamp and shatter functions +
// flickering light with relative size +
// gameplay modifies to reflect screen size = extra for experts

// mouseclick to shine lamp in direction relative to white square sprite
// wasd to move white square, goal is to flash the light at the lamps(brown+yellow squares) and keep screen bright

let x;
let y;
let w = 20;
let h = 20;
let d;
let bright;
let tick=0;
let darkness=100;
let lx;
let ly;
let brx;let bry;
let trx;let trh;
let blx;let bly;
let tlx;let tly;
let shatter=false;
let points=0;
let charge=0;
let boost=0;
let speed;
let bx;let by;let b2x;let b2y;//trail squares for boost
let das; let cx; let cy;
function setup() {
  createCanvas(windowWidth,windowHeight);
  cx = width/2;
  cy = height/2;
  x = cx-w/2;
  y = cy-h/2;
  bright = random(darkness+40,darkness+101);
  lx = random(20,width-20);
  ly = random(20,height-20);
  speed = windowWidth/200/2;
}

function drawRect(){
  if(keyIsDown(87)){
    b2y=by;by=cy;cy -= speed+boost; //this variable collection would be used to make a speed trail
  }
  else if(keyIsDown(83)){
    b2y=by;by=cy;cy += speed+boost;
  }
  else if(keyIsDown(65)){
    b2x=bx;bx=cx;cx -= speed+boost;
  }
  else if(keyIsDown(68)){
    b2x=bx;bx=cx;cx += speed+boost;
  }
  x = cx-w/2;
  y = cy-h/2;
  fill(darkness+120);
  noStroke();
  rect(x,y,w,h);
}
function torch(dir){
  if(dir==="up"){
    noStroke();
    fill(bright,bright,bright,50);
    trx=cx-w;trh=height;tlx=cx+w;tly=height;brx=cx+w/2;bry=cy+h/2;blx=cx-w/2;bly=cy+h/2;
  }
  else if(dir==="down"){
    noStroke();
    fill(bright,bright,bright,50);
    trx=cx-w;trh=0/2;tlx=cx+w;tly=0;brx=cx+w/2;bry=cy-h/2;blx=cx-w/2;bly=cy-h/2;
  }
  else if(dir==="left"){
    noStroke();
    fill(bright,bright,bright,50);
    trx=cx-w/2;trh=cy+h/2;tlx=cx-w/2;tly=cy-h/2;brx=0;bry=cy-h;blx=0;bly=cy+h;
  }
  else if(dir==="right"){
    noStroke();
    fill(bright,bright,bright,50);
    trx=cx+w/2;trh=cy+h/2;tlx=cx+w/2;tly=cy-h/2;brx=width;bry=cy-        h;blx=width;bly=cy+h;
  }
  quad(trx,trh,tlx,tly,brx,bry,blx,bly);
}

function light(){
  if(mouseIsPressed){
    if(mouseY>cy+40){
      d = "up";
      torch(d);
    }
    else if(mouseY<cy-40){
      d = "down";
      torch(d);
    }
    else if(mouseX>cx+40){
      d = "right";
      torch(d);
    }
    else if(mouseX <cx-40){
      d = "left";
      torch(d);
    }
  }
}

function drawLamp(){
  fill("rgb(209,106,17)");
  rect(lx,ly,18,18);
  fill("yellow");
  rect(lx+4,ly+4,10,10);
}

function checklamp(){
  if(d==="up"&&lx>blx-3&&lx<brx+3&&ly>cy){
    shatter=true;
  }
  if(d==="down"&&lx>blx-3&&lx<brx+3&&ly<cy){
    shatter=true;
  }
  if(d==="right"&&ly<trh+2&&ly>tly-2&&lx>cx){
    shatter=true;
  }
  if(d==="left"&&ly<trh+2&&ly>tly-2&&lx<cx){
    shatter=true;
  }
}

function breakLamp(){
  if(shatter===true){
    lx=random(20,width-20);ly=random(20,height-20);
    shatter=false;
    points ++;
    darkness = darkness + 35-points ;
    darkness+=10;
    if(darkness>=95){
      darkness=90;
      charge+=5;
    }
  }
}

// function mouseWheel(){
// das = true;
// }

// function dash(wheel){
// if(charge>=1&&das){
// if(tick%3===0){
// charge-=1;boost+=1;
// }
// }
//} trying to make a boost function for game strategy doesnt work yet

function draw() {
  if(darkness>0){
    tick +=1;
    background(darkness);
    drawRect();
    light();
    if(tick%8===0){
      bright = random(darkness+20,darkness+36);
    }
    if(tick%8===0){
      darkness-=1;
    }
    // dash(das);
    // if(charge===0||!mouseWheel()){ project for later
    // das = false;
    // boost=0;
    // }
    drawLamp();
    checklamp();
    breakLamp();
    console.log(darkness);
    textSize(40);
    fill(255);
    text(points,30,40);
    // text(charge,100,40); not used rn
  }
  else{
    background(0);
    text(points,width/2,height/2-10);
    text("game over",width/2.5,height/2+30);
  }
}
