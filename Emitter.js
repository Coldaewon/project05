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
  