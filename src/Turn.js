class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess
    this.currentCard = currentCard
    this.correct = false
  }

  returnGuess() {
    return this.userGuess
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    if(this.userGuess === this.currentCard.correctAnswer) {
      this.correct = true
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if(this.correct === true) {
      return 'correct'
    } else {
      return 'incorrect'
    }

  }
}

module.exports = Turn