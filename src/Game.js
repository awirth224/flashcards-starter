const Card = require('./Card');
const Turn = require('../src/Turn');
const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound;
  }

  createCards() {
    let createdCards = prototypeQuestions.map((cards) => {
      return new Card(cards.id, cards.question, cards.answers, cards.correctAnswer)
    })
    return createdCards
  }

  createDeck() {
    let deck = new Deck(this.createCards())
    return deck
  }

  createRound() {
    this.currentRound = new Round(this.createDeck())
    return this.currentRound
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.createCards()
    let deck = this.createDeck()
    this.createRound()
    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;