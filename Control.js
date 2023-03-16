class Control {
  constructor() {
    this.rotateLeft = false;
    this.rotateRight = false;
    this.x = 1000 / 2;
    this.y = 1000 / 2;
    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.rotateLeft = true;
          break;
        case "ArrowRight":
          this.rotateLeft = true;
          break;
      }
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.rotateLeft = false;
          break;
        case "ArrowRight":
          this.rotateLeft = false;
          break;
      }
    };

    document.onmousemove = (event) => {
      this.x = event.offsetX;
      this.y = event.offsetY;
    };
  }
}
