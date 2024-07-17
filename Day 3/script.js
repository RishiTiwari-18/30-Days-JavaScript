// //? Task 1

// function check(num){
//     if(num > 0){
//         console.log("Number is positive");
//     }else if(num === 0 ){
//         console.log("Number is Zero");
//     }else if(num < 0){
//         console.log("Number is negative");
//     }else{
//         console.log("Given number is NaN");
//     }

// }

// check(6)

// //? Task 2

// const age = (e) => {
//     if (e >= 18) {
//         console.log("You are eligible to vote");
//     }else{
//         console.log("You cannot vote");
//     }
// }

// age(9)

// //? Task 3

// const numbers = (a, b, c) => {
//     if(a < b){
//         if(b < c){
//             console.log("c is the largest number");
//         }else{
//             console.log("b is the largest number");
//       }
//     }else{
//         console.log("a is the largest number");
//     }
// }

// numbers(13, 16, 8)


// //? Task 4

// const day = (e) => {
//     switch (e) {
//         case 1:
//             console.log("Monday");
//             break;

//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;

//         case 4:
//             console.log("Thursday");
//             break;

//         case 5:
//             console.log("Friday");
//             break;

//         case 6:
//             console.log("Saturday");
//             break;

//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("You serious!");
//             break;
//     }
// }

// day(7)


// //? Task 5


// let score = (e) => {
// switch (true) {
//     case e > 90:
//         console.log("A");
//         break;
//     case e > 80:
//         console.log("B");
//         break;
//     case e > 70:
//         console.log("C");
//         break;
//     case e > 60:
//         console.log("D");
//         break;
//     default:
//         console.log("F");
//         break;
// }}

// score(86)


// //? Task 6

// const num = -59
// const sol = num % 2 == 0 ? "Number is even" : "Number is odd"
// console.log(sol);