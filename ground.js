

class Ground  {
  constructor(x, y, width, height) {
    const options = {
      isStatic:true
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill("brown");
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
