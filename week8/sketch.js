let tips = [
  { x: 255, y: 190 },  
  { x: 125, y: 230 },  
  { x: 390, y: 200 },  
  { x: 165, y: 145 },  
  { x: 340, y: 115 },  
  { x: 110, y: 260 },  
  { x: 170, y: 245 },
  { x: 365, y: 265 },
  { x: 400, y: 230 },
  { x: 190, y: 160 },
  { x: 295, y: 125 }
];
let leaves = [];

let wind = 0;



function setup() {
  createCanvas(500, 500);
  resetTree();
}

function draw() {
  background(100);

  wind = map(mouseX, 0, width, 0, 10) * noise(frameCount * 0.01);
  
  drawtree();

   for (let i = 0; i < leaves.length; i++) {
    leaves[i].update();
    leaves[i].display();
}

}

class Leaf {
  constructor(head, size, points, x, y, tip){
    this.head = head;
    this.maxSize = size;
    this.size = 1;
    this.points = points;
    this.x = x;
    this.y = y; 
    this.tip = tip;
    this.age = 0;
    this.lifespan = random(1800, 3600);
    this.offset = random(1000);
  }

 display() {

  let amt = constrain(this.age / this.lifespan, 0, 1);
  let r, g, b;

  if (amt < 0.5) {
    let t = map(amt, 0, 0.5, 0, 1);   
    r = lerp(210, 40, t);
    g = lerp(245, 150, t);
    b = lerp(200, 50, t);
  } 
  else {
    let t = map(amt, 0.5, 1, 0, 1);   
    r = lerp(40, 120, t);
    g = lerp(150, 80, t);
    b = lerp(50, 30, t);
  }
  
  push();
  let sway = sin(frameCount * 0.05 + this.offset) * wind;
  translate(this.x + sway, this.y);
  rotate(radians(this.head + sway * 3));
  noStroke();
  fill(r, g, b);

  if (this.points === 1) {
    ellipse(0, 0, this.size, this.size * 0.5);   // simple oval leaf
  } 
  
  else {
  for (let k = 0; k < this.points; k++) {
    let a = map(k, 0, this.points - 1, -45, 45);   // spread the lobes in a fan
    push();
    rotate(radians(a));
    ellipse(this.size * 0.3, 0, this.size * 0.6, this.size * 0.25);
    pop();
    }
  }

  pop();

  } 

  update() {
    this.age++;
    this.size = lerp(this.size, this.maxSize, 0.02);
  }

  isBrown() {
    return this.age >= this.lifespan;
  }

}

function drawtree() {

    push();
    
    stroke(100, 60, 30);
    noFill();
    strokeCap(ROUND);

    strokeWeight(28);
    bezier(250, 440, 210, 340, 290, 290, 255, 190);

    strokeWeight(16);
    bezier(250, 340, 210, 310, 160, 270, 125, 230);

    strokeWeight(14);
    bezier(270, 290, 310, 260, 350, 240, 390, 200);

    strokeWeight(11);
    bezier(260, 250, 230, 220, 190, 190, 165, 145);

    strokeWeight(10);
    bezier(255, 210, 290, 180, 315, 150, 340, 115);

    strokeWeight(5);

    line(160, 265, 110, 260);
    line(185, 285, 170, 245);

    line(340, 240, 365, 265);
    line(355, 230, 400, 230);

    line(205, 200, 190, 160);
    line(300, 165, 295, 125);

    noStroke();
    fill(160, 85, 55);

    rect(180, 430, 140, 18, 5);

    quad(190, 448, 310, 448, 295, 485, 205, 485);

    pop();
}

function mousePressed() {
  for (let i = leaves.length - 1; i >= 0; i--) {
    let l = leaves[i];

    let onLeaf = mouseX > l.x - l.size / 2 && mouseX < l.x + l.size / 2 && mouseY > l.y - l.size / 2 && mouseY < l.y + l.size / 2;

    if (onLeaf && l.isBrown()) {
      leaves.splice(i, 1);                   
      let newTip = floor(random(tips.length));
    if (newTip === l.tip) {
      newTip = (newTip + 1) % tips.length;   
    
    }
    leaves.push(makeLeaf(newTip));
    return;  
    }
  }
}
 
function makeLeaf(tipIndex) {
  let x = tips[tipIndex].x + random(-30, 30);
  let y = tips[tipIndex].y + random(-30, 30);

  let size = randomGaussian(17, 4);   // most leaves near 17, a few much bigger or smaller
  if (size < 8) {
    size = 8;
  }

  let points = random([1, 3, 5]);     // picks one of these numbers at random

  return new Leaf(random(360), size, points, x, y, tipIndex);
}

function keyPressed() {
  if (key === 'r') {
    resetTree();
  }
}

function resetTree() {
  leaves = [];   

  for (let i = 0; i < tips.length; i++) {
    for (let j = 0; j < 65; j++) {
      let leaf = makeLeaf(i);
      leaf.age = random(0, leaf.lifespan * 0.8);
      leaf.size = leaf.maxSize;
      leaves.push(leaf);
    }
  }
}