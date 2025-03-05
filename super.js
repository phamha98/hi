// Định nghĩa lớp Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

// Thêm phương thức area() vào prototype của Rectangle
Rectangle.prototype.area = function() {
    return this.width * this.height;
};

// Định nghĩa lớp Square kế thừa từ Rectangle
class Square extends Rectangle {
    constructor(side) {
        // Gọi constructor của Rectangle với width = height = side
        super(side, side);
    }
}

// Kiểm tra kết quả
const rect = new Rectangle(4, 5);
console.log(rect.area()); // Output: 20

const square = new Square(4);
console.log(square.area()); // Output: 16
