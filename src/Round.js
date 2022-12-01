const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(userGuess) {
    this.turnCount += 1
    let currentTurn = new Turn(userGuess, this.deck[0])
    currentTurn.evaluateGuess()
    currentTurn.giveFeedback()

    if (this.currentTurn.correct === false) {
      this.incorrectGuesses.push(this.currentTurn.currentCard.id)
    }

    this.deck.shift()
    console.log('LABEL', this.deck)
  }

  calculatePercentCorrect() {
    const total = this.incorrectGuesses.length / this.deck.length
    const percent = total * 100
    return percent
  }

  endRound() {
    let percent = this.calculatePercentCorrect()
    console.log(`** Round Over! ** You answered ${percent}% of the questions correctly!`)
  }
}


module.exports = Round