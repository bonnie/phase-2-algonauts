// challenge: https://www.reddit.com/r/dailyprogrammer/comments/56tbds/20161010_challenge_287_easy_kaprekars_routine/
// discussion recording: https://www.youtube.com/watch?v=9fLjk1XFejw&index=4&list=PLcSbxZVkmW_gSDpl8jLF3Jb1juUJs9Cxq
// 2017-10-31

const largestDigit = (str) => {
  const result = str.split('')
  result.sort((a, b) => b - a)
  return result[0]
}

const largestDigit3 = (str) => {
  const result = str.split('')
  return Math.max(...result)
}
