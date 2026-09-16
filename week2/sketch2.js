// Variables

let = r1; // For storing random
let = r2;
let = r3;
let = r;

function setup() {
  createCanvas(500, 500);
  r1 = random(255);
  r2 = random(255);
  r3 = random(255);
  r = random(100,225);
  console.log(r1);
}

function draw() {
  //background
  r1 = random(255);
  r2 = random(255);
  r3 = random(255);
  r = random(100,225);
  background(r1, r2, r3);

  //Circle
  
  ellipse(250, 250, r, r);

  rect(250,250,150);
}

function mousePressed() {
r = random(100,225);

}