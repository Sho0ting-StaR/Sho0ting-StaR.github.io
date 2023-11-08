// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let roles = ["houser","bridger","feller","miner"];
let auto = false;
let grid = [];
let mapSizeY = 36;
let mapSizeX = 72;
let tilesize;
let peeps = [];
let traversable = [0,3,6,7];

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(mapSizeX>mapSizeY){
    tilesize = windowHeight/mapSizeY;
    // mapSizeX = Math.floor(windowWidth/tilesize);
  }
  else{
    tilesize = windowWidth/mapSizeX;
  }
  makeGrid(grid);
  background(40);
}

function draw() {
  if(frameCount%12===0){ // equation for water shimmer
    showGrid(grid);
  }
  if(frameCount%6===0){
    moveFolk(peeps);
  }
  displayFolk(peeps);
  if(frameCount%300===0){
    build(peeps);
  }
}

function mouseClicked(){
  let x = Math.floor(mouseX/tilesize);
  let y = Math.floor(mouseY/tilesize);
  if(grid[y][x]===0){
    grid[y][x]=5;
    for(let s = 0; s<4;s++){
      grassCheck(grid,x,y,0,5); // to make peeps
    }
  }
  if(grid[y][x]===1){
    grid[y][x]=0;
  }
  if(grid[y][x]===2){
    grid[y][x]=6;
  }
}

// function keyClicked(){
//   auto !== auto;
// }

function randomInt(p1,p2){
  if(p2-p1 !==0){
    let num = random(p1,p2);
    return Math.floor(num);
  }
  return 0;
}

function build(array){ // UPDATE FUNCTION NAME
  let nextFrame = structuredClone(array);
  if(array.length!==0){ 
    for(let p = 0; p < Math.floor(array.length/3);p++){
      let l = nextFrame[randomInt(0,nextFrame.length)];
      let x = l[0];
      let y = l[1];
      x = Math.floor(x/tilesize);
      y = Math.floor(y/tilesize);
      let x2 = x;
      let y2 = y;
      for(let i = -1;i<2;i++){
        for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,
          if(l[5] === "houser"){
            if(grid[y2-i][x2-j]===0){
              if(!(i===1&&j===i)){
                return grassCheck(grid,x2-j,y2-i,0,5);
              }
            }
          }
          else if(l[5] === "bridger"){ // maybe combine building roles? and harvesting roles
            if(grid[y2-i][x2-j]===2){
              if(!(i===1&&j===i)){
                return grassCheck(grid,x2-j,y2-i,2,6);
              }
            }
          }
          else if(l[5] === "feller"){
            if(grid[y2-i][x2-j]===1){
              if(!(i===1&&j===i)){
                return grassCheck(grid,x2-j,y2-i,1,0);
              }
            }
          }
          else if(l[5] === "miner"){
            if(grid[y2-i][x2-j]===4){
              if(!(i===1&&j===i)){
                return grassCheck(grid,x2-j,y2-i,4,0);
              }
            }
          }
        }
      }
    }
  }
}

function displayFolk(array){ // draw peeps
  for(let y= 0;y < array.length;y++){
    if(array[y][3]===1){ //live
      noStroke();
      fill(array[y][4][0],array[y][4][1],array[y][4][2]);
      rect(array[y][0], array[y][1], array[y][2], array[y][2]); // [y][0] and [y][1] are normally *tilesize
    }
    else if(array[y][3]===0){//dead
      noStroke();
      fill(60,0,28);
      rect(array[y][0], array[y][1], array[y][2], array[y][2]);
    }
  }
}

function moveFolk(array){ // ADD DEATH FROM CRUSHING TO REMOVE FROM PEEPS
  let nextFrame = array;
  for(let y= 0;y < array.length;y++){
    for(let z=0;z<array[y].length;z++){
      let travelD = Math.floor(random(0,4));
      let m = Math.floor(random(-1,2));
      let x = random(100);
      // if(!array[y][3]===0){
      for(let t = 0; t<travelD;t++){
        if(x >= 50){
          if(bactpos(nextFrame,y,m,x)===true){
            nextFrame[y][0] +=m*1;
          }
        }
        else if(x < 50){        
          if(bactpos(nextFrame,y,m,x)===true){
            nextFrame[y][1] +=m*1;
          }
        }
      }
      array = nextFrame;
    }
  }
}

function bactpos(next,bact,tog,flip){ // FINISH LATER
  let x = peeps[bact][0];
  let y = peeps[bact][1];
  if(grid[Math.floor(y/tilesize)][Math.floor(x/tilesize)]===5){
    grassCheck(grid,Math.floor(x/tilesize),Math.floor(y/tilesize),-1,0); // FIX STUCK IN HOUSES
  }
  if(flip >= 50){
    if(traversable.includes(grid[Math.floor(y/tilesize)][Math.floor((x+tog)/tilesize)])){
      return true;
    }
  }
  else if(flip < 50){
    if(traversable.includes(grid[Math.floor((y+tog)/tilesize)][Math.floor(x/tilesize)])){
      return true;
    }
  }
  else{
    return false;
  }
}

function randomRole(){
  let r = randomInt(0,roles.length);
  return roles[r];
}


function grassCheck(array,lr,ud,req,trs){ // UPDATE FUNCTION NAME
  let x = lr; 
  let y = ud; 
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,
      if(array[y-i][x-j]===req){
        if(!(i===1&&j===i)){
          let px = x+j;let py = y-i;
          if(x+1 > mapSizeX/2){
            if(trs ===5){
              peeps.push([px*tilesize,py*tilesize,tilesize/4,1,[120,0,70],randomRole()]);
            }
          }
          else if(y+1 > mapSizeY/2){
            if(trs ===5){
              peeps.push([px*tilesize,py*tilesize,tilesize/4,1,[200,60,0],randomRole()]);
            }
          }
          else{
            if(trs ===5){
              peeps.push([px*tilesize,py*tilesize,tilesize/4,1,[0,0,210],randomRole()]); 
            // 0 x of peep, 1 y of peep, 2 size, 3 living(?), 4 colour, 5 role 
            }
          }
          array[y-i][x-j]=trs;
          return true;
        }
      }
    }
  }
  return false;
}

function makeGrid(array){
  for(let y= 0;y < mapSizeY;y++){
    array.push([]);
    for(let x=0; x < mapSizeX;x++){
      array[y].push(Math.floor(random(0,5))); //floor random(0,3)
    }
  }
}

function showGrid(array){ // building the map
  for(let y= 0;y < mapSizeY;y++){
    for(let x=0; x < mapSizeX;x++){
      if(array[y][x]===0||array[y][x]===3){ //grass
        noStroke();
        if(x+1 > mapSizeX/2){
          fill(0,35,0);
        }
        else if(y+1 > mapSizeY/2){
          fill(235);
        }
        else{
          fill(0,90,0);
        }
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===1){//forest
        noStroke();
        if(x+1 > mapSizeX/2){
          fill(142,45,0);
        }
        else if(y+1 > mapSizeY/2){
          fill(35,20,15);
        }
        else{
          fill(0,60,0);
        }
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===2){//water
        noStroke();
        if(x+1 > mapSizeX/2){
          fill(0,0,random(75,96));
        }
        else if(y+1 > mapSizeY/2){
          fill(0,random(149,161),random(240,256));
        }
        else{
          fill(0,0,random(110,131));
        }

        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===5){//houses
        noStroke();
        if(x+1 > mapSizeX/2){
          fill(160,120,120);
        }
        else if(y+1 > mapSizeY/2){
          fill(60,40,30);
        }
        else{
          fill(120,60,40);
        }
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===4){//stone
        noStroke();
        if(x+1 > mapSizeX/2){
          fill(40);
        }
        else if(y+1 > mapSizeY/2){
          fill(168);
        }
        else{
          fill(120);
        }
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===7){//farm
        noStroke();
        fill(60,40,40);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===6){//bridge
        noStroke();
        fill(60);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
    }
  }
}