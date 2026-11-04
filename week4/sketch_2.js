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

  background(255,255,255);
  
  translate(width/2, height/2);
  push();
  rectMode(CENTER);
  rect(0,0,400);
  line(10, 20);
  pop()

}

