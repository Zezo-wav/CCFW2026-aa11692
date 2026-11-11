let song;
let amp;
let fft;

let x = 0;
let row = 0;
let rowHeight = 80; 
let prevX = 0;
let prevYUpper = 0;
let prevYLower = 0;

let started = false;
let startTime = 0;
let newRow = true; 

async function setup() {
  song = await loadSound('media/Automatic.mp3');
  
  let totalSeconds = song.duration();
  let totalRows = ceil(totalSeconds / 15);
  createCanvas(600, totalRows * rowHeight);
  background(20);
  
  amp = new p5.Amplitude();
  song.connect(amp);
  fft = new p5.FFT(1024);
  song.connect(fft);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text('Click to start', width / 2, rowHeight / 2);

  colorMode(HSB, 360, 100, 100); 
}

function draw() {
  if (!started) return;

  let t = (millis() - startTime) / 1000;
  if (t >= song.duration()) return; 

  let currentRow = floor(t / 15);
  x = ((t % 15) / 15) * width;

  if (currentRow !== row) {
    row = currentRow;
    newRow = true;
  }

  let level = amp.getLevel(); 
  if (!isFinite(level)) level = 0;

  let spectrum = fft.analyze();
  let strongestFreq = getStrongestFrequency(spectrum);

  let spacing = map(level, 0, 0.3, 2, rowHeight * 0.8, true);

  let hueVal = map(log(strongestFreq), log(40), log(5000), 0, 300, true);

  stroke(hueVal, 80, 90);
  strokeWeight(2);

  let centerY = row * rowHeight + rowHeight / 2;
  let currentYUpper = centerY - spacing / 2;
  let currentYLower = centerY + spacing / 2;

  if (!newRow) {
    line(prevX, prevYUpper, x, currentYUpper);
    line(prevX, prevYLower, x, currentYLower);
  }

  prevX = x;
  prevYUpper = currentYUpper;
  prevYLower = currentYLower;
  newRow = false;
}

function getStrongestFrequency(spectrum) {

  if (!spectrum || spectrum.length < 2) return 440;
  let maxIndex = 1;
  for (let i = 1; i < spectrum.length; i++) {
    if (spectrum[i] > spectrum[maxIndex]) maxIndex = i;
  }
  let nyquist = getAudioContext().sampleRate / 2;
  let freq = (maxIndex / spectrum.length) * nyquist;
  return isFinite(freq) ? max(freq, 40) : 440;
}

function mousePressed() {
  
  if (started || !song) return;
  if (typeof userStartAudio === 'function') userStartAudio();

  background(20);
  song.play();
  startTime = millis();
  started = true;
}