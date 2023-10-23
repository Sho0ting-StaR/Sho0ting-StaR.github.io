// Battle beasts/arrays and object notation assignment
// Nic/Star
// october 5th-20th, 2023
//
// Extra for Experts:
// - made complex characters with multiple instances of object notation and arrays each, so if a single one
//  of my beasts includes the requirements everything else is technically bonus. im probably most proud of 
// my battle stuff aka combatCheck and fight functions as well as my system for characters as a whole.

let YT = ["1","2","3"]; //YT = your team, starts empty 
let slots = [1,2,3];
let start = true;
let activSlot = [YT[0],YT[1],YT[2]];
let x=0;
let n=0;
let actions=3;
let Eactions=3;
let yourTurn = true;
let switchmenu=true;
let ET = ["1","2","3"]; //ET = enemy team, starts empty 
let swap=false;
let youscale = 0.6;
let themscale = 0.4;
let DizZyI;let StaRI;let NiceI;let pHoenixI;let sapPoisonI;let Mt_elephantI;
let apply;
function preload(){
  DizZyI = loadImage("png-sprites/DizZy.png");
  StaRI = loadImage("png-sprites/StaR.png");
  NiceI = loadImage("png-sprites/Nice.png");
  pHoenixI = loadImage("png-sprites/pHoenix.png");
  sapPoisonI = loadImage("png-sprites/sapPoison.png");
  Mt_elephantI = loadImage("png-sprites/Mt_elephant.png");
}
let strike = { // all possible attacks
  name: "strike",
  dmg: 60,
  cost: 2,
  you: [],
  them: [],
};
let swipe = {
  name: "swipe",
  dmg: 20,
  cost: 1,
  you: [],
  them: [],
};
let crack = {
  name: "crack",
  dmg: 0,
  cost: 1,
  you: [],
  them: ["weakness"],
};
let smash = {
  name: "smash",
  dmg: 70,
  cost: 3,
  you: [],
  them: [],
};
let pine_spike ={
  name: "pine spike",
  dmg: 45,
  cost: 3,
  you: [],
  them: ["poison"],
};
let shatter ={
  name: "shatter",
  dmg: 0,
  cost: 3,
  you: [],
  them: ["defenseless"],
};
let haste ={
  name: "haste",
  dmg: 0,
  cost: 1,
  you: ["speedy"],
  them: [],
};
let burn ={
  name: "burn",
  dmg: 5,
  cost: 2,
  you: apply=[],
  them: apply=["burning"],
};
let block ={
  name: "block",
  dmg: 0,
  cost: 2,
  you: ["toughness"],
  them: [],
};

let space = { // all beast choices
  name: "non1",
  spd: "non2",
  str: "non3",
  def: "non4",
  hp: "non5",
  Mhp: "non6",
  col: "white",
  types: ["non7"],
  updwn: [],
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
  types: ["normal"],
  updwn: [],
  moves: [strike,crack,haste],
  img:0,
};
let Nice = {
  name: "Q",
  spd: 210,
  str: 0.6,
  def: 10,
  hp: 10,
  Mhp: 10,
  col: "red",
  types: ["not like other guys"],
  updwn: [],
  moves: [swipe,strike,smash],
  img:NiceI,
};
let StaR = {
  name: "StaR",
  spd: 83,
  str: 0.90,
  def: 120,
  hp: 260,
  Mhp: 260,
  col: "pink",
  types: ["normal"],
  updwn: [],
  moves: [haste,shatter,strike],
  img:StaRI,
};
let DizZy = {
  name: "DizZy",
  spd: 113,
  str: 1.15,
  def: 30,
  hp: 230,
  Mhp: 230,
  col: "yellow",
  types: ["normal"],
  updwn: [],
  moves: [block,smash,strike],
  img:DizZyI,
};
let pHoenix = {
  name: "pHoenix",
  spd: 113,
  str: 1.15,
  def: 30,
  hp: 270,
  Mhp: 270,
  col: "orange",
  types: ["fire"],
  updwn: [],
  moves: [burn,swipe,block],
  img:pHoenixI,
};
let sapPoison = {
  name: "sapPoison",
  spd: 70,
  str: 1.10,
  def: 70,
  hp: 310,
  Mhp: 310,
  col: "green",
  types: ["poison"],
  updwn: [],
  moves: [pine_spike,crack,swipe],
  img:sapPoisonI,
};
let Mt_elephant = {
  name: "Mt. elephant",
  spd: 53,
  str: 1,
  def: 150,
  hp: 460,
  Mhp: 460,
  col: 87,
  types: ["normal"],
  updwn: [],
  moves: [smash,strike,haste],
  img:Mt_elephantI,
};

let catalog = [Q,StaR,DizZy,pHoenix,sapPoison]; // readd Nice later and Mt elephant
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
    // console.log("option");
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
      // console.log("you",YT[active-1].updwn);
      // console.log("them",ET[Eactive-1].updwn);
    }
    else if(swap){
      background("purple");
      if(keyIsDown){
        release(key-1,1);
      }
    }
    offSprites();

  }

  image(NiceI, 0, 10,youscale*200,youscale*200);
}

function assignTeam(n){
  if(switchmenu){
    if(keyIsDown(81)){ // q
      YT[x-1] = structuredClone(Q);
    }
    else if(keyIsDown(69)){ // e
      YT[x-1] = structuredClone(Nice);
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
    // else if(keyIsDown(88)){ // d
    //   YT[x-1] = structuredClone(Mt_elephant);
    // }
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
  if(!switchmenu&&yourTurn){
    combatCheck();
  }
}

function combatCheck(){
  if(actions>0){
    if(!switchmenu&&yourTurn&&mouseY>height-200&&mouseY<height-100&&mouseX<width/5){
      if(actions >= YT[active-1].moves[0].cost){
        fight(YT[active-1].moves[0],YT[active-1].moves[0].dmg,YT[active-1],ET[Eactive-1]); //top left battle option
        actions -= YT[active-1].moves[0].cost;
      }
    }
    if(!switchmenu&&yourTurn&&mouseY>height-100&&mouseX>width/5&&mouseX<2*width/5){ // bottom right battle option
      swap = true;
    }
    if(!switchmenu&&yourTurn&&mouseY>height-100&&mouseX<width/5){ // bottom left battle option
      if(actions >= YT[active-1].moves[1].cost){
        fight(YT[active-1].moves[1],YT[active-1].moves[1].dmg,YT[active-1],ET[Eactive-1]);
        actions -= YT[active-1].moves[1].cost;
      }
    }
    if(!switchmenu&&yourTurn&&mouseY>height-200&&mouseY<height-100&&mouseX>width/5&&mouseX<2*width/5){ // top right battle option
      if(actions >= YT[active-1].moves[2].cost){
        fight(YT[active-1].moves[2],YT[active-1].moves[2].dmg,YT[active-1],ET[Eactive-1]);
        actions -= YT[active-1].moves[2].cost;
      }
    }
  }
  if(actions===0){
    yourTurn = false;
    Eactions = 3;
  }
}

function fight(move,damage,atkr,dfdr){
  text(move,width/2,height/2);
  for(let l=0;l< move.them.length;l++){ // EXPERIMENTAL DEBUFF
    dfdr.updwn.push(l);
  }
  // console.log(move,move.them);
  for(let l=0;l< move.you.length;l++){ // EXPERIMENTAL BUFF
    atkr.updwn.push(l);
  }
  // console.log(move,move.you);
  let resistance=dfdr.def;
  let atkrswift=0;
  let dfdrswift=0;
  if(dfdr.updwn.includes("weakness")){
    resistance -=50;
  }
  else if(dfdr.updwn.includes("defenseless")){
    resistance = 0;
  }
  if(atkr.updwn.includes("speedy")){
    atkrswift = 30;
  }
  if(dfdr.updwn.includes("speedy")){
    dfdrswift = 30;
  }
  if(random(atkr.spd/2,atkr.spd)+atkrswift>random(dfdr.spd/2,dfdr.spd)+dfdrswift){
    let totaldmg = atkr.str * damage - resistance/4;
    if(dfdr.updwn.includes("burning")&&!dfdr.types.includes("fire")){
      totaldmg+=10;
    }
    if(totaldmg>0){
      dfdr.hp-= totaldmg;
    }
    else{
      // console.log("hah weakling!");
    }
  }
  else{
    // console.log("youre too slow");
  }

}

function release(slot,cost){
  if(actions-cost>=0&&!switchmenu){
    active = slot +1;
    swap = false;
    actions -=cost;
    if(actions===0){
      yourTurn = false; // only works for your team, maybe add a 3rd argument for team?
      Eactions = 3;
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
    if(yourTurn){
      stroke(30);
      fill(130);
      rect(0,height-100,width/5,100); //display squares for combat moves and their names
      rect(width/5,height-100,width/5,100);
      rect(0,height-200,width/5,100);
      rect(width/5,height-200,width/5,100);
      fill(0);
      text(YT[active-1].moves[0].name,0,height-150); 
      text(YT[active-1].moves[1].name,0,height-50);
      text(YT[active-1].moves[2].name,width/5,height-150);
      text("switch beasts",width/5,height-50);
      text(YT[active-1].moves[0].cost,0,height-120); 
      text(YT[active-1].moves[1].cost,0,height-20);
      text(YT[active-1].moves[2].cost,width/5,height-120);
      text("1",width/5,height-20);
    }
    noStroke();
  }
}
function drawBeasts(){ // drawing the beasts in battle
  if(!start&&!switchmenu){
    if(ET[Eactive-1].hp<=0){ // switch enemy
      Eactive +=1;
    }
    // fill(YT[active-1].col); // sprite
    Image (YT[active-1].img,width/3-50,height/1.5-80,youscale*200,200*youscale);
    // rect(width/3-50,height/1.5-80,120,120);

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
    if(!yourTurn&&Eactions>0){ // enemy battling turn
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
      if(ET[Eactive-1].updwn.includes("poison")&&!ET[Eactive-1].types.includes("poison")){
        ET[Eactive-1].hp-=30;
      }
      actions = 3;
    }
  }
}