// https://www.reddit.com/r/dailyprogrammer/comments/2mkh5g/weekly_17_mini_challenges/
// 2017-11-06

const brittanyCount = (string) => {
  const letters = string.toLowerCase().split('')
  const symbols = [' ', ',', '.', '-', ';', ':', '!', '?']
  let counter = {}
  letters.forEach(letter => {
    if (!symbols.includes(letter)) {
      counter.letter = 0
    }
  })
  letters.forEach(element => {
    if (!symbols.includes(element)) {
      counter[element] += 1
    }
  })
  console.log(counter)
}

// O(n) + O(n) => O(2n) => O(n)

const countKelceyJonathan = (string) {
  const lcstring = string.toLowerCase().replace(/\W/g, '')
  const tracker = {}
  lcstring.forEach(letter => {
    tracker[letter] ? tracker[letter] += 1 : tracker[letter] = 1
  }
  return tracker
}

// O(n) + O(n) => O(n)

string.replace(/\W/g, '')

letter = 'a'
counter.letter === counter['letter'] !== counter[letter]
counter[letter] === counter['a']
