// challenge: https://www.reddit.com/r/dailyprogrammer/comments/2tr6yn/2015126_challenge_199_bank_number_banners_pt_1/
// discussion recording: https://youtu.be/7wVEHiuJBoI
// 2017-11-08

// three empty arrays
// switch statement
// number -> string -> arrays
// iterate through array with switch
// push underscores and bars into arrays
// console.log joined arrays

const allyNums = (numberString) => {
  const row1 = []
  const row2 = []
  const row3 = []

  const splitNumbers = numberString.split('')
  splitNumbers.forEach(num => {
    switch (num) {
      case 0:
        row1.push(' _ ') // O(1) operation
      // etc.
    }
  })
  console.log('here are your numbers!') // O(1)
  console.log(row1.join('')) // O(n)
  console.log(row2.join('')) // O(n)
  console.log(row3.join('')) // O(n)
}

// O(n)

// same, using strings

// make 2d array that has three arrays, each array is top / middle / bottom
//

const celesteNumbers = (numberString) => {
  const translate = [
    [ ' _ ', '   ', ' _ '], // etc for the top line
    [], // middle line
    [], // bottom line
  ]
  const answer = ['', '', '']

  for (let i = 0; i < numberString.length; i++) {
    let currentNum = numberString[i]
    answer.forEach((element, index) => {
      answer[index] += translate[index][currentNumber] // O(n)?
    })
  }
  // print stuff out
}
