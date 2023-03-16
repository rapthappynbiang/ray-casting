class Wall {
  constructor(aVec, bVec) {
    this.a = aVec;
    this.b = bVec;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.stroke();
  }
}
