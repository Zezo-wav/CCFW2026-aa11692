// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255,0,0);
  // Insert your drawing here

  drawcircle();
}

function drawcircle(){

  noFill();
  stroke(255);
  strokeWeight(5);

  const startx = 100;
  const starty = 100;
  const x = 50;
  const space = 70;



  for(i=0; i < 5; i++){

    for(j=0; j < 5; j++){

      stroke(255, (i+1) * 50, 255, (j+1) * 50);
      
      push();
      push();
      setCenter(width/2, height/2)
      polarLine(130 * i, 90, 0);
      pop();
      ellipse(startx + (i * space), starty + (j * space), x );
      
      pop();
     }
  }
    
}
