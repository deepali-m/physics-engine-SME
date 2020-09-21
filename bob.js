
class Bob{
  constructor(x, y, r) {
    const options = {
      restitution: 0.5
    };
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.World.add(world, this.body);
    this.r = r;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse( 0, 0, this.r , this.r );
    pop();
  }
}
