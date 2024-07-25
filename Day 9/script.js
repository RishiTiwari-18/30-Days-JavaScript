//? Task 1

let greet = document.querySelector(".greet")
greet.textContent = "hieee"


//? Task 2

let greet2 = document.querySelector("#greet")
greet2.textContent = "hiii"


//? Task 3

let newDiv  = document.createElement("div")
newDiv.textContent = "new div"
document.body.appendChild(newDiv)


//? Task 4

let ul = document.querySelector("ul")
let newLi = document.createElement("li")
newLi.textContent = "new li"
ul.appendChild(newLi)


//? Task 5

let removeElem = document.querySelector("p")
removeElem.remove()
