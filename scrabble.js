// scrabble("ladilmy", "daily") -> true
// scrabble("eerriin", "eerie") -> false
// scrabble("orrpgma", "program") -> true
// scrabble("orppgma", "program") -> false

const letterCounts = (letters) => {
  const counts = new Map()
  letters.split('').forEach((letter) => {
    const currentCount = counts.get(letter) || 0
    counts.set(letter, currentCount + 1)
  })
  return counts
}

const scrabble = (hand, word) => {
  // scrabble("ladilmy", "daily")

  // handCounts => { 'l' => 2,
  //                  'a' => 1,
  //                  'd' => 1,
  //                  'i' => 1,
  //                  'm' => 1,
  //                  'y' => 1 }

  // wordCounts => { 'l' => 1,
  //                  'a' => 1,
  //                  'd' => 1,
  //                  'i' => 1,
  //                  'y' => 1 }

  const handCounts = letterCounts(hand)
  const wordCounts = letterCounts(word)

  let result = true
  wordCounts.forEach((letterFrequency, letter) => {
    if (handCounts.get(letter) < letterFrequency) {
      result = false
    }
  })
  return result
}
