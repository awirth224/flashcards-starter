const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount]
  }

  takeTurn(userGuess) {
    let currentTurn = new Turn(userGuess, this.deck.cards[this.turnCount])
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentTurn.currentCard.id)
    }
    this.turnCount += 1
    return currentTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    this.takeTurn()
    const total = this.incorrectGuesses.length / this.turnCount
    const percent = total * 100
    return percent
  }

  endRound() {
    let percent = this.calculatePercentCorrect()
    let message = `** Round Over! ** You answered ${percent}% of the questions correctly!`
    console.log(message)
    return message
  }
}


module.exports = Round