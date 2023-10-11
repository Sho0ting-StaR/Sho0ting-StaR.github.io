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

let active;
let actions;
let yourTurn = true;
let switchmenu=true;

let space = {
  name: "non1",
  speed: "non2",
  strength: "non3",
  defense: "non4",
  health: "non5",
  type: "non6",
  col: "white",
  stat: [],
};

let Q = {
  name: "Q",
  speed: 98,
  strength: 1.21,
  defense: 48,
  health: 500,
  type: "normal",
  col: "purple",
  stat: [],
};

let nice = {
  name: "Q",
  speed: 210,
  strength: 0.6,
  defense: 10,
  health: 10,
  type: "not like other guys",
  col: "red",
  stat: [],
};

let StaR = {
  name: "StaR",
  speed: 78,
  strength: 1.15,
  defense: 160,
  health: 300,
  type: "normal",
  col: "pink",
  stat: [],
};

let DizZy = {
  name: "DizZy",
  speed: 113,
  strength: 1.15,
  defense: 30,
  health: 270,
  type: "normal",
  col: "yellow",
  stat: [],
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  yourTeam[0] = structuredClone(space);
  yourTeam[1] = structuredClone(space);
  yourTeam[2] = structuredClone(space);
  console.log(yourTeam);
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
    textSize(30);
    assignTeam(activSlot[x]);
    offSprites();
    option();
  }
}

function assignTeam(n){
  if(keyIsDown(81)){ // q
    yourTeam[x-1] = structuredClone(Q);
    console.log(x,yourTeam);
  }
  else if(keyIsDown(69)){ // e
    yourTeam[x-1] = structuredClone(nice);
    console.log(x,yourTeam);
  }
  else if(keyIsDown(83)){ // s
    yourTeam[x-1] = structuredClone(StaR);
    console.log(x,yourTeam);
  }
  else if(keyIsDown(68)){ // d
    yourTeam[x-1] = structuredClone(DizZy);
    console.log(x,yourTeam);
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
    rect(width/2-55,height/2,50,50);
    fill(yourTeam[1].col);
    rect(width/2,height/2,50,50);
    fill(yourTeam[2].col);
    rect(width/2+55,height/2,50,50);
  }
}

function release(slot,cost){
  if(actions-cost>0){
    if(keyIsDown(83)){
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