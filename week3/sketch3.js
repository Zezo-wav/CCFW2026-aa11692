

// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255,0,0);
  // Insert your drawing here

  drawtrin();
}

function drawtrin(){

  noFill();
  stroke(255);
  strokeWeight(5);

  const startx = 30;
  const starty = 30;
  const x = 20;
  const x2 = 23;
  const x3 = 28;
  const y = 20;
  const y2 = 30; 
  const y3 = 28;
  const space = 70;

  

  for(i=0; i < 20; i++){

    fill(0);
    triangle(x * (i / 2), y * (i / 2), x2 * (i / 2), y2 * (i / 2), x3 * (i / 2), y3 * (i / 2));

  }

  
 

    // for(j=0; j < 5; j++){

    //  stroke(1, (i+1) * 10, 175, (j+1) * 40);
    //  strokeWeight(3);
    //   push();
    //   translate(5, 10);
    //   triangle(x * (i / 2.5), y * (j / 2), x2 * (i / 2.5), y2 * (j / 2), x3 * (i / 2.5) , y3 * (j / 2));
    //   //polarLine(130 * i, 90, 0);
    //   pop();
    //   //ellipse(startx + (i * space), starty + (j * space), x );
      
    //   pop();
     }
    
