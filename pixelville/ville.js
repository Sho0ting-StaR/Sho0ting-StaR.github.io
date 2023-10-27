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
  if(frameCount%12===0){
    showGrid(grid);
  }
}

function mouseClicked(){
  let x = Math.floor(mouseX/tilesize);
  let y = Math.floor(mouseY/tilesize);
  if(grid[y][x]===0){
    grid[y][x]=3;
    grassCheck(); // to make peeps
  }
}

function grassCheck(array,lr,ud){
  let x = Math.floor(lr/tilesize);
  let y = Math.floor(ud/tilesize);
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,

    }
  }
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
        console.log(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===1){//forest
        noStroke();
        fill(0,50,0);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===2){//water
        noStroke();
        fill(0,0,random(60,91));
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