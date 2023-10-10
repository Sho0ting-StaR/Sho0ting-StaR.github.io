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

let space = {
  name: "non1",
  speed: "non2",
  strength: "non3",
  defense: "non4",
  health: "non5",
  type: "non6",
  col: "white",
};

let Q = {
  name: "Q",
  speed: 98,
  strength: 1.21,
  defense: 48,
  health: 500,
  type: "normal",
  col: "purple",
};

let nice = {
  name: "Q",
  speed: 210,
  strength: 0.6,
  defense: 10,
  health: 10,
  type: "not like other guys",
  col: "red",
};

let StaR = {
  name: "StaR",
  speed: 78,
  strength: 1.15,
  defense: 160,
  health: 300,
  type: "normal",
  col: "pink",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  yourTeam[0] = structuredClone(space);
  yourTeam[1] = structuredClone(space);
  yourTeam[2] = structuredClone(space);
  console.log(yourTeam);
}
function option(){
  if(key in slots){
    x = int(key)  ;
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
    textSize(30);
    assignTeam(activSlot[x]);
    offSprites();
    option();
  }
}

function assignTeam(n){
  if(keyIsDown(81)){ // q
    yourTeam[x] = structuredClone(Q);
    console.log(yourTeam);
  }
  else if(keyIsDown(69)){ // e
    yourTeam[x] = structuredClone(nice);
    console.log(yourTeam);
  }
  else if(keyIsDown(83)){ // s
    yourTeam[x] = structuredClone(StaR);
    console.log(yourTeam);
  }

}
function offSprites () {
  fill(yourTeam[0].col);
  rect(width-75,height-25,20,20);
  fill(yourTeam[1].col);
  rect(width-50,height-25,20,20);
  fill(yourTeam[2].col);
  rect(width-25,height-25,20,20);
}

