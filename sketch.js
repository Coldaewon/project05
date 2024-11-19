let emitters = [];

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);
  for (let emitter of emitters) {
    emitter.run();
  }
}

function mousePressed() {
  
  emitters.push(new Emitter(mouseX, mouseY));
}


