class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  fromAngle(angle, v) {
    if (v === undefined || v === null) {
      v = new Vector();
    }

    v.x = Math.cos(angle);
    v.y = Math.sin(angle);
    return v;
  }

  dist(v1, v2) {
    let dx = v1.x - v2.x,
      dy = v1.y - v2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
