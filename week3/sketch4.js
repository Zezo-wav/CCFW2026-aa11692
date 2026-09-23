

// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

let hueOff = 0;

function setup() {
  createCanvas(100, 100);

  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background(0,0,15);
  // Insert your drawing here

  drawtrin();
}

function drawtrin(){

  noFill();
  stroke(255);
  strokeWeight(0);

  const totalTriangles = 100;

  for(i=0; i < totalTriangles; i++){

    push();
    translate(50, 54);
    rotate(i * 25);
    scale(pow(0.8, i));
    let baseHue = map(i, 0, totalTriangles, 0, 360); 
    let currentHue = (baseHue + hueOff) % 360;
    let brightVal = map(i, 0, totalTriangles, 100, 20); 
    let satVal = map(i, 0, totalTriangles, 80, 50);
    fill(currentHue, satVal, brightVal, 0.9);
    triangle(0, -45, -39, 22.5, 39, 22.5);
    pop();

  }

}

  function mousePressed() {
     hueOff = random(0, 360); 
  }

  

    
