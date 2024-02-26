// console.log("Add friend social media feature")

const status = document.querySelector("h2")
const addButton = document.querySelector("#add")
const removeButton = document.querySelector("#remove")


addButton.addEventListener("click", () => {
    status.textContent = "Friend"
    status.style.color = "green"
})

removeButton.addEventListener("click", () => {
    status.textContent = "Stranger"
    status.style.color = "red"
})