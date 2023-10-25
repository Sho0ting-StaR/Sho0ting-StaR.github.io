// texture loading
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridsize = 8;
let grid = [];
let tilesize;
let rock =[30,50,20,10,30,0,30,40,60,20,30,10,0,30,50,30,];
let pearl = [240,240,240,240,240,200,240,240,200,240,180,240,240,240,240,240];

function setup() {
  createCanvas(windowWidth, windowHeight);
  tilesize = windowHeight/gridsize;
  generateGrid(tilesize,tilesize,grid);
}

function draw() {
  background(220);
  visualizeGrid(gridsize,gridsize,grid);
}

function mousePressed(){
  let x = Math.floor(mouseX/tilesize);
  let y = Math.floor(mouseY/tilesize);
  if(grid[y][x] === 1){
    for(let n of grid[y][x]){
      grid[y][x][n] = 0;
    }
  }
  else if(grid[y][x] === 0){
    grid[y][x] = 1;
  }
}

function generateGrid(LR,UD,array){
  for(let y = 0; y < UD; y++){
    array.push([]);
    for(let x = 0; x < LR; x++){
      if(random(100)>50){
        array[y].push(1);
        for(let l =0;l < 4;l++){ 
          array[y][x].push;
        }
      }
      else{
        array[y].push(0);
      }
    }
  }
}

function visualizeGrid(columns,rows,array){
  for(let y = 0; y < rows; y++){
    for(let x = 0;x < columns; x++){
      if(array[y][x][z] !==0){
        fill(random(256),random(256),random(256));
      }
      else{
        fill(40);
      }
      rect(x*tilesize,y*tilesize,tilesize,tilesize);
    }
  }
}