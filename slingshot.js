
class SlingShot {
  constructor( body,point) {
    const options = {
      
      bodyA: body,
      pointB:point,
      stiffness: 0.02,
      length: 40
    };
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyA = null;
    console.log("fly");
  }
  attach(body) {
    this.sling.bodyA = body;
  }
  show() {
    if (this.sling.bodyA) {
      stroke(0);
      strokeWeight(4);
      const posA = this.sling.bodyA.position;
      const posB = this.sling.pointB;
      line(posA.x, posA.y, posB.x, posB.y);
    }
  }

  
}
