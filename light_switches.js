// https://www.reddit.com/r/dailyprogrammer/comments/46zm8m/20160222_challenge_255_easy_playing_with_light/

const simpleInput = `10
3 6
0 4
7 3
9 9`

const testData = `1000
616 293
344 942
27 524
716 291
860 284
74 928
970 594
832 772
343 301
194 882
948 912
533 654
242 792
408 34
162 249
852 693
526 365
869 303
7 992
200 487
961 885
678 828
441 152
394 453`

const switchLights = (input) => {

  // n = number of lines
  // m = number of lights

  // split up data (O(n))
  const lines = input.split('\n')
  const numOfLights = Number(lines[0]);
  const inputPairs = lines.slice(1)
  
  // Initialize array to have all lights off (O(m))
  const lightStates = Array(numOfLights).fill(false)

  // go through each line and turn lights on / off O(n * m)
  inputPairs.forEach(pair => {
    if (!pair) return
    let [num1, num2] = pair.split(' ')
    if (num1 > num2) [num1, num2] = [num2, num1]
    for (let i = num1; i <= num2; i++) {
      lightStates[i] = !lightStates[i]
    }
  })

  // count up number of lightbulbs that are still on O(m)
  return lightStates.reduce((numLightsOn, lightState) => lightState ? numLightsOn + 1 : numLightsOn, 0)
}

console.log(switchLights(simpleInput))