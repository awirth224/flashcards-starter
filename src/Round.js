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
    let currentTurn = new Turn(userGuess, this.deck.cards[0])
    currentTurn.evaluateGuess()
    currentTurn.giveFeedback()

    if (currentTurn.correct === false) {
      this.incorrectGuesses.push(currentTurn.currentCard.id)
    }
    
    this.deck.cards.shift()
    return this.deck
  }

  calculatePercentCorrect() {
    this.takeTurn()
    const total = this.incorrectGuesses.length / this.turnCount
    const percent = total * 100
    return percent
  }

  endRound() {
    let percent = this.calculatePercentCorrect()
    console.log(`** Round Over! ** You answered ${percent}% of the questions correctly!`)
  }
}


module.exports = Round