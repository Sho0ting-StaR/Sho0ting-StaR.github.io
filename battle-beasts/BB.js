// Battle beasts/arrays and object notation assignment
// Nic/Star
// october 5th, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let YT = ["1","2","3"];
let slots = [1,2,3];
let start = true;
let activSlot = [YT[0],YT[1],YT[2]];
let x=0;
let n=0;
let actions=3;
let Eactions=3;
let yourTurn = true;
let switchmenu=true;
let ET = ["1","2","3"];
let swap=false;

let space = { // all beast choices
  name: "non1",
  spd: "non2",
  str: "non3",
  def: "non4",
  hp: "non5",
  Mhp: "non6",
  col: "white",
  stat: [],
  moves: ["g","b","f"],
};
let Q = {
  name: "Q",
  spd: 98,
  str: 1.21,
  def: 48,
  hp: 245,
  Mhp: 245,
  col: "purple",
  stat: ["normal"],
  moves: [strike,crack,haste],
};
let nice = {
  name: "Q",
  spd: 210,
  str: 0.6,
  def: 10,
  hp: 10,
  Mhp: 10,
  col: "red",
  stat: ["not like other guys"],
  moves: [strike,crack,smash],
};
let StaR = {
  name: "StaR",
  spd: 83,
  str: 0.90,
  def: 160,
  hp: 200,
  Mhp: 200,
  col: "pink",
  stat: ["normal"],
  moves: [haste,shatter,strike],
};
let DizZy = {
  name: "DizZy",
  spd: 113,
  str: 1.15,
  def: 30,
  hp: 230,
  Mhp: 230,
  col: "yellow",
  stat: ["normal"],
  moves: [block,smash,strike],
};
let pHoenix = {
  name: "pHoenix",
  spd: 113,
  str: 1.15,
  def: 30,
  hp: 270,
  Mhp: 270,
  col: "orange",
  stat: ["fire"],
  moves: [burn,strike,block],
};
let sapPoison = {
  name: "sapPoison",
  spd: 70,
  str: 1.10,
  def: 70,
  hp: 310,
  Mhp: 310,
  col: "green",
  stat: ["poison"],
  moves: [pine_spike,crack,haste],
};
let Mt_elephant = {
  name: "Mt. elephant",
  spd: 53,
  str: 1,
  def: 150,
  hp: 460,
  Mhp: 460,
  col: 87,
  stat: ["normal"],
  moves: [smash,strike,haste],
};

let strike = {
  dmg: 60,
  cost: 2,
  you: [],
  them: [],
}
let crack = {
  dmg: 0,
  cost: 1,
  you: [],
  them: ["weakness"],
}
let smash = {
  dmg: 98,
  cost: 3,
  you: [],
  them: [],
}
let pine_spike ={
  dmg: 40,
  cost: 3,
  you: [],
  them: ["poison"],
}
let shatter ={
  dmg: 0,
  cost: 3,
  you: [],
  them: ["defenseless"],
}
let haste ={
  dmg: 0,
  cost: 1,
  you: ["speedy"],
  them: [],
}
let burn ={
  dmg: 0,
  cost: 2,
  you: [],
  them: ["burning"],
}
let block ={
  dmg: 0,
  cost: 2,
  you: ["toughness"],
  them: [],
}

let catalog = [Q,nice,StaR,DizZy,pHoenix,sapPoison];
let active = YT[0];
let Eactive = ET[0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  YT[0] = structuredClone(space);
  YT[1] = structuredClone(space);
  YT[2] = structuredClone(space);

  for(let i=0;i < ET.length;i++){
    ET[i] = structuredClone(random(catalog));
    // console.log(ET[i]);
  }

}
function option(){
  x = int(key);
  if(arrayCheck(x,slots)){
    console.log(x);
  }
}

function draw() {
  if(start === true){
    background(40,40,180);
    fill("yellow");
    text("BATTLE BEASTS",width/2,height/2);
    if(keyIsDown(32)){
      start = false;
    }
  }
  else{
    background(60);
    if(!swap){
      arena();
      textSize(30);
      assignTeam(activSlot[x]);
      option();
      fill(10);
      textSize(30);
      text(actions,50,50);
      battle();
  }
  else if(swap){
    background("purple");
    if(keyIsDown){
      release(key-1,1);
    }
  }
    offSprites();
    // console.log(yourTurn);
  }
}

function assignTeam(n){
  if(switchmenu){
    if(keyIsDown(81)){ // q
      YT[x-1] = structuredClone(Q);
    }
    else if(keyIsDown(69)){ // e
      YT[x-1] = structuredClone(nice);
    }
    else if(keyIsDown(83)){ // s
      YT[x-1] = structuredClone(StaR);
    }
    else if(keyIsDown(68)){ // d
      YT[x-1] = structuredClone(DizZy);
    }
    else if(keyIsDown(65)){ // d
      YT[x-1] = structuredClone(pHoenix);
    }
    else if(keyIsDown(90)){ // d
      YT[x-1] = structuredClone(sapPoison);
    }
    else if(keyIsDown(88)){ // d
      YT[x-1] = structuredClone(Mt_elephant);
    }
  }
}
function offSprites () {
  if(!switchmenu){
    fill(YT[0].col);
    rect(width-75,height-25,20,20);
    fill(YT[1].col);
    rect(width-50,height-25,20,20);
    fill(YT[2].col);
    rect(width-25,height-25,20,20);
  }
  else if(switchmenu||swap){
    fill(YT[0].col);
    rect(width/2-75,height/2,60,60);
    fill(YT[1].col);
    rect(width/2,height/2,60,60);
    fill(YT[2].col);
    rect(width/2+75,height/2,60,60);
    fill(200,20,50);
    rect(width-80,0,80,80);
  }
}

function mouseClicked(){
  if(switchmenu){
    if(mouseX>width-80&&mouseY<80){
      switchmenu=false;
    }
  }

  if(!switchmenu&&yourTurn&&mouseY>height-200&&mouseX<width/5){
    let dmg = 25;
    if(actions>0){
      if(random(YT[active-1].spd/2,YT[active-1].spd)>random(ET[Eactive-1].spd/2,ET[Eactive-1].spd)){
        let totaldmg = YT[active-1].str * dmg - ET[Eactive-1].def/2;
        if(totaldmg>0){
          ET[Eactive-1].hp-= totaldmg;
        }
      }
      actions -=1;
    }
    else{
      console.log("youre too slow");
      yourTurn = false;
      Eactions = 3;
    }
  }
  if(!switchmenu&&yourTurn&&mouseY>height-100&&mouseX>width/5&&mouseX<2*width/5){
    swap = true;
  }

  // if(!switchmenu&&yourTurn&&mouseY>height-200&&mouseY<height-100&&mouseX>width/5&&mouseX<2*width/5){
  //   attack(YT[active-1].A3);
  // }
}

function release(slot,cost){
  if(actions-cost>=0&&!switchmenu){
      active = slot +1;
      swap = false;
      actions -=cost;
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
    if(yourTurn){
      stroke(30);
      fill(130);
      rect(0,height-100,width/5,100);
      rect(width/5,height-100,width/5,100);
      rect(0,height-200,width/5,100);
      rect(width/5,height-200,width/5,100);
    }
    noStroke();
  }
}
function drawBeasts(){
  if(!start&&!switchmenu){
    if(ET[Eactive-1].hp<=0){ // switch enemy
      Eactive +=1;
    }
    fill(YT[active-1].col); // sprite
    rect(width/3-50,height/1.5-80,120,120);

    fill(60); // healthbar
    rect(width-100,height-100,100,30);
    rect(width-100,height-100,100*YT[active-1].hp/YT[active-1].Mhp,30);
    fill(YT[active-1].col);
    rect(width-100,height-100,100*YT[active-1].hp/YT[active-1].Mhp,30);

    fill(ET[Eactive-1].col); // enemy sprite
    rect(width-width/2.55+50,height/3-60,80,80);

    fill(60); // enemy healthbar
    rect(0,100,100,30);
    fill(ET[Eactive-1].col);
    rect(0,100,100*ET[Eactive-1].hp/ET[Eactive-1].Mhp,30);
    text(ET[Eactive-1].hp,0, 180);
  }
}

function battle(){ // enemy turn
  if(!start&&!switchmenu){
    if(ET[Eactive-1].hp<=0){
      Eactive = ET[0];
    }
    if(!yourTurn&&Eactions>0){
      if (random(ET[Eactive-1].spd/2,ET[Eactive-1].spd)>random(YT[active-1].spd/2,YT[active-1].spd)){
        let dmg = 25;
        let totaldmg = ET[Eactive-1].str * dmg - YT[active-1].def/2;
        if(totaldmg>0){
          YT[active-1].hp-= totaldmg;

        }
      }
      Eactions -=1;
    }
    else if(!yourTurn){
      yourTurn = true;
      actions = 3;
    }
  }
}