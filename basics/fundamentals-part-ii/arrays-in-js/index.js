const friend = ["Jay", "Jonas", "Martin"]
console.log(friend)

const years = Array(1991, 1992, 2003, 2005, 2010)
console.log(years)

const me = ["Smith", 2024 - 2000, "Programmer", friend]
console.log(me)

// array - functions-in-js
const friends = ["Jay", "Jonas", "Martin"]
// push
friends.push("Bob")
friends.push("Alice")
console.log(friends)

// unshift
friends.unshift("Sara")
console.log(friends)

// pop
const popped = friends.pop();
console.log(popped)
console.log(friends)

// shift
const shifted = friends.shift()
console.log(shifted)
console.log(friends)

// indexOf
console.log(friends.indexOf("Jonas")) // 1
console.log(friends.indexOf("Kimmy")) // -1

// includes(with strict equality)
console.log(friends.includes("Martin")) // True
console.log(friends.includes("Kimmy")) // False

// includes with condition
const friendName = "Martin"
if(friends.includes(friendName)) {
    console.log(`You have friend named: ${friendName}`)
} else {
    console.log("Unknown")
}

// const friendName = "Kimmy"
// if(friends.includes(friendName)) {
//     console.log(`You have friend named: ${friendName}`)
// } else {
//     console.log("Unknown person")
// }