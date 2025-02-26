class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get perimeter() {
    return (this.width + this.height) * 2;
  }

  get isValid() {
    return this.width > 0 && this.height > 0;
  }
  isBiggerThan(shape) {
    return this.perimeter > shape.perimeter;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}

const r = new Rectangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid);
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid);
const c = new Square(10);
console.log(c.perimeter);
console.log(c.isBiggerThan(r));
console.log(r.isBiggerThan(c));
