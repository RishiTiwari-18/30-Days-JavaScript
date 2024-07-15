 //** Before going through the task I would suggest to comment the whole code in the file and then uncomment the desired task */









//! Activity 1: Variable Declaration
// Task 1
var a = 21;
console.log(a);


// Task 2
var b = "ME"
console.log(b);


//! Activity 2: Constant Declaration
// Task 3
var c = true;
console.log(c);


//! Activity 3: Data Types
// Task 4
let student = "Sameer"
//? string


let age = 20
//? Number


let Subject = ["Maths", "Bio", "Physics"]
//? object
//? Arrays in JavaScript are considered objects, which is why typeof Subject shows "object".


let pass = true;
//? Boolean


let marks = {Maths: 20, Bio: 18, Physics:17}
//? object


let attendence = null;
//? object
//? This behavior is a historical quirk in JavaScript; null is considered an object type.


let friends = undefined;
//? undefined


console.log(typeof(student));
console.log(typeof(age));
console.log(typeof(Subject));
console.log(typeof(pass));
console.log(typeof(marks));
console.log(typeof(attendence));
console.log(typeof(friends));


//! Activity 4: Reassigning Variables
// Task 5
let myAge = 20; 
console.log(myAge);
myAge = 21;
console.log(myAge);


//! Activity 5: Understanding const
// Task 6
/* const z = 11
console.log(z);
z = 50
console.log(z); */
//? error: When you declare a variable with const, it creates an immutable binding. This means the variable cannot be reassigned to a different value.




//! Featured Request
let string = "Something..."
let number = 11
let boolean = false;
let empty = null;   // can't declare a variable with name null because its a reserved keyword
let nothing = undefined;  // again an error will be shown but its not a reserved keyword
let array = [1, 2, 3]
let object = { object1: 1, object2: 2, object3: 3}

console.log(`${string} is a typeOf ${typeof(string)}`);
console.log(`${number} is a typeOf ${typeof(number)}`);
console.log(`${boolean} is a typeOf ${typeof(boolean)}`);
console.log(`${empty} is a typeOf ${typeof(empty)}`);
console.log(`${nothing} is a typeOf ${typeof(nothing)}`);
console.log(`${array} is a typeOf ${typeof(array)}`);
console.log(`${object} is a typeOf ${typeof(object)}`);


//! Req 2

//? Variables declared with let are mutable, meaning you can reassign their values.

let value1 = "anything"
console.log(value1);
value1 = "nothing"
console.log(value1);


//? Variables declared with const are immutable in terms of reassignment. Once you assign a value to a const variable, you cannot change it.

// const num1 = 1;
// console.log(num1);
// num1 = 3
// console.log(num1); // Error Obviously.
