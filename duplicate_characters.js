// https://www.reddit.com/r/dailyprogrammer/comments/7cnqtw/20171113_challenge_340_easy_first_recurring/

// make a hashmap, count char nums
// go through hashmap and determine which
// char with more than one count came first

// declare empty array
// if .indexOf is not equal to -1, push in array

// set
const findFirstDup = s => {
  const charSet = new Set(s)
  const counter = {}
  for (i = 0; i < s.length; i += 1) {
    for (var char of charSet) {
      if (char === s[i]) {
        counter[i] += 1
        if (counter === 2) {
          return `${char} recurs at index ${i}`
        }
      }
    }
  }
}

// zero indexed
// create a number and check number of substrings
// equal to length of input

const rec = (recString) => {
  const recArr = recString.split(' ')
  for (let i = 0; i < recArr.length; i += 1) {
    const myString = recString.slice(i + 1, recString.length)
    if (myString.includes(recArr[i]){
      console.log(recArr[i] + recString.indexOf(recArr[i]))
    })
  }
}

// for loop to run through array after you split string to see if there were any matches


const findFirstDup5 = (s) => {
  const chars = s.split('')
  const seenChars = new Map()
  for (let i = 0; i < chars.length; i += 1) {
    const thisChar = chars[i]
    console.log('at index', i, 'map looks like', seenChars)
    console.log('looking at character: ', thisChar)
    const prevIndex = seenChars.get(thisChar)
    console.log('prevIndex', prevIndex)
    if (prevIndex !== undefined) {
      return `Found first duplicate char ${thisChar}
              First occurrence: index ${prevIndex}`
    }
    seenChars.set(thisChar, i)
  }
}
