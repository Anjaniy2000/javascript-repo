// == vs === equality operators

// ==
const age = 18
console.log(age == 18)
console.log(age == "18")
console.log(age != "18")

// ===
console.log(age === "18")
console.log(age === 18)
console.log(age !== 19)

// ternary operator
const age = 19
const drink = age >= 18 ? "Wine" : "Juice"
console.log(drink)

// with string template literal
console.log(`I like to drink: ${age >= 18 ? "Wine" : "Juice"}`)