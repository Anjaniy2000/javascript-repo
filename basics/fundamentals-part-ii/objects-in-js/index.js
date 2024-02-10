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
console.log(robert.age)
console.log(robert.bestFriends[2])
console.log(robert.middleName)

//add new properties
robert.middleName = "Smith"
robert.location = "US"
console.log(robert.location)

console.log(robert["profession"])
const nameKey = "Name"
console.log(robert["first" + nameKey])
console.log(robert["last" + nameKey])
console.log(robert["middle" + nameKey])
console.log(robert.bestFriends.at(0))

console.log(robert["profileSummary"] ())