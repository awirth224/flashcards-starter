const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    // this.currentTurn = new Turn(userGuess, currentCard)
    this.incorrectGuesses = []

  }

  returnCurrentCard() {
    return this.currentTurn.currentCard
  }

  takeTurn() {
    this.turnCount += 1
    this.currentTurn.evaluateGuess()
    this.currentTurn.giveFeedback()

    if (this.currentTurn.correct === false) {
      this.incorrectGuesses.push(this.currentTurn.currentCard.id)
    } else {
      this.correctGuesses.push(this.currentTurn.currentCard.id)
    }
  }

  calculatePercentCorrect() {
    const total = this.incorrectGuesses.length / this.deck.length
    const percent = total * 100
    return percent
  }

  endRound() {
    this.calculatePercentCorrect()
    console.log(`** Round Over! ** You answered ${percent}% of the questions correctly!`)
  }
}


module.exports = Round