
let x = 0;
let xspeed = 10;
let pos = [
  [100,50], [0,100], [-100, 150], [0,0], [50, 100]
];
const numshapes = 5;

console.log(pos[2][1]);

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)
  
}

function draw() {
  background(255,0,0);

  // let s = 120;
  // //let x = (millis() / 50) % 500;
  // // let x = (second()) * 5;

  // let sp = mili();
  // x = map(sp, 0, 50, 0, width, true );
 
  // x = x + xspeed;

  // if ((x > width) || (x<0)) {

  //   xspeed = xspeed - 1;

  // }

  // ellipse(x, height/2 ,s);

  millis();

  for(i=0;i<5; i++){
    x++;
    if (pos[0][1]){
      true;

    }
    pos[i][0]++;
    pos[i][1]++;

    if(x > width){
      x = 0;
    }

    // console.log(x);

    ellipse(pos[i][0], pos[i][1], 100);
    text(i, pos[i][0], pos[i][1]);
  }

  
  
}

function frameCountExample() {


}