const stopWords = ['I', 'a', 'about', 'an', 'and','are', 'as', 'at', 'be', 'by', 'com', 'for', 'from','how','in', 'is', 'it', 'of', 'on', 'or', 'that','the', 'this','to', 'was', 'what', 'when','where','who', 'will', 'with','the',]
const peterPiper = 'Peter Piper picked a peck of pickled peppers'
const bugsBunny = 'Bugs Bunny liked to dance a slow simple shuffle'

/**
 * 
 * @param {string} phrase - phrase to parse for alliteration
 * @returns {array} - array of alliterations in the phrase
 */
const findAlliteration = (phrase) => {

    const alliterations = []

    // 1. break into an array
    const words = phrase.split(' ')

    // 2. loop through array to 
        // find matching words
        // ignore stop words
    
    let word
    let currentAlliterationLetter
    let currentAlliterationArray = []
    let thisWord
    for (let i = 0; i < words.length; i += 1) {
        thisWord = words[i]
        if (stopWords.includes(thisWord)) {
            continue
        }
        if (thisWord[0].toLowerCase() === currentAlliterationLetter) {
            // found another word with the same first letter
            currentAlliterationArray.push(thisWord)
        }
        else {
            // next word is not alliterative
            if (currentAlliterationArray.length > 1) {
                alliterations.push(currentAlliterationArray.join(' '))
            }
            currentAlliterationArray = [ thisWord ]
            currentAlliterationLetter = thisWord[0].toLowerCase()
        }
    }
    // make sure to add the last alliteration to the array after we've finished iterating
    if (currentAlliterationArray.length > 1) {
        alliterations.push(currentAlliterationArray.join(' '))
    }

    return alliterations

}

console.log(findAlliteration(peterPiper))
console.log(findAlliteration(bugsBunny))