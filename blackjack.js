// don't read the spec

// convert input into "useful format"
// declare variable for each player, equal to empty array
// populate each player with hand
// object of key value - key: string of card, value: point value of card
// regular expressions

// switch for determining value from card <- worse runtime than using a map

// function array of numbers/ AQKJ => total of hand
// regex conver staring to something that could be represented in array

// 4
// Alice: Ace of Diamonds, Ten of Clubs
// Bob: Three of Hearts, Six of Spades, Seven of Spades
// Chris: Ten of Hearts, Three of Diamonds, Jack of Clubs
// David: Two of Hearts, Three of Clubs, Three of Hearts, Five of Hearts, Six of Hearts

const fs = require('fs')

const CARD_VALUES = new Map()
CARD_VALUES.set('Two', 2)
CARD_VALUES.set('Three', 3)
CARD_VALUES.set('Four', 4)
CARD_VALUES.set('Five', 5)
CARD_VALUES.set('Six', 6)
CARD_VALUES.set('Seven', 7)
CARD_VALUES.set('Eight', 8)
CARD_VALUES.set('Nine', 9)
CARD_VALUES.set('Ten', 10)
CARD_VALUES.set('Jack', 10)
CARD_VALUES.set('Queen', 10)
CARD_VALUES.set('King', 10)
CARD_VALUES.set('Ace', 'a')

const input = fs.readFileSync('./input1', 'utf-8').split('\n')

const numPlayers = Number(input[0]) // why?
const playerHands = input.slice(1)
const cardsRE = /^\w+/

// Chris: Ten of Hearts, Three of Diamonds, Jack of Clubs

playerHands.forEach((hand) => {
  let [playerName, cards] = hand.split(': ')
  cards = cards.split(', ')
  cards = cards.map(card => CARD_VALUES.get(cardsRE.exec(card)[0]))
  console.log(playerName, cards)
})
