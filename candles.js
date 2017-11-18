function birthdayCakeCandles(n, ar) {

  // best sort runtime = O(nlogn)
  const candleArr = ar.sort((a, b) => b - a)

  // O(1)
  const tallest = candleArr[0]

  // O(1)
  let counter = 0

  // O(n)
  for (let i = 0; i <= candleArr.length; i += 1) {
    // O(1)
    if (candleArr[i] === tallest) counter += 1
  }

  // O(1)
  return counter
}

// O(nlogn)
//
/**
 * [birthdayCakeCandles description]
 * @param  {[type]} n  [description]
 * @param  {[type]} ar [description]
 * @return {[type]}    [description]
 */
function birthdayCakeCandles2(n, ar) {
  // O(nlogn)
  ar.sort((a, b) => a - b)

  // O(1) + O(n) => O(n)
  return ar.length - ar.indexOf(ar[ar.length - 1])

  // array = [ 1, 1, 2, 3, 4, 5, 5, 5 ]
}

/**
 * [birthdayCakeCandles3 description]
 * @param  {[type]} n  [description]
 * @param  {[type]} ar [description]
 * @return {[type]}    [description]
 */
function birthdayCakeCandles3(n, ar) {
  let highest = 0 // O(1)
  let counter = 0 // O(1)

  // O(n)
  ar.forEach((height) => {

    // O(1)
    if (height === highest) counter += 1

    // O(1)
    if (height > highest) {
      highest = height
      counter = 1
    }
  })
  return counter
}

function birthdayCakeCandles4(n, ar) {
    const candleCounts = new Map()
    ar.forEach((height) => {
        if (candleCounts.has(height)) {
            candleCounts.set(height, candleCounts.get(height) + 1)
        } else {
            candleCounts.set(height, 1)
        }
    })
    const tallest = Math.max(...candleCounts.keys())
    return candleCounts.get(tallest)
}
