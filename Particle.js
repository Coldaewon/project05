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
  