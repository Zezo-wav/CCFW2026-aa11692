// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!

const quotes = [
  { text: "'Creative Coding' is a process, based on exploration, iteration, reflection and discovery, where code is used as the primary medium to create a wide range of media artifacts.", source: "Tim" },
  { text: "(Creative Coding) Is a term we use to describe the computer programming software and people that make expressive art and design through code.", source: "Maura" },
  { text: "(Creative Coding) is unbound by commercial constraints, fueled by curiosity and driven by an iterative process of experimentation, failure, feedback and unexpected discovery", source: "Patrik" },
  { text: "If programming a game is like writing a book, creative coding is writing a poem.", source: "Hunter" },
  { text: "Creative coding, fundamentally, is the practice of using computer programming to create art.", source: "Daniel" },
  { text: "Creative coding is an approach to programming in which code is used as an expressive tool, exploring themes beyond those of traditional programming. ", source: "Take-Me-To-The-Internet" },
  { text: "Creative coding art is a type of art created by computer programming whose goal is to create something expressive rather than functional.", source: "Yiko" },
  { text: "Creative coding is a growing artistic field that uses computer software as a medium to develop original creative expression.", source: "Art Pack" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable that holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Seed with millis() so each page load gives a different quote.
  randomSeed(millis());
  textSize(32);
  fill(10, 255, 10);
  // calls the function to pick a quote
  pickQuote();
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(255, 20, 250); // set the background color
  drawQuote();  // draw the quote on screen
}

function drawQuote() {   // draw text
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textStyle(BOLD);
  text("'" + current.text + "'", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}