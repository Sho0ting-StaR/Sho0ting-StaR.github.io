// spooky game survival
let bun1 ;
let bun2 ;
let bun3 ;
let rat1 ;
let rat2 ;
let rat3 ;
let mag1 ;
let mag2 ;


function preload(){
 bun1 = loadImage("sprites/rabbit.png");
 bun2 = loadImage("sprites/rabidrabbit.png");
 bun3 = loadImage("sprites/rabbitfoot.png");
 rat1 = loadImage("sprites/rat.png");
 rat2 = loadImage("sprites/rabidrat.png");
 rat3 = loadImage("sprites/rathead.png");
 rat3 = loadImage("sprites/rathead.png");
 mag1 = loadImage("sprites/maggot.png");
 mag2 = loadImage("sprites/maggotrabid.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}


 function draw(){
    background(200,80,90);
    image =(bun1,0,0);
    image =(bun2,100,0);
    image =(bun3,150,0);
 }