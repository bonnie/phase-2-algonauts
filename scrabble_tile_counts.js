// https://www.reddit.com/r/dailyprogrammer/comments/4oylbo/20160620_challenge_272_easy_whats_in_the_bag/

const bagOTiles = {
    A: { count: 9, score: 1 },
    B: { count: 2, score: 3 },
    C: { count: 2, score: 3 },
    D: { count: 4, score: 2 },
    E: { count: 12, score: 1 },
    F: { count: 2, score: 4 },
    G: { count: 3, score: 2 },
    H: { count: 2, score: 4 },
    I: { count: 9, score: 1 },
    J: { count: 1, score: 8 },
    K: { count: 1, score: 5 },
    L: { count: 4, score: 1 },
    M: { count: 2, score: 3 },
    N: { count: 6, score: 1 },
    O: { count: 8, score: 1 },
    P: { count: 2, score: 3 },
    Q: { count: 1, score: 10 },
    R: { count: 6, score: 1 },
    S: { count: 4, score: 1 },
    T: { count: 6, score: 1 },
    U: { count: 4, score: 1 },
    V: { count: 2, score: 4 },
    W: { count: 2, score: 4 },
    X: { count: 1, score: 8 },
    Y: { count: 2, score: 4 },
    Z: { count: 1, score: 10 },
    '_': { count: 2, score: 0 }
}

const input1 = 'AEERTYOXMCNB_S'

const whatsInTheBag = (input) => {
  const result = {}
  const letters = input.split('')
  
  // decrement count for used letters
  letters.forEach((letter) => {
    if (bagOTiles[letter].count <= 0) {
        console.error('invalid input')
        process.exit(1)
    }
    bagOTiles[letter].count--
  })

  // keys: counts, 
  // values: arrays of letters with that count
  const tileCounts = {}

  Object.keys(bagOTiles).forEach(tile => {
      const count = bagOTiles[tile].count
      if (tileCounts[count]) {
          tileCounts[count].push(tile)
      } else {
          tileCounts[count] = [tile]
      }
  })
    
  Object.keys(tileCounts).sort((a, b) => b - a).forEach(count => {
      const letters = tileCounts[count]
      if (letters) {
        console.log(`${count}: ${letters.sort().join(', ')}`)
      }
    })
}

whatsInTheBag(input1)
	   