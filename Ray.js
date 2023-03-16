class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = new Vector().fromAngle(angle);
  }

  cast = function (boundary) {
    const x1 = boundary.a.x;
    const y1 = boundary.a.y;
    const x2 = boundary.b.x;
    const y2 = boundary.b.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    // if denominator is zero then the ray and boundary are parallel
    if (den === 0) {
      return;
    }

    // numerator divided by denominator
    let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    if (t > 0 && t < 1 && u > 0) {
      const pt = new Vector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return;
    }
  };
  draw(ctx) {
    ctx.translate(this.pos.x, this.pos.y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.dir.x * 10, this.dir.y * 10);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}
