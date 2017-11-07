// https://www.reddit.com/r/dailyprogrammer/comments/338p28/20150420_challenge_211_easy_the_name_game/
// 2017-11-02

// cases to consider:
// 1. name starts with one consonant
// 2. name starts with vowel
// 3. name starts with more than one consonant

const rhymeBrittany4 = (name) => {
  let vowelStartName = name
  const vowels = ['a', 'e', 'i', 'o', 'u']
  while (!vowels.includes(vowelStartName[0].toLowerCase())) {
    vowelStartName = vowelStartName.slice(1)
  }
  console.log(`
    ${name} ${name} Bo${name[0] === 'B' ? '-' : ' B'}${vowelStartName}
    Banana Fana Fo ${name[0] === 'F' ? '' : 'F'}${vowelStartName}
    Fee Fie Mo ${name[0] === 'M' ? '' : 'M'}${vowelStartName}
    ${name}!
  `)
}

const rhymeCeleste = (name) => {
  const nameWithoutFirst = name.substring(1)
  const exceptions = ['a', 'e', 'i', 'o', 'u', 'b', 'f', 'm', 'y']
}
