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
let yourTurn = true;
let switchmenu=true;

let ET = ["1","2","3"];


let space = {
  name: "non1",
  spd: "non2",
  str: "non3",
  def: "non4",
  hp: "non5",
  Mhp: "non6",
  col: "white",
  stat: [],
};

let Q = {
  name: "Q",
  spd: 98,
  str: 1.21,
  def: 48,
  hp: 500,
  Mhp: 500,
  col: "purple",
  stat: ["normal"],
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
};

let StaR = {
  name: "StaR",
  spd: 78,
  str: 1.15,
  def: 160,
  hp: 300,
  Mhp: 300,
  col: "pink",
  stat: ["normal"],
};

let DizZy = {
  name: "DizZy",
  spd: 113,
  str: 1.15,
  def: 30,
  hp: 270,
  Mhp: 270,
  col: "yellow",
  stat: ["normal"],
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
};

let catalog = [Q,nice,StaR,DizZy];

let active = YT[0];
let Eactive = ET[0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  YT[0] = structuredClone(space);
  YT[1] = structuredClone(space);
  YT[2] = structuredClone(space);

  for(let i=0;i < ET.length;i++){
    ET[i] = structuredClone(random(catalog));
    console.log(ET[i]);
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
  else if(switchmenu){
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
    // fill(240);
    // line(width-80,0,width,80);
    // line(width-80,80,width,0);
    if(mouseX>width-80&&mouseY<80){
      switchmenu=false;
    }
  }

  if(!switchmenu&&yourTurn&&mouseY>height-150){
    let dmg = 25;
    if(random(YT[active-1].spd/2,YT[active-1].spd)>random(ET[Eactive-1].spd/2,ET[Eactive-1].spd)){
      let totaldmg = YT[active-1].str * dmg - ET[Eactive-1].def/2;
      if(totaldmg>0){
        ET[Eactive-1].hp-= totaldmg;
        yourTurn = false;
      }
    }

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
// function arrayGrab(val,arr,lmnt){ // ie. getting original values of beast 
//   for(let i=0;i<arr.length;i++){
//     if(val ===arr[i]){
//       return arr.lmnt;
//     }
//   }
// }

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
    console.log(ET[Eactive-1].health);
  }
}
function drawBeasts(){
  if(!start&&!switchmenu){
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

function battle(){ // drawing arena details
  if(!start&&!switchmenu){
    if(!yourTurn){
      if(ET[Eactive-1].hp<=0){
        ET.splice(ET.indexOf[Eactive-1],1);
        Eactive = ET[random(0,ET.length)];
      }
      else{
        let dmg = 20;
        if(random(ET[Eactive-1].spd/2,ET[Eactive-1].spd)>random(YT[active-1].spd/2,YT[active-1].spd)){
          let totaldmg = ET[Eactive-1].str * dmg - YT[active-1].def/2;
          if(totaldmg>0){
            YT[active-1].hp-= totaldmg;
            yourTurn = true;
          }
        }
      }
    }
  }
}