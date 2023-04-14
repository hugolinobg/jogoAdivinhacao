const inputNumber = document.querySelector("#inputNumber")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const attemptNumber = document.querySelector("span")
const screenOne = document.querySelector(".screen1")
const screentwo = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleRestClick)
document.addEventListener("keydown", handleEnterClick)

function handleTryClick(event) {
  event.preventDefault()

  let inputValue = Number(inputNumber.value)
  let validatingField = inputValue == ""
  let comparingTheNumber = inputValue == randomNumber

  if (validatingField) {
    alert("Por favor! informe o número entre 0 e 10!")
  } else {
    if (inputValue >= 0 && inputValue <= 10) {
      if (comparingTheNumber) {
        toggleScreen()
        attemptNumber.innerText = xAttempts
      }
    } else {
      alert("Informe o número entre 0 e 10!")
    }

    xAttempts++
  }

  inputNumber.value = ""
}

function handleRestClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function handleEnterClick(e) {
  if (e.key == "Enter" && screenOne.classList.contains("hide")) {
    handleRestClick()
  }
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screentwo.classList.toggle("hide")
}
