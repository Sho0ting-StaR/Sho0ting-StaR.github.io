// Battle beasts/arrays and object notation assignment
// Nic/Star
// october 5th, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let yourTeam = {
  one: "blank",
  two: "blank",
  three: "blank",
};

let start = true;
let activSlot = [yourTeam.one,yourTeam.two,yourTeam.three];
let x=0;

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
  yourTeam.one = structuredClone(space);
  yourTeam.two = structuredClone(space);
  yourTeam.three = structuredClone(space);
  console.log(yourTeam);
}
function option(){
  if(keyIsDown(49)){
    x = 0;
  }
  if(keyIsDown(50)){
    x = 1;
  }
  if(keyIsDown(51)){
    x = 2;
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

// function assignTeam(n){
//   if(keyIsDown(81)){ // q
//     n = structuredClone(Q);
//     console.log(yourTeam);
//   }
//   else if(keyIsDown(69)){ // e
//     n = structuredClone(nice);
//     console.log(yourTeam);
//   }
//   else if(keyIsDown(83)){ // s
//     n = structuredClone(StaR);
//     console.log(yourTeam);
//   }
// }
function assignTeam(n){
  if(n === 0){
    if(keyIsDown(81)){ // q
      MyTeam.one = structuredClone(Q);
      console.log(yourTeam);
    }
    else if(keyIsDown(69)){ // e
      MyTeam.one = structuredClone(nice);
      console.log(yourTeam);
    }
    else if(keyIsDown(83)){ // s
      MyTeam.one = structuredClone(StaR);
      console.log(yourTeam);
    }
}
  if(n === 1){
    if(keyIsDown(81)){ // q
      MyTeam.two = structuredClone(Q);
      console.log(yourTeam);
    }
    else if(keyIsDown(69)){ // e
      MyTeam.two = structuredClone(nice);
      console.log(yourTeam);
    }
    else if(keyIsDown(83)){ // s
      MyTeam.two = structuredClone(StaR);
      console.log(yourTeam);
    }
}
  if(n === 2){
    if(keyIsDown(81)){ // q
      MyTeam.three = structuredClone(Q);
      console.log(yourTeam);
    }
    else if(keyIsDown(69)){ // e
      MyTeam.three = structuredClone(nice);
      console.log(yourTeam);
    }
    else if(keyIsDown(83)){ // s
      MyTeam.three = structuredClone(StaR);
      console.log(yourTeam);
    }
}
}
function offSprites(){
  fill(yourTeam.one.col);
  rect(width-75,height-25,20,20);
  fill(yourTeam.two.col);
  rect(width-50,height-25,20,20);
  fill(yourTeam.three.col);
  rect(width-25,height-25,20,20);
}
