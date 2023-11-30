let ball;
let bgColor;

function setup() {
  createCanvas(600,600);
  ball = new Ball();
  bgColor = color(200, 200, 200);
}

function draw() {
  background(bgColor);

  ball.move();
  ball.bounce();
  ball.display();
}

class Ball {
  constructor() {
    this.size = 90;
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(3, 2);
    this.color = color(random(255), random(255), random(255));
  }

  move() {
    this.position.add(this.velocity);
  }

  bounce() {
    if (this.position.x > width - this.size / 2 || this.position.x < this.size / 2) {
      this.velocity.x *= -1;
      this.changeColor();
    }

    if (this.position.y > height - this.size / 2 || this.position.y < this.size / 2) {
      this.velocity.y *= -1;
      this.changeColor();
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
    bgColor = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}