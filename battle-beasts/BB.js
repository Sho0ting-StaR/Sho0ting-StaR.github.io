// Battle beasts/arrays and object notation assignment
// Nic/Star
// october 5th, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let start = true;

let yourTeam = {
  one: "blank",
  two: "blank",
  three: "blank",
};

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

function setup() {
  createCanvas(windowWidth, windowHeight);
  yourTeam.one = structuredClone(space);
  console.log(yourTeam);
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
    assignTeam();
    offSprites();
  }
}

function assignTeam(){
  if(keyIsDown(81)){ // q
    yourTeam.one = structuredClone(Q);
    console.log(yourTeam);
  }
  else if(keyIsDown(69)){ // e
    yourTeam.one = structuredClone(nice);
    console.log(yourTeam);
  }
}

function offSprites(){
  fill(yourTeam.one.col);
  rect(width-20,height-20,20,20);
}


