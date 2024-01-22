// spooky game survival
let bun1 ;
let bun2 ;
let bun3 ;
let rat1 ;
let rat2 ;
let rat3 ;
let mag1 ;
let mag2 ;
let menuScreen = false;
let currentRoom;
let health = 6;
let teeth = 4;
let eHealth = 4;
let interactive ;
let roomType ;
let rabids =[{title: "empty", col: 60},{title:"bunny", col: 255, state: "rabid"},{title: "maggot", col: [210,150,160], state: "rabid"},{title: "rat", col: 95, state: "rabid"}];
let wilds =[{title: "empty", col: 60},{title:"bunny", col: 255, state: "tame"},{title: "maggot", col: [210,150,160], state: "tame"},{title: "rat", col: 95, state: "tame"}];
let items =[{title: "wrench", col: 110},{title: "rifle", col: [100,70,40]},{title: "cleavor", col: 140}];
let rooms = [["stone room",78,60,70],["wood room",160,90,90],["dark room",40,23,31]];
let slot = [{ title: "empty", col: 60 , },
        items[2],
        { title: "empty", col: 60 , },
        { title: "empty", col: 60 , },
        items[1],
        { title: "empty", col: 60 , },
        { title: "empty", col: 60 , },
        { title: "empty", col: 60 , },
        items[0],
        { title: "empty", col: 60 , },
];

function preload(){
//  bun1 = loadImage("sprites/rabbit.png");
//  bun2 = loadImage("sprites/rabidrabbit.png");
//  bun3 = loadImage("sprites/rabbitfoot.png");
//  rat1 = loadImage("sprites/rat.png");
//  rat2 = loadImage("sprites/rabidrat.png");
//  rat3 = loadImage("sprites/rathead.png");
//  rat3 = loadImage("sprites/rathead.png");
//  mag1 = loadImage("sprites/maggot.png");
//  mag2 = loadImage("sprites/maggotrabid.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    roomType = [wilds,rabids,items,"empty"];
    currentRoom = rooms[Math.floor(random(rooms.length))];
    noStroke();
    interactive = items[Math.floor(random(items.length))];
    
}

 function draw(){
    background(0);
    fill(currentRoom[1],currentRoom[2],currentRoom[3]);
    rect(0,0,width,height);
    fill(3*currentRoom[1]/5,3*currentRoom[2]/5,3*currentRoom[3]/5);
    rect(width/4,height/4,width/2,height/2);
    // image =(bun1,0,0);
    // image =(bun2,100,0);
    // image =(bun3,150,0);
    if(!menuScreen){ // game in play
        //player interface
        //health + teeth
        for(let h = 0;h < health;h++){
            fill(200,80,90);
            rect(width-150-25*h,height-140,20,20);
        }
        fill(210);
        rect(width-125,height-140,20,20);
        fill(0);
        text("X "+teeth,width-100,height-125);
        for(let h = 0;h < eHealth;h++){
            fill(200,80,160);
            rect(150+25*h,90,20,20);
        }
        //hotbar
        for(let l =0; l<10;l++){
            fill(60);
            rect(width/2-300+60*l,height-100,60,60);
            fill(slot[l].col);
            rect(width/2-300+60*l+10,height-90,40,40);
        }
        if(interactive.title === "empty"){
            fill(255);
            circle(width/2,height/3,30);
        }

        //room elements
        fill(interactive.col);
        rect(width/2-50,height/2-50,100,100)
    }
 }

 function mouseClicked(){
    if(mouseX<width/2+50&&mouseX>width/2-50&&mouseY<height/2+50&&mouseY>height/2-50&&interactive.title !== "empty"){
        for(let l = 0; l<slot.length;l++){
            if(slot[l].title === "empty"){
                slot[l] = structuredClone(interactive);
                console.log("item added!");
                interactive = wilds[0];
                return true;
            }
        }
        console.log("inventory full");
    }
    if(mouseX<width/2+15&&mouseX>width/2-15&&mouseY<height/3+15&&mouseY>height/3-15&&interactive.title === "empty"){
        newRoom();
        return true;
    }
 }

 function newRoom(){
    interactive = roomType[Math.floor(random(roomType.length))];
    if(interactive === "empty"){
        interactive = {title: "empty", col: 60}
    }
    else{
        active = interactive[Math.floor(random(interactive.length))];
        interactive = active;
    }
 }