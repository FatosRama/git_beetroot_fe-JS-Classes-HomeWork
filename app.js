class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this.radius;
  }

  set radius(value) {
    this.radius = value;
  }

  get diameter() {
    return this.radius * 2;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  calculateLength() {
    return 2 * Math.PI * this.radius;
  }
}