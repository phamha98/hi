const obj = Object.freeze({ key: 'value' });
obj.newKey = 'sad'; // Thêm một thuộc tính mới vào đối tượng
console.log('obj', obj); // Output: { key: 'value' }


const obj = {};

// Định nghĩa thuộc tính 'key' của đối tượng obj và đặt writable thành false
Object.defineProperty(obj, 'key', {
  value: 'value',
  writable: false
});

// Khi cố gắng thay đổi thuộc tính 'key', JavaScript sẽ ném ra một lỗi trong chế độ nghiêm ngặt (strict mode)
obj.key = 'new value'; // Lỗi: Cannot assign to read only property 'key' of object
const obj = { key: 'value' };

const readOnlyObj = new Proxy(obj, {
  set: function(target, property, value) {
    throw new Error(`Cannot set property '${property}'`);
  },
  deleteProperty: function(target, property) {
    throw new Error(`Cannot delete property '${property}'`);
  }
});

// Khi cố gắng thay đổi thuộc tính hoặc xóa thuộc tính của đối tượng readOnlyObj, JavaScript sẽ ném ra một lỗi
readOnlyObj.key = 'new value'; // Error: Cannot set property 'key'
delete readOnlyObj.key; // Error: Cannot delete property 'key'


let proxy = new Proxy(student, {
    set(target, prop, val) {
      if(prop === "education" || prop === "age") {
        target[prop] = val;
        return true
      }

      console.warn("only add education")
      return false            
    },
  })

  let student = {
    name: "John",
    age: 12
  };

  console.log(student)

  var proxy = new Proxy(student, {
    get(target, prop) {
      if(prop === "name") {
        throw Error("private of student")
      }

      return target[prop]
    },
  })

  let student = {
    name: "John",
    age: 12
  };

  console.log(student)

let proxy = new Proxy(student, {
   
    deleteProperty (target, key) {
      if(key === 'name') {
        throw Error("no access devare")
      }

      delete target[key]
    },
  })

    // delete
    delete proxy.education // ok
    delete proxy.name // no
    console.log(proxy) //Proxy {name: "a", age: 12}
    /**
     * proxy
     * @link https://javascript.info/proxy
     */
   // Hàm bind() hoạt động thế nào
   // Method bind() cũng tương tự như call() nhưng có 1 điểm khác biệt nhỏ. Thay vì gọi function trực tiếp thì bind() trả về một hàm mới.
    let getName = function(hobby1, hobby2) {
        console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
    }
   
   let user = {
      name: 'Tapas',
      address: 'Bangalore'  
    };
   
   let hobbies = ['Swimming', 'Blogging'];
   let newFn = getName.bind(user, hobbies[0], hobbies[1]); 
   
   newFn();
