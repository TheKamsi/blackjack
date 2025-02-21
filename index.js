let player = {
    name: "Kamsi",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent += `${player.name}: $${player.chips}`

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1)

    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard,secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards: `
    for (let count = 0; count < cards.length; count++) {
        cardsEl.textContent += `${cards[count]} `
    }

    sumEl.textContent = ` Sum: ${sum}`

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
        console.log(message)
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newDraw = getRandomCard()
        sum += newDraw
        cards.push(newDraw)
        renderGame()
    }
}