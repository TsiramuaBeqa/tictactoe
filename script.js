const item = document.querySelectorAll(".game-item")
const message = document.querySelector(".message")
const res = document.querySelector(".restartBtn")
const restartBTN = document.querySelector(".restart")
let currentPlayer = "O"


for (let i of item) {
  i.addEventListener("click", function() {
    if (i.textContent == "") {
      if (currentPlayer == "X") {
        currentPlayer = "O"
        i.style.color = "rgba(255, 255, 0, 0.634)"
      } else {
        currentPlayer = "X"
        i.style.color = "rgb(206, 120, 14)"

      }
      i.textContent = currentPlayer
      checkWinner()
    } else {
      message.textContent = `Draw`
    }
  })
}


function checkWinner () {
  for (let i = 0; i < 7; i+=3) {
    if (item[i].textContent == item[i+1].textContent && item[i+1].textContent == item[i+2].textContent && item[i].textContent != "") {
      if (item[i].textContent == "X") {
        message.textContent = `${item[i].textContent} Player is Winner`
        message.style.color = "rgb(206, 120, 14)"
      } else {
        message.textContent = `${item[i].textContent} Player is Winner`
        message.style.color = "rgba(255, 255, 0, 0.634)"
      }
      endGame()
    }
  }

  for (let i = 0; i < 3; i++) {
    if (item[i].textContent == item[i+3].textContent && item[i+3].textContent == item[i+6].textContent && item[i].textContent != "") {
      if (item[i].textContent == "X") {
        message.textContent = `${item[i].textContent} Player is Winner`
        message.style.color = "rgb(206, 120, 14)"
      } else {
        message.textContent = `${item[i].textContent} Player is Winner`
        message.style.color = "rgba(255, 255, 0, 0.634)"
      }
      endGame()
    }
  }

  if (item[0].textContent == item[4].textContent && item[4].textContent == item[8].textContent && item[0].textContent != "") {
    if (item[8].textContent == "X") {
      message.textContent = `${item[8].textContent} Player is Winner`
      message.style.color = "rgb(206, 120, 14)"
    } else {
      message.textContent = `${item[8].textContent} Player is Winner`
      message.style.color = "rgba(255, 255, 0, 0.634)"
    }
    endGame()
  }

  if (item[2].textContent == item[4].textContent && item[4].textContent == item[6].textContent && item[2].textContent != "") {
    if (item[6].textContent == "X") {
      message.textContent = `${item[6].textContent} Player is Winner`
      message.style.color = "rgb(206, 120, 14)"
    } else {
      message.textContent = `${item[6].textContent} Player is Winner`
      message.style.color = "rgba(255, 255, 0, 0.634)"
    }
    endGame()
  }
}


function endGame() {
  for(let i of item) {
    i.style.pointerEvents = "none"
  }
}


restartBTN.addEventListener("click", function() {
  currentPlayer = "O"
  for (let i of item) {
    i.style.pointerEvents ="auto"
    i.textContent = ""
  }
  message.textContent = ""
})