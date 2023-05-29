// let givenWord = "silent"

function toCheck(givenWord, checkWord) {
  if (givenWord.length !== checkWord.length) {
    return false;
  }
  let i = 0;
  let state = false;
  while (i < givenWord.length) {
    let j = 0;
    while (j < checkWord.length) {
      if (givenWord[i] == checkWord[j]) {
        state = true;
        break;
      }

      j++;
    }
    if (!state) {
      return false;
    }
    state = false;
    i++;
  }
  return true;
}

console.log(toCheck("doops", "soopd"));
