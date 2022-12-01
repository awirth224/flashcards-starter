class Deck {
  constructor(cards) {
    this.cards = cards
  }

  countCards() {
    let length = this.cards.length
    return length
  }

}

module.exports = Deck