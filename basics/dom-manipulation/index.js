// console.log("DOM Manipulation")

// 4 Pillars of DOM

// 1. Selection of an HTML Element
// 2. Change HTML Content
// 3. Change CSS Styling
// 4. Event Listener

// 1,2,3
// const headingElement = document.querySelector("h1")
// console.log(headingElement)
// headingElement.innerHTML = "Changed HTML"
// headingElement.style.backgroundColor = "GREY"
// headingElement.style.fontSize = "50px"
// headingElement.style.color = "BLUE"

// 4
// headingElement.addEventListener("click", () => {
//     console.log("Clicked")
// })


// const button = document.querySelector("button")
// const numberElement = document.querySelector("h2")
// let number = 0
// button.addEventListener("click", () => {
//     number++
//     console.log(number)
//     numberElement.innerHTML = `${number}`
// })

// const button = document.querySelector("button")
// const bulb = document.querySelector(".bulb")

// button.addEventListener("click", () => {
//
//     if(button.innerText === "ON") {
//         button.innerHTML = "OFF"
//         button.style.backgroundColor = "white"
//         bulb.style.backgroundColor = "yellow"
//     } else {
//         button.innerHTML = "ON"
//         button.style.backgroundColor = "black"
//         bulb.style.backgroundColor = "white"
//     }
//
// })


//with textContent (better option)
// button.addEventListener("click", () => {
//
//     if(button.textContent === "ON") {
//         button.textContent = "OFF"
//         button.style.backgroundColor = "white"
//         bulb.style.backgroundColor = "yellow"
//     } else {
//         button.textContent = "ON"
//         button.style.backgroundColor = "black"
//         bulb.style.backgroundColor = "white"
//     }
//
// })

//select multiple elements
// const headingElement = document.querySelectorAll("h1")
// console.log(headingElement.item(2).innerHTML)
// headingElement.forEach((e) => {
//     console.log(e.innerHTML)
// })

