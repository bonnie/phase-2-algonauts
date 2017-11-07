// https://www.reddit.com/r/dailyprogrammer/comments/3d4fwj/20150713_challenge_223_easy_garland_words/
// 2017-11-01

// take original string
// make a copy
// do both lowercase
// split by space
// reversed one -- array comparison
//
// onion noino

const garland = (word) => {
  let degree = 0
  for (let i = 1; i < word.length; i += 1) {
    if (word.slice(0, i) === word.slice(-i)) {
      degree = i
    }
  }
  return degree
}

const celesteGarland = (word) => {
  const start = word[0]
  let potential = word.indexOf(start, 1)
  while (potential > 0) {
    if (potential === word.length - 1) {
      return 1
    }
    for (let i = 1; i + potential < word.length; i += 1) {
      if (word[i] !== word[potential + 1]) {
        potential = word.indexOf(start, potential + 1)
      } else if (potential + i === word.length - 1) {
        return (i + 1)
      }
    }
  }
  return 0
}
