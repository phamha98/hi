```js
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
   /**
    * Symbol
    */
   let id1 = Symbol("id");

   /*
    * Tìm trong Global một Symbol với key là "id".
    * Nếu Symbol chưa tồn tại thì tạo mới một Symbol
    */
   let id2 = Symbol.for("id");
   
   /*
    * Tiếp tục tìm trong Global một Symbol với key là "id".
    * Lần này thì Symbol đã tồn tại rồi, nên sẽ trả về Symbol trên.
    */
   let id3 = Symbol.for("id");
   
   // Kết quả
   console.log(id1 === id2); // => false
   console.log(id2 === id3); // => true

//Ung dung key object
const id = Symbol("id");
const obj = {
  [id]: "abc123",
};

console.log(obj);
// => {Symbol(id): "abc123"}

console.log( typeof null);//object
let arr=[1,2,3,4]
arr.at(2)//3


const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(Infinity));
//[0, 1, 2, 3, 4, 5]

 
/**
 * chunk><flat 
 * some><every
 * toReversed&&reversed();sort
 * with & splice
 * include & find 
 * 
 * 
 * 
 */

/**function name  */
const func1 = function () {};

const object = {
  func2: function () {},
};

console.log(func1.name);
// Expected output: "func1"

console.log(object.func2.name);
// Expected output: "func2"

```
## props-type
```js
/**
 * @typedef {import('mongoose').Document} MongooseDocument
 * @typedef {import('mongoose').Model<any>} MongooseModel
 * @typedef {MongooseModel & typeof import('mongoose')} MongooseStaticModel
 * @typedef {MongooseDocument & { title: string, description: string, published: boolean }} GroupModel
 */

/**
 * Creates a group model.
 * @param {import('mongoose').Mongoose} mongoose - Mongoose instance.
 * @returns {MongooseModel}
 */
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const group = mongoose.model("group", schema);
    return group;
};

const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))

function checkIfUpdateNeeded(
  currentVersion,
  latestVersion,
  option,
  providerStoreUrl
) {
   
  return Promise.resolve(response);
}


```
```ts
export default app => {}
import users from './users.routes'
users(app)
```
```ts
module.exports = app => {
require("./tutorial.routes")(app);
```


[javadoc-tool](https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html#styleguide)
