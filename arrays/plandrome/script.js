const givenString = "A man, a plan, a canal, Panama!";

function vailedItems(str) {
  str = str.toLowerCase();
  let i = 0;
  let count = 0;
  console.log(str);
  let arrayWithWords = [];
  while (i < str.length) {
    let ascci = str.charCodeAt(i);
    if (ascci < 122 && ascci > 96) {
      let words = String.fromCharCode(ascci);
      arrayWithWords[count] = words;
      count++;
    }
    i++;
  }
  return arrayWithWords;
}

function toCheckPalindrom(givenString) {
  let filterArray = vailedItems(givenString);
  let i = 0;
  let j = filterArray.length - 1;
  while (i < Math.floor(filterArray.length / 2)) {
    if (filterArray[i] !== filterArray[j]) {
      return false;
    }
    j--;
    i++;
  }
  return true;
}
console.log(toCheckPalindrom(givenString));

// toCheckPalindrom(givenString)
