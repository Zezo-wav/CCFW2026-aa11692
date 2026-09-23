let hueOff = 0; 
function setup() { 
  
  createCanvas(100, 100); 
  colorMode(HSB, 360, 100, 100, 1);  
  
  // PolarMap(50, 54); 
  translate(30, 30);
} 

function draw() { 
  background(0, 0, 15); 
  drawtrin(); 
} 

function drawtrin() { 
  noStroke(); const totalTriangles = 25; 


  
  for (let i = 0; i < totalTriangles; i++) { 


    push();
    translate(50, 50);
    let angle = i * 25; 
    let radius = 45 * pow(0.85, i);  
    let baseHue = map(i, 0, totalTriangles, 0, 360); 
    let currentHue = (baseHue + hueOff) % 360; 
    let brightVal = map(i, 0, totalTriangles, 100, 20); 
    let satVal = map(i, 0, totalTriangles, 80, 50); 
    fill(currentHue, satVal, brightVal, 0.9); 
    polarTriangle(angle, radius, 0); 

    pop();
  } 
  } 
  
  function mousePressed() { 
    hueOff = random(0, 360); 
   }