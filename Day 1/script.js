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
const z = 11
console.log(z);
z = 50
console.log(z);
//? error: When you declare a variable with const, it creates an immutable binding. This means the variable cannot be reassigned to a different value.








