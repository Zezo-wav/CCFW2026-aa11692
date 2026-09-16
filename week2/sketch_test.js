function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  //background
  background("#5E4310");

let s1;
let s2;
let s3 = [200,100];
console.log(s3);
  
  //Text
  textSize(65);
  fill("yellow");
  textAlign(CENTER);
  text('Osas', width/2, height/8);

  //Circle 1
  fill("Blue");
  ellipse(250, 250, 150, 150);

  //Circle 2
  fill("#5314f5");
  ellipse(175, 250, 150, 150);

  //Rectangle
  rectMode(CENTER);
  fill("#c90076");
  rect(420, 250, 150);

  //Line
  push();
  strokeWeight(10);
  
  line(0, 150, 1000, 150);
  pop();
}
