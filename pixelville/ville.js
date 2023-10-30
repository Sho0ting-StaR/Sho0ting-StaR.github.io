// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let mapSizeY = 24;
let mapSizeX = 30;
let tilesize;
let peeps = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(mapSizeX>mapSizeY){
    tilesize = windowHeight/mapSizeY;
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
  if(frameCount%8===0){
    //moveFolk();
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
      rect(array[y][0]*tilesize, array[y][1]*tilesize, array[y][2], array[y][2]);
    }
    else if(array[y][3]===0){//dead
      noStroke();
      fill(60,0,28);
      rect(array[y][0]*tilesize, array[y][1]*tilesize, array[y][2], array[y][2]);
    }
    
  }
}

function moveFolk(array){
  for(let y= 0;y < array.length;y++){
    let m = random(-1,2);
    let x = random(0,2);
    array[y][x] -= m*5;
    if(Math.floor(array[y][x])!==0){
      array[y][x] +=m*5;
    }
  }
  
}

function grassCheck(array,lr,ud){
  let x = lr; //Math.floor(lr/tilesize);
  let y = ud; //Math.floor(ud/tilesize);
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,
      if(array[y-i][x-j]===0){
        if(!(i===1&&j===i)){
          peeps.push([x-j,y-i,random(12,21),1]);
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