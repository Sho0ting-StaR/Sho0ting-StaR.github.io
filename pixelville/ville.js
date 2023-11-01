// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let mapSizeY = 36;
let mapSizeX = 80;
let tilesize;
let peeps = [];
let traversable = [0,4,5];

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
  console.log(grid);
}

function draw() {
  if(frameCount%12===0){ // equation for water shimmer
    showGrid(grid);
  }
  if(frameCount%8===0){
    moveFolk(peeps);
  }
  displayFolk(peeps);
}

function mouseClicked(){
  let x = Math.floor(mouseX/tilesize);
  let y = Math.floor(mouseY/tilesize);
  if(grid[y][x]===0){
    grid[y][x]=3;
    grassCheck(grid,x,y); // to make peeps
  }
}

function displayFolk(array){ // draw peeps
  for(let y= 0;y < array.length;y++){
    if(array[y][3]===1){ //live
      noStroke();
      fill(120,0,70);
      rect(array[y][0], array[y][1], array[y][2], array[y][2]); // [y][0] and [y][1] are normally *tilesize
    }
    else if(array[y][3]===0){//dead
      noStroke();
      fill(60,0,28);
      rect(array[y][0], array[y][1], array[y][2], array[y][2]);
    }
    
  }
}

function moveFolk(array){
  let nextFrame = array;
  for(let y= 0;y < array.length;y++){
    for(let z=0;z<array[y].length;z++){
      let m = Math.floor(random(-1,2));
      let x = random(100);
      if(!array[y][3]===0){
        if(x > 50){
          if(bactpos(y,)+m*1===0){  // give bactpos m
            //grid[Math.floor(array[y][1]/tilesize)][Math.floor(array[y][0]/tilesize)] OR grid[y][0] old
            nextFrame[y][0] +=m*1;
          }
        }
        if(x < 50){
          if(grid[Math.floor(array[y][1]/tilesize)][Math.floor(array[y][0]/tilesize)]+m*1===0){
            nextFrame[y][1] +=m*1;
          }
        }
      }
    }
    array = nextFrame;
  }
}

function bactpos(bact){ // FINISH LATER
  let x = peeps[bact][0];
  let y = peeps[bact][1];
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,
      if(grid[y-i][x-j]===0){
        if(!(i===1&&j===i)){
          let px = x+j;let py = y-i;
          peeps.push([px*tilesize,py*tilesize,tilesize/4,1]);
          return true;
        }
      }
    }
  }
  return false;
}


function grassCheck(array,lr,ud){
  let x = lr; //Math.floor(lr/tilesize);
  let y = ud; //Math.floor(ud/tilesize);
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,
      if(array[y-i][x-j]===0){
        if(!(i===1&&j===i)){
          let px = x+j;let py = y-i;
          peeps.push([px*tilesize,py*tilesize,tilesize/4,1]);
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
      array[y].push(Math.floor(random(0,3)));
    }
  }
}

function showGrid(array){ // building the map
  for(let y= 0;y < mapSizeY;y++){
    for(let x=0; x < mapSizeX;x++){
      if(array[y][x]===0){ //grass
        noStroke();
        fill(0,80,0);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===1){//forest
        noStroke();
        fill(0,50,0);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===2){//water
        noStroke();
        fill(0,0,random(110,131));
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===3){//houses
        noStroke();
        fill(120,60,40);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===4){//farm
        noStroke();
        fill(60,40,40);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
    }
  }
}