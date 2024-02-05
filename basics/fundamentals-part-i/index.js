// alert("Hello World")
// console.log("Hello world")
// console.log("2 + 3 = " + (2+3))

//variables and data types:
// let a = 10
// let pi = 3.14
// let name = "Jay"
// let isChecked = false
// let undefinedName
// let nullValue = null
// let largerNumber = 9007199254740991n
// let uniqueNumber = Symbol(31)
//
// console.log(a)
// console.log(pi)
// console.log(name)
// console.log(isChecked)
// console.log(undefinedName)
// console.log(nullValue)
// console.log(largerNumber)
// console.log(uniqueNumber)
//
// console.log(typeof a)
// console.log(typeof pi)
// console.log(typeof name)
// console.log(typeof isChecked)
// console.log(typeof nullValue)
// console.log(typeof largerNumber)
// console.log(typeof uniqueNumber)

//let, const and var
// let name1 = "Jay"
// name1 = "Cooper"
// console.log(name1)
//
// const name2 = "Sara"
// console.log(name2)
// // name2 = "Jay"
//
// var name3 = "Jonas"
// console.log(name3)
// name3 = "Smith"
// console.log(name3)

//with functions:

//var
// function example() {
//     if (true) {
//         var x = 10;
//         console.log(x); // Output: 10
//     }
//     console.log(x); // Output: 10
// }
//
// example();

//let
// function example() {
//     if (true) {
//         let x = 10;
//         console.log(x); // Output: 10
//     }
//     console.log(x); // Output: 10
// }
//
// example();

//const
// function example() {
//     if (true) {
//         const x = 10;
//         console.log(x); // Output: 10
//     }
//     console.log(x); // Output: 10
// }
//
// example();

//understand with hoisting
// console.log(me)
// console.log(job)
// console.log(birthYear)
//
//
// var me = "Harry"
// let job = "programmer"
// const birthYear = 2000

//Strings and Template Literals
// const firstName = "Jonas"
// const profession = "Programmer"
// const birthYear = 2000
// const currentYear = 2024

// const me = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!"
// console.log(`without template literal: ${me}`)

// const me = `I'm ${firstName}, a ${currentYear - birthYear} years old ${profession}!`
// console.log(`with template literals: ${me}`)
//
// console.log("multiple string lines")
// console.log(`hello
// multi line
// string is
// here`)

//truthy and falsy values:
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(-0))
// console.log(Boolean(""))
// console.log(Boolean(-12))
// console.log(Boolean("Jay"))
// console.log(Boolean([]))
// console.log(Boolean(NaN))

//with if-else statement
// let age
// if(age) {
//     console.log(`age is defined ${age}`)
// }else {
//     console.log("age is UNDEFINED")
// }

// == vs === equality operators
//
// // ==
// const age = 18
// console.log(age == 18)
// console.log(age == "18")
// console.log(age != "18")
//
// // ===
// console.log(age === "18")
// console.log(age === 18)
// console.log(age !== 19)

//ternary operator

// const age = 19
// const drink = age >= 18 ? "Wine" : "Juice"
// console.log(drink)
//
// //with string template literal
// console.log(`I like to drink: ${age >= 18 ? "Wine" : "Juice"}`)
