function logger() {
    console.log("Hi, I'm Jonas")
}
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}
console.log(fruitProcessor(2, 3))
const number = prompt("Enter a number less then 0S")
alert("Thank you")

//function expression
const calculateAgeWiExpression = function(birthYear) {
    return(2024 - birthYear)
}
console.log(calculateAgeWiExpression())

// arrow functions-in-js
const calculateAgeWithArrow = (birthYear) => {
    return(2024 - birthYear)
}
console.log(calculateAgeWithArrow(2000))

const calculateYearsUntilRetirement = (firstName, birthYear) => {
    const age = 2024 - birthYear
    const retirement = 60 - age
    return(`${firstName} will be retired in ${retirement} years`)
}
console.log(calculateYearsUntilRetirement("Jonas", 2000))