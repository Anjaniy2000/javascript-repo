const firstName = "Jonas"
const profession = "Programmer"
const birthYear = 2000
const currentYear = 2024

// const me = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!"
// console.log(`without template literal: ${me}`)

const me = `I'm ${firstName}, a ${currentYear - birthYear} years old ${profession}!`
console.log(`with template literals: ${me}`)

console.log("multiple string lines")
console.log(`hello
multi line
string is
here`)