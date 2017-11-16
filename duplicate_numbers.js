// strategy 1: sort numbers first
// strategy 2: reduce, use a hash object
// turn numbers into string, then convert back
//  -- or maybe filter
//  -- object with keys as number, value actual number
//
//  strategy 3:
//    turn numbers into array,
//    foreach,
//    filter out the current number,
//    unshift current number
//
//  strategy 4:
//    turn numbers into array
//    init empty array
//    forEach: if not already in new array, push to new array

const deDup3 = (numbers) => {
  const arrayToCull = numbers.split(' ') // O(n), where n is length of original string
  let culledArray = [] // O(1)

  // O(m), where m is the number of numbers
  arrayToCull.forEach((number) => {

    // O(m)
    culledArray =
      arrayToCull.filter(item => item !== number)

    // O(1)
    culledArray.push(number)

  })
  return culledArray
}

// O(m^2)

const deDup4 = (numString) => {
  const reggie = new RegExp('\d+', 'g')
  const numArray =
    reggie.exec(numString).forEach((element, index, array) => {
      array[index] = Number(element)
    })
  const answerArray = []
  numArray.forEach((el) => {
    if (!answerArray.includes(el)) {
      answerArray.push(el)
    }
  })
  return answerArray
}

// O(m^2)


const deDup = (numbers) => {
  const nums = numbers.split(' ') // O(n) where n is number of chars in the string
  const numsSeen = new Set(); // O(1)
  nums.forEach(num => numsSeen.add(num)) // O(m) where m is the number of numbers given
  numsSeen.forEach(num => console.log(num)) // O(m)
}
