const ourCounter = document.querySelector("#counter")
let count = 0


document.addEventListener("DOMContentLoaded", function(event) {
    let originalTimer;
    function startTimer () {
        originalTimer = setInterval(function() {
    count ++
    ourCounter.innerHTML = count
    }, 1000) 
    }
    startTimer() 

    let minus = document.querySelector("#minus")

minus.addEventListener("click", function(event) {
    ourCounter.innerHTML = count
    count--
})

let plus = document.querySelector("#plus")

plus.addEventListener("click", function(event) {
    ourCounter.innerHTML = count
    count++
})

let likeContainer = document.querySelector("ul")
let likeCounter = 0

heart.addEventListener("click", function(event) {
    likeContainer.innerHTML = "Likes: " +  `${likeCounter += 1}`
})

let pauseButton = document.querySelector("button#pause")



pauseButton.addEventListener("click", function(event) {
    clearInterval(originalTimer)
    pauseButton.innerText = "resume"
    pauseButton.id = "resume"
})

let resumeButton = document.querySelector("button#resume")

resumeButton.addEventListener("click", function(event) {
    startTimer()
    resumeButton.innerText = "pause"
    resumeButton.id = "pause"
})



})

















