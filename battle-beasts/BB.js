// Battle beasts/arrays and object notation assignment
// Nic/Star
// october 5th, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let yourTeam = ["1","2","3"];
let slots = [1,2,3];
let start = true;
let activSlot = [yourTeam[0],yourTeam[1],yourTeam[2]];
let x=0;
let n=0;
let actions=3;
let yourTurn = true;
let switchmenu=true;

let enemyTeam = ["1","2","3"];


let space = {
  name: "non1",
  speed: "non2",
  strength: "non3",
  defense: "non4",
  health: "non5",
  col: "white",
  stat: [],
};

let Q = {
  name: "Q",
  speed: 98,
  strength: 1.21,
  defense: 48,
  health: 500,
  col: "purple",
  stat: ["normal"],
};

let nice = {
  name: "Q",
  speed: 210,
  strength: 0.6,
  defense: 10,
  health: 10,
  col: "red",
  stat: ["not like other guys"],
};

let StaR = {
  name: "StaR",
  speed: 78,
  strength: 1.15,
  defense: 160,
  health: 300,
  col: "pink",
  stat: ["normal"],
};

let DizZy = {
  name: "DizZy",
  speed: 113,
  strength: 1.15,
  defense: 30,
  health: 270,
  col: "yellow",
  stat: ["normal"],
};

let catalog = [Q,nice,StaR,DizZy];

let active = yourTeam[0];
let Eactive = enemyTeam[0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  yourTeam[0] = structuredClone(space);
  yourTeam[1] = structuredClone(space);
  yourTeam[2] = structuredClone(space);

  for(let i=0;i < enemyTeam.length;i++){
    enemyTeam[i] = structuredClone(random(catalog));
    console.log(enemyTeam[i]);
  }

  // Eactive = enemyTeam[random(enemyTeam)];
}
function option(){
  x = int(key);
  if(arrayCheck(x,slots)){
    console.log(x);
  }
}

function draw() {
  if(start === true){
    background(150);
    if(keyIsDown(32)){
      start = false;

    }
  }
  else{
    background(60);
    arena();
    textSize(30);
    assignTeam(activSlot[x]);
    offSprites();
    option();
    fill(10);
    textSize(30);
    text(actions,50,50);
    battle();
  }
}

function assignTeam(n){
  if(switchmenu){
    if(keyIsDown(81)){ // q
      yourTeam[x-1] = structuredClone(Q);
    }
    else if(keyIsDown(69)){ // e
      yourTeam[x-1] = structuredClone(nice);
    }
    else if(keyIsDown(83)){ // s
      yourTeam[x-1] = structuredClone(StaR);
    }
    else if(keyIsDown(68)){ // d
      yourTeam[x-1] = structuredClone(DizZy);
    }
  }
}
function offSprites () {
  if(!switchmenu){
    fill(yourTeam[0].col);
    rect(width-75,height-25,20,20);
    fill(yourTeam[1].col);
    rect(width-50,height-25,20,20);
    fill(yourTeam[2].col);
    rect(width-25,height-25,20,20);
  }
  else if(switchmenu){
    fill(yourTeam[0].col);
    rect(width/2-75,height/2,60,60);
    fill(yourTeam[1].col);
    rect(width/2,height/2,60,60);
    fill(yourTeam[2].col);
    rect(width/2+75,height/2,60,60);
    fill(200,20,50);
    rect(width-80,0,80,80);
  }
}

function mouseClicked(){
  if(switchmenu){
    // fill(240);
    // line(width-80,0,width,80);
    // line(width-80,80,width,0);
    if(mouseX>width-80&&mouseY<80){
      switchmenu=false;
    }
  }
  if(!switchmenu&&yourTurn&&mouseY>height-150){
    enemyTeam[Eactive-1].health-=25;
    yourTurn = false;
  }
}

function release(slot,cost){
  if(actions-cost>0&&!switchmenu){
    if(keyIsDown(83)){  // s
      if(yourTurn){

        active = slot-1;
      }
    }
  }
}

function arrayCheck(val,arr){
  for(let i=0;i<=arr.length;i++){
    if(val ===arr[i]){
      return true;
    }
  }
}

function arena(){
  if(!start&&!switchmenu){
    fill(90);
    noStroke();
    ellipse(width/3,height/1.5,400,150);
    ellipse(width-width/3,height/3,300,110);
    stroke(30);
    drawBeasts();
  }
}
function drawBeasts(){
  if(!start&&!switchmenu){
    fill(yourTeam[active-1].col);
    rect(width/3-50,height/1.5-80,120,120);
    rect(width-yourTeam[active-1].health*2,height-100,yourTeam[active-1].health*2,30);
    fill(enemyTeam[Eactive-1].col);
    rect(width-width/2.55+50,height/3-60,80,80);
    rect(0,100,enemyTeam[Eactive-1].health*2,30);
  }
}

function battle(){
  if(!start&&!switchmenu){
    if(yourTurn){
      fill(130);
      rect(0,height-height/6,width/4,height/2);
      
    }
    console.log(enemyTeam[Eactive-1].health);
  }

}