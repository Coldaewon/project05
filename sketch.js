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

class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  run() {

    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }


    if (random(1) < 0.05) {
      this.addParticle();
    }
  }

  addParticle() {

    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    }
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-5, -1));
    this.acceleration = createVector(0, 0.1);
    this.lifespan = 255;
    this.color = color(random(200, 255), random(100, 200), random(100, 255));
  }

  run() {
    this.update();
    this.show();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 4;
  }

  show() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
    circle(this.position.x, this.position.y, 8);
  }

  isDead() {
    return this.lifespan < 0;
  }
}
