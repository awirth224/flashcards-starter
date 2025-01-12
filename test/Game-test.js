const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Game', () => {
  let card1
  let card2
  let card3
  let card4
  let turn1
  let deck1
  let round1
  let game1
  beforeEach(() => {
    card1 = new Card(1,  "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object' )
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
    turn1 = new Turn('array', card1)
    deck1 = new Deck([card1, card2, card3, card4])
    round1 = new Round(deck1)
    game1 = new Game(round1)
  })

  it('Should be a function', () => {
    expect(Game).to.be.a('function')
  })

  it('Should be a new instance of Game', () => {
    expect(game1).to.be.an.instanceOf(Game)
  })

  it('Should have a method that creates new instances of cards', () => {
    expect(game1.createCards()[0]).to.deep.equal(card1)
  })

  it('Should have a method that creates a new instance of deck', () => {
    expect(game1.createDeck().cards[0]).to.deep.equal(deck1.cards[0])
  })

  it('Should have a method that creates a new instance of round', () => {
    expect(game1.createRound()).to.be.an.instanceOf(Round)
  })

})