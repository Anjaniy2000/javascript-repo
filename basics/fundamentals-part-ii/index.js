// function logger() {
//     console.log("Hi, I'm Jonas")
// }
//
// logger()
// logger()
// logger()
//
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }
//
// console.log(fruitProcessor(2, 3))
// const number = prompt("Enter a number less then 0S")
// alert("Thank you")

//function expression
// const calculateAge = function(birthYear) {
//     return(2024 - age)
// }
//
// console.log(calculateAge())

//arrow functions
// const calculateAge = (birthYear) => {
//     return(2024 - birthYear)
// }
//
// console.log(calculateAge(2000))

// const calculateYearsUntilRetirement = (firstName, birthYear) => {
//     const age = 2024 - birthYear
//     const retirement = 60 - age
//     return(`${firstName} will be retired in ${retirement} years`)
// }
//
// console.log(calculateYearsUntilRetirement("Jonas", 2000))

//arrays
// const friend = ["Jay", "Jonas", "Martin"]
// console.log(friend)
//
// const years = Array(1991, 1992, 2003, 2005, 2010)
// console.log(years)
//
// const me = ["Smith", 2024 - 2000, "Programmer", friend]
// console.log(me)

//array - functions
// const friends = ["Jay", "Jonas", "Martin"]
// //push
// friends.push("Bob")
// friends.push("Alice")
// console.log(friends)
//
// //unshift
// friends.unshift("Sara")
// console.log(friends)
//
// //pop
// const popped = friends.pop();
// console.log(popped)
// console.log(friends)
//
// //shift
// const shifted = friends.shift()
// console.log(shifted)
// console.log(friends)
//
// //indexOf
// console.log(friends.indexOf("Jonas")) // 1
// console.log(friends.indexOf("Kimmy")) // -1
//
// //includes(with strict equality)
// console.log(friends.includes("Martin")) // True
// console.log(friends.includes("Kimmy")) // False

//includes with condition
// const friendName = "Martin"
// if(friends.includes(friendName)) {
//     console.log(`You have friend named: ${friendName}`)
// } else {
//     console.log("Unknown")
// }
//
// const friendName = "Kimmy"
// if(friends.includes(friendName)) {
//     console.log(`You have friend named: ${friendName}`)
// } else {
//     console.log("Unknown person")
// }

//objects
const friends = ["Jay", "Jonas", "Martin"]
const birthYear = 2000
const robert = {
    firstName: "Robert",
    lastName: "Downey JR",
    age: (2024 - birthYear),
    profession: "Programmer",
    bestFriends: friends,
    duties: ["father", "programmer", "husband"],
    hasDrivingLicense: true,
    greet: function () {
        return(`Hello everyone, I'm ${this.firstName}`)
    },
    profileSummary: function () {
        return(`I'm ${this.firstName} ${this.lastName}. 
        I'm ${this.age} years old ${this.profession}. 
        I'm ${(this.hasDrivingLicense ? 'having' : 'not having')} a driving license.`)
    }
}
//
// console.log(robert)
console.log(robert.greet())
// console.log(robert.age)
// console.log(robert.friends[2])
// console.log(robert.middleName)
//
// //add new properties
// robert.middleName = "Smith"
// robert.location = "US"
// console.log(robert.location)
//
// console.log(robert["profession"])
// const nameKey = "Name"
// console.log(robert["first" + nameKey])
// console.log(robert["last" + nameKey])
// console.log(robert["middle" + nameKey])
// console.log(robert.friends.at(0))

console.log(robert["profileSummary"] ())

