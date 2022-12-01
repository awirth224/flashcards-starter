const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card1
  let turn1

  beforeEach(() => {
    card1 = new Card (1,  "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object' )
    turn1 = new Turn ('object', card1)
  })

  it('Should be a function', () => {
    expect(Turn).to.be.a('function')
  })

  it('Should be a new instance of Turn', () => {
    expect(turn1).to.be.an.instanceOf(Turn)
  })

  it('Should have a user guess', () => {
    expect(turn1.userGuess).to.equal('object')
  })

  it('Should have a current card', () => {
    expect(turn1.currentCard).to.equal(card1)
  })

  it('Should have a property that says whether the user guess is false', () => {
    expect(turn1.correct).to.equal(false)
  })

  it('Should have a method that returns the guess', () => {
    expect(turn1.returnGuess()).to.equal('object')
  })

  it('Should have a method that returns the card', () => {
    expect(turn1.returnCard()).to.equal(card1)
  })

  it('Should have a method that evaluates whether the user\'s guess is correct', () => {
    expect(turn1.evaluateGuess()).to.equal(true)
    turn1.evaluateGuess()
    expect(turn1.correct).to.equal(true)
  })
  

})