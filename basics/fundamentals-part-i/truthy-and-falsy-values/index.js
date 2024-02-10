console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(-0))
console.log(Boolean(""))
console.log(Boolean(-12))
console.log(Boolean("Jay"))
console.log(Boolean([]))
console.log(Boolean(NaN))

// with if-else statement
let age
if(age) {
    console.log(`age is defined ${age}`)
}else {
    console.log("age is UNDEFINED")
}