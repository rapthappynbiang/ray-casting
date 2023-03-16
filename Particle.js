class Particle {
  constructor(pos, divisor) {
    this.pos = pos;
    this.rays = [];
    this.divisor = divisor || 10; // the degree of approximation
    for (let a = 0; a < 360; a += this.divisor) {
      this.rays.push(new Ray(this.pos, this.degreeToRadian(a)));
    }
  }
  degreeToRadian(degree) {
    return (degree / 180) * Math.PI;
  }

  update(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.stroke();
    /* test line to show all rays*/
    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].draw(ctx);
    }
  }
  look = function (ctx, walls) {
    for (let i = 0; i < this.rays.length; i++) {
      let pt;
      let closest = null;
      let record = Infinity;

      for (let j = 0; j < walls.length; j++) {
        pt = this.rays[i].cast(walls[j]);

        if (pt) {
          const dist = new Vector().dist(this.pos, pt);
          if (dist < record) {
            record = dist;
            closest = pt;
          }
        }
      }

      if (closest) {
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(closest.x, closest.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.stroke();
      }
    }
  };
}
