// challenge: https://www.reddit.com/r/dailyprogrammer/comments/2hssx6/29092014_challenge_182_easy_the_column_conundrum/
// 2017-11-13

const fs = require('fs')

const textFile =
  fs.readFileSync('supporting_files/columns-input.txt', 'utf-8')

const newspaperfy = (inputFile) => {
  const lines = inputFile.split('\n')
  const [numCols, colWidth, spaceWidth] = lines[0].split(' ')
  const actualText = lines.slice(1).join('')
  // using regex :D create ONE column of specified width (array of strings)
  const lineLengthRE = new RegExp(`.{${colWidth}}`, 'g')
  const singleColumn = actualText.match(lineLengthRE)
  singleColumn.push(actualText.slice(0 - actualText % lineLengthRE))
  const linesPerColumn = Math.ceil(singleColumn.length / numCols)
  let output = ''
  // assemble the text
  for (let i = 0; i < linesPerColumn; i += 1) {
    // joining the text left as an exercise for the reader
    output = singleColumn[i]
  }
}

// using regex :D create ONE column of specified width (array of strings)
// using math, break it up into required number of columns (many arrays of strings)
// pull from each column array in turn

newspaperfy(textFile)
