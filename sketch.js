let emitter;

function setup() {
  createCanvas(400, 400);
  emitter = new emitter(width / 2, height);
  
}

function draw() {
  background(0);
emitter.run();
}

class Emitter{
  constructor(x,y){
    this.origin = createVector(x,y);
    this.particles = [];
  }

  run(){
    for(let i = this.particles.length - 1; i >= 0; i--){
      this.particles[i].run();
      if(this.particles[i].isDead()){
        this.particles.splice(i,1);
      }
    }

    if(random(1) < 0.05){
      this.addParticle();
    }
    }
 
  addParticle(){
    for(let i = 0; i < 100; i++){
        this.particles.push(new Particle(this.origin.x, this.origin.y));
      }
  }
}

class Particle(
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-3, 0));
    this.acc = createVector(0, 0.1);
    this.lifespan = 255;
    this.color = color(random(200, 255), random(100, 200), random(100, 255));
  }

  run(){
    this.update();
    this.show();
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2;
  }

  show(){
    fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
    noStroke();
    circle(this.pos.x, this.pos.y, 8);
  }

  isDead(){
    return this.lifespan < 0;
  }
)