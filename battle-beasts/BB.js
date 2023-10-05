// Battle beasts/arrays and object notation assignment
// Nic/Star
// october 5th, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let yourTeam = {
  one: "blank",
  two: "blank",
  three: "blank",
};

let space = {
  name: "non1",
  speed: "non2",
  strength: "non3",
  defense: "non4",
  health: "non5",
  type: "non6",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  yourTeam.one = structuredClone(space);
}

function draw() {
  background(25);
  // console.log(yourTeam);
  textSize(30);
  text(yourTeam,100,100);
}



