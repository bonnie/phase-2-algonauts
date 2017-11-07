// https://www.reddit.com/r/dailyprogrammer/comments/2xoxum/20150302_challenge_204_easy_remembering_your_lines/
// 2017-11-07

const fs = require('fs')

const dialogueLineStart = '    '
const quote = dialogueLineStart + process.argv.slice(2).join(' ')
const macbeth = fs.readFileSync('./supporting_files/macbeth.txt', 'utf-8').split('\n')

const findPassage = (quoteLine) => {
  const quoteIndex = macbeth.indexOf(quoteLine)
  if (quoteIndex === -1) {
    console.log('line not found. Exiting.')
    process.exit(1)
  }

  // find previous lines
  const passage = []
  let line = quoteLine
  let currentIndex = quoteIndex
  while (line.startsWith(dialogueLineStart)) {
    passage.unshift(line)
    currentIndex--
    line = macbeth[currentIndex]
  }

  // find next lines
  currentIndex = quoteIndex + 1
  line = macbeth[currentIndex]
  while (/\S/.test(line)) {
    passage.push(line)
    currentIndex++
    line = macbeth[currentIndex]
  }
  return passage.join('\n')
}

console.log(findPassage(quote))
