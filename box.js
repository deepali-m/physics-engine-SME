
class Box {
  constructor(x, y, w, h) {
    const options = {
      restitution: 0.5
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show() {
    var pos = this.body.position;
    push();
    fill("pink");
    rectMode(CENTER);
    rectMode(CENTER);
    rect( pos.x, pos.y, this.w, this.h);
    pop();
  }
}
