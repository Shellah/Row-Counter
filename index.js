// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch

// console.log(count)
// function increment() {
    // console.log("The button was clicked")
// }
let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count-el")// pass in arguments
let count = 0

console.log(saveEl)

function increment() {
    // count= count + 1
    count +=  1
    countEl.innerText = count
}
// 1. create a function; save(), which logs out the count when its called

function save()  {
    console.log(count)
}



// google:
// innerText alternative mdn
// innerText

function save() {
    let countStr = count + " - "
saveEl.textContent += countStr
countEl.textContent = 0
count = 0

console.log(count)
}

// create two variables, name and greetings.The namwe variable should store your name,
// and the greeting should store eg "Hi,my name is"

// create a thirdf variable; myGreeting, that contatenates the two strings
// log myGreeting to the console.

// let name = "Shellah Gwenzi"
// let greeting = "Hi,my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)




