function Person() {
    this.firstName = 'Per';
    this.lastName = 'son';
    this.sayName = function () {
        return this.firstName + ' ' + this.lastName
    };
}

// Viết một Constructor Function khác
function SuperMan(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
// Sử dụng prototype để kế thừa
SuperMan.prototype = new Person();

// Tạo một object mới bằng Constructor Function 
var sm = new SuperMan('Khoa', 'Nguyen');
sm.sayName(); // Khoa Nguyen. Hàm này kế thừa từ prototype của Person
  /**
 *  Khi trình thông dịch JS kiểm tra thuộc tính đối tượng
 *  định nghĩa cho nó, trước tiên nó kiểm kiểm tra object trước.
 *  Nếu object không có thuộc tính được định nghĩa, 
 *  nó sẽ kiểm tra prototype của đối tượng với cùng thuộc tính,
 *  nếu nó được tìm thấy, nó sẽ trả về thuộc tính đó.
 *  Nó khác với OOP trong Java là prototype object có 
 *  thể truy cập vào đối tượng tạo ra trước vào sau bất 
 *  kể khi nào có sự thay đổi nào trên prototype
 */

   function Bread() {}; // constructor function
   let brownBread = new Bread(); // object of type "Bread"
   let sodaBread = new Bread(); // object of type "Bread"
   Bread.prototype.toast = function() {
           console.log('I am toasting!');
       }; // set the function on a toast property on the prototype
   // inherited prototype is accessible!
   brownBread.toast(); // I am toasting!
   sodaBread.toast(); // I am toasting!

   