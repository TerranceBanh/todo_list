const cap1stLetter = (word) => {
  const stringSplit = word.split('')
  stringSplit[0] = stringSplit[0].toUpperCase()
  const stringJoin = stringSplit.join('')
  return stringJoin
}

export default cap1stLetter
