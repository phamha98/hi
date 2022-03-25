// function Person(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.showName = function() {
//       console.log(this.firstName + ' ' + this.lastName);
//    };
//  }
 
//  var psn1 = new Person('Khoa', 'Nguyen');
 
//  // các property khai báo vào biến this có thể bị truy xuất từ bên ngoài
//  // object không còn bao đóng nữa
//  psn1.firstName = 'changed';
//  console.log(ps1.firstName); // changed

 //
 function Person(firstName, lastName) {
   var fstName = firstName;
   var lstName = lastName;
   
   this.setFirstName = function(firstName) { 
       fstName = firstName; 
   };
 
   this.getFirstName = function() {
       return fstName; 
   };
   
   this.setLastName = function(lastName) { 
       lstName = lastName; 
   };
 
   this.getLastName = function() { 
       return lstName; 
   };
 }
 
 var person1 = new Person('Khoa', 'Nguyen');
 console.log(person1.fstName); // Undefined, không thể truy cập được
 
 
 console.log(person1.getFirstName()); // Khoa