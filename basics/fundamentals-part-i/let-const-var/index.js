let name1 = "Jay"
name1 = "Cooper"
console.log(name1)

const name2 = "Sara"
console.log(name2)
// name2 = "Jay"

var name3 = "Jonas"
console.log(name3)
name3 = "Smith"
console.log(name3)

//with functions-in-js:

// var
function example() {
    if (true) {
        var x = 10;
        console.log(x); // Output: 10
    }
    console.log(x); // Output: 10
}

example();

// let
// function example() {
//     if (true) {
//         let x = 10;
//         console.log(x); // Output: 10
//     }
//     console.log(x); // ReferenceError: y is not defined
// }
//
// example();

// const
// function example() {
//     if (true) {
//         const x = 10;
//         console.log(x); // Output: 10
//     }
//     console.log(x); // ReferenceError: y is not defined
// }
//
// example();

// understand with hoisting
console.log(me)
console.log(job) // ReferenceError: Cannot access 'job' before initialization
console.log(birthYear) // ReferenceError: Cannot access 'birthYear' before initialization


var me = "Harry"
let job = "programmer"
const birthYear = 2000