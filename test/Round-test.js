const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round')

describe('Round', () => {
  let card1
  let card2
  let card3
  let card4
  let turn1
  let turn2
  let turn3
  let turn4
  let deck1
  let round1

  beforeEach(() => {
    card1 = new Card(1,  "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object' )
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
    turn1 = new Turn('object', card1)
    turn2 = new Turn('object', card2)
    turn3 = new Turn('accessor method', card3)
    turn4 = new Turn ('accessor method', card4)
    deck1 = new Deck([card1, card2, card3, card4])
    round1 = new Round()
  })

  it('Should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('Should be a new instance of Round', () => {
    expect(round1).to.be.an.instanceOf(Round)
  })

  it('Should have a deck', () => {
    expect(round1.deck).to.equal(deck1)
  })

  it('Should count turns starting at 0', () => {
    expect(round1.turnCount).to.equal(0)
  })

  // it('Should have a current turn', () => {
  //   expect(round1.currentTurn).to.equal(turn1)
  // })

  it('Should have an array of incorrect guesses', () => {
    expect(round1.incorrectGuesses).to.deep.equal([])
  })

  it('Should have a method that returns the current card being played', () => {
    expect(round1.returnCurrentCard()).to.equal(deck[0])
  })

  it('Should have a method that updates the turn count', () => {
    expect(round1.takeTurn()).to.equal(1)
  })

  it('Should have a method that calculates the percentage of correct answers', () => {
    expect(round1.calculatePercentCorrect()).to.equal()
  })

  it('Should have a method that ends the round and reports that percent of questions answered correctly', () => {
    expect(round1.endRound()).to.equal()
  })

})