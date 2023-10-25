// 2d/grid
// Your Name
// 10/24/23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let tilesize;
const GRIDSIZE = 41;
function setup() {
  createCanvas(windowWidth, windowHeight);
  if(height<width){
    tilesize = height/GRIDSIZE;
  }
  else{
    tilesize = width/GRIDSIZE;
  }
  grid= randomizegrid(GRIDSIZE,GRIDSIZE);
  displayGrid();
  // grid= randomizegrid(GRIDSIZE,GRIDSIZE);
  // displayGrid();
}

function draw() {
  // background(220);
  if(keyIsDown(65)){
    grid = emptygrid(GRIDSIZE,GRIDSIZE);
  }
}

function mousePressed(){
  let x=Math.floor(mouseX/tilesize);
  let y=Math.floor(mouseY/tilesize);
  if(grid[y][x] === 0 ){
    grid[y][x] = 1;
  }
  else if(grid[y][x] === 1 ){
    grid[y][x] = 0;
  }
}

function randomizegrid(rows,columns){
  let randomarray = [];
  for(let y =0; y < columns; y++){
    randomarray.push([]);
    for (let x = 0; x < rows; x++){
      if(random(100) < 50) {
        randomarray[y].push(1);
      }
      else {
        randomarray[y].push(0);
      }
    }
  }
  return randomarray;
}

function emptygrid(rows,columns){
  let randomarray = [];
  for(let y =0; y < columns; y++){
    randomarray.push([]);
    for (let x = 0; x < rows; x++){
      randomarray[y].push(0);
    }
  }
  return randomarray;
}

function displayGrid(){
  for(let y = 0;y < GRIDSIZE;y++){
    for(let x = 0;x < GRIDSIZE;x++){

      if(grid[y][x]===1){
        fill(0);
      }
      else{
        fill(50);
      }
      rect(x*tilesize,y*tilesize,tilesize,tilesize);
    }
  }
}