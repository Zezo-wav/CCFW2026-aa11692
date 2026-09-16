// Variables - setting up the variables to use in the code

let line_x1, line_x2, line_y1, line_y2;

let stroke_x;

let cir_x1, cir_y1, cir_w, cir_h;

let t, t1, t2, d; 

let radius, edge1_x;

let cr1_x, cr1_y, cr2_x, cr2_y, cr3_x, cr3_y;

let wa, wa2;

let cA, cB, amt, bc, bc2;

let hue1, hue2, ch1, ch2;

let baseHue, phaseShift;

function setup() {

  createCanvas(500, 500); // we create a 500 by 500 px canvas

  // Setting up the variables for the line shape that is the main driver beind the piece
  // It sets a random x and y coordinates that is not too close to the border, using the random() function
  line_x1 = random(50, 450);
  line_x2 = random(20, 450);
  line_y1 = random(20, 450);
  line_y2 = random(20, 450);

  stroke_x = random(3, 5); // Sets a random stroke value that influnces the stroke size of the circle, triangle, and line

  // t1 and t2 are used to set a random variable that influnces the amount of lerp, which is used to set up the placements of circle and triangle within the line
  t = random(0, 1);
  t1 = random(0, 1);
  t2 = t1 + random(0.15, 0.3); // t2 is based off t1 , so the triangle and circle are not plotting in the same pixels 

  // The circle dimensions and placement
  cir_x1 = lerp(line_x1, line_x2, t);
  cir_y1 = lerp(line_y1, line_y2, t);  
  cir_h = 30;
  cir_w = 30;

  // The triangle dimensions and placement
  cr1_x = lerp(line_x1, line_x2, t1);
  cr1_y = lerp(line_y1, line_y2, t1);
  cr2_x = lerp(line_x1, line_x2, t2);
  cr2_y = lerp(line_y1, line_y2, t2);
  cr3_x = cr1_x + 30;
  cr3_y = cr1_x - 30;

  // Setting a random diameter of the circle, where it tries and places the circle in different parts of the line, wether the circle is on the middle or the edge 
  d = random(15, 50);
  radius = d / 2;  
  edge1_x = cir_x1 + radius; 

  // This line sets up the color mode of the sketch, using HSB instead of RGB, so the code can process the hue wheel to achieve a gradual rise and fall of colors 
  colorMode(HSB, 360, 100, 100); 

  // these variables are used to set the base hue and how it will shift, using the random() function
  baseHue = random(0, 360);
  phaseShift = random(0, 6.28);

  frameRate(30); // sets the framerate to 30
}

function draw() {

  // Wa and wa2 are waves, like an LFO that will be used to set the hue two different hues 
  wa = sin(frameCount * 0.02);
  wa2 = sin(frameCount * 0.02 + phaseShift);

  // Setting the two hues that will be used within the shapes, it tries to have the two color hues gradually shift the colors to complementary colors
  hue1 = (baseHue + map(wa, -1, 1, 0, 60)) % 360;
  hue2 = (hue1 +180 + map(wa2, -1, 1, -30, 30)) % 360;

  // These are two starting points of the hue, where each shape will start on a color
  cA = color(200, 80, 100);
  cB = color(20, 80, 100);

  // These are used to set how much the hue shift, using the sin() funtion to get a gradual change 
  amt = (sin(frameCount * 0.02) +1) / 2;
  bc = lerpColor(cA, cB, amt);
  bc2 = lerpColor(cB, cA, amt);

  // printing part of the code - everything gets printed onto the canvas

  //background

  background('#963939');

  //Shapes

  push();
  stroke("black");
  strokeWeight(stroke_x);
  line(line_x1, line_y1, line_x2, line_y2);
  rectMode(LEFT); 
  fill(hue1, 80, 100);
  ellipse(edge1_x, cir_y1, d, d);
  fill(hue2, 80, 100);
  rectMode(CORNER);
  triangle(cr1_x, cr1_y, cr2_x, cr2_y, cr3_x, cr3_y);
  pop();
  
}

