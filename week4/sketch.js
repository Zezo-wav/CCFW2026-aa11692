// Plotter Template #2 (includes p5.Polar and p5.plotSvg)

// Press "s" to export drawing as SVG

p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false;

// Canvas dimensions: 8.5"x11" at 70 dpi
const DPI = 70; // dots per inch
const PAGE_W = 8.5 * DPI;
const PAGE_H = 11 * DPI;

let hueOff = 0;
let numTriangles = 60;

function setup() {
  createCanvas(PAGE_W, PAGE_H);
  noFill();
  setSvgGroupByStrokeColor(true);
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background(255);
  if (bDoExportSvg) {
    beginRecordSvg("output.svg");
  }

  myDrawing();

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}

////////////////////////////////////////

function myDrawing() {
  noStroke();

  let rotStep = map(mouseX, 0, width, 5, 45);
  let scaleFactor = map(mouseY, 0, height, 0.75, 0.95);

  for (let i = 0; i < numTriangles; i++) {
    push();

    translate(width / 2, height / 2);
    rotate(i * rotStep);
    scale(pow(scaleFactor, i));

    let baseHue = map(i, 0, numTriangles, 0, 360);
    let currentHue = (baseHue + hueOff) % 360;
    let brightVal = map(i, 0, numTriangles, 100, 20);
    let satVal = map(i, 0, numTriangles, 80, 50);

    
    fill(currentHue, satVal, brightVal, 0.9);

    
    triangle(0, -180, -156, 90, 156, 90);

    pop();
  }
}

function mousePressed() {
  hueOff = random(0, 360);
}

function keyPressed() {
  if (key == "s") {
    bDoExportSvg = true;
  }

  if (keyCode === UP_ARROW) {
    numTriangles = min(numTriangles + 10, 120);
  } else if (keyCode === DOWN_ARROW) {
    numTriangles = max(numTriangles - 10, 10);
  }
}