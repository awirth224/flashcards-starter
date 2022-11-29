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
  let deck1
  let turn1
  let round1

  beforeEach(() => {
    card1 = new Card(1,  "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object' )
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    deck1 = new Deck([card1, card2, card3])
    turn1 = new Turn('object', card1)
    round1 = new Round(turn1)
  })

  it('Should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('Should be a new instance of Round', () => {
    expect(round1).to.be.an.instanceOf(Round)
  })

  it('Should count turns starting at 0', () => {
    expect(round1.turnCount).to.equal(0)
  })

  it('Should have a current turn', () => {
    expect(round1.currentTurn).to.equal(turn1)
  })

  it('Should have a method that returns the current card being played', () => {
    expect(round1.returnCurrentCard()).to.equal()
  })

  it('Should have a method that updates the turn count', () => {
    expect(round1.takeTurn()).to.equal()
  })

  it('Should have a method that calculates the percentage of correct answers', () => {
    expect(round1.calculatePercentage()).to.equal()
  })

})