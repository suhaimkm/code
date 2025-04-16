class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  area() {
    this.area = (this.base * this.height) / 2;
    this.displayArea();
  }

  displayArea() {
    console.log(
      `Base: ${this.base}, Height: ${this.height}, Area: ${this.area}`
    );
  }
}

let triangle1 = new Triangle(10, 5);
triangle1.area();
let triangle2 = new Triangle(8, 4);
triangle2.area();
