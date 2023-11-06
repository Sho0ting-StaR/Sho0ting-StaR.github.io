// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let auto = false;
let grid = [];
let mapSizeY = 36;
let mapSizeX = 72;
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
  if(frameCount%6===0){
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
  if(grid[y][x]===1){
    grid[y][x]=0;
  }
  if(grid[y][x]===2){
    grid[y][x]=5;
  }
}

function keyClicked( ){
  auto !== auto;
}

function build(array,lr,ud,ReqT){
  let x = lr; //Math.floor(lr/tilesize);
  let y = ud; //Math.floor(ud/tilesize);
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,
      if(grid[y-i][x-j]===0){ 
        if(!(i===1&&j===i)){
          let px = x+j;let py = y-i;
          array[y-i][x-j]=3;
          if(x+1 > mapSizeX/2){
            peeps.push([px*tilesize,py*tilesize,tilesize/4,1,[120,0,70]]);
          }
          else{
            peeps.push([px*tilesize,py*tilesize,tilesize/4,1,[0,0,210]]);
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

function moveFolk(array){
  let nextFrame = array;
  for(let y= 0;y < array.length;y++){
    for(let z=0;z<array[y].length;z++){
      let m = Math.floor(random(-1,2));
      let x = random(100);
      // if(!array[y][3]===0){
      if(x >= 50){
        if(bactpos(nextFrame,y,m,x)===true){  // give bactpos m
          //grid[Math.floor(array[y][1]/tilesize)][Math.floor(array[y][0]/tilesize)] OR grid[y][0] old
          nextFrame[y][0] +=m*1;
        }
      }
      else if(x < 50){
        if(bactpos(nextFrame,y,m,x)===true){ //grid[Math.floor(array[y][1]/tilesize)][Math.floor(array[y][0]/tilesize)]+m*1===0
          nextFrame[y][1] +=m*1;
        }
      }
      // }
    }
    array = nextFrame;
  }
}

function bactpos(next,bact,tog,flip){ // FINISH LATER
  let x = peeps[bact][0];
  let y = peeps[bact][1];
  // build(next,Math.floor(x/tilesize),Math.floor(y/tilesize),traversable,);
  grassCheck(next,next[Math.floor(y/tilesize)][Math.floor(y/tilesize)]);
  console.log("AHHHHHHHHH");

  if(flip >= 50){
    console.log(grid[Math.floor(y/tilesize)][Math.floor((x+tog)/tilesize)]); // throwing errors?? 
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


function grassCheck(array,lr,ud){
  let x = lr; //Math.floor(lr/tilesize);
  let y = ud; //Math.floor(ud/tilesize);
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){ // check for neighbouring "0" grass tiles,
      if(array[y-i][x-j]===0){
        if(!(i===1&&j===i)){
          let px = x+j;let py = y-i;
          if(x+1 > mapSizeX/2){
            peeps.push([px*tilesize,py*tilesize,tilesize/4,1,[120,0,70]]);
          }
          else{
            peeps.push([px*tilesize,py*tilesize,tilesize/4,1,[0,0,210]]);
          }
          
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
      array[y].push(Math.floor(random(0,3))); //floor random(0,3)
    }
  }
}

function showGrid(array){ // building the map
  for(let y= 0;y < mapSizeY;y++){
    for(let x=0; x < mapSizeX;x++){
      if(array[y][x]===0){ //grass
        noStroke();
        if(x+1 > mapSizeX/2){
          fill(0,35,0);
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
        else{
          fill(0,0,random(110,131));
        }

        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===3){//houses
        noStroke();
        if(x+1 > mapSizeX/2){
          fill(160,120,120);
        }
        else{
          fill(120,60,40);
        }
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===4){//farm
        noStroke();
        fill(60,40,40);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
      else if(array[y][x]===5){//bridge
        noStroke();
        fill(60);
        rect(x*tilesize,y*tilesize,tilesize,tilesize);
      }
    }
  }
}