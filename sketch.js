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
    this.addParticle();
  }
  addParticle(){
    this.particles.push(new this.particles(this.origin.x, this.origin.y));
  }
}