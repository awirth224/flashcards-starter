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

  it('Should have a method that returns the guess', () => {
    returnGuess()
    expect(turn1.returnGuess()).to.equal()
  })

  it('Should have a method that returns the card', () => {
    returnCard()
    expect(turn1.returnCard()).to.equal()
  })

})