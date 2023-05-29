function wordToCheck(string) {
  let object = {};
  let count = 1;
  let i = 0;
  while (i < string.length) {
    let propr = string[i];
    if (object.hasOwnProperty(propr)) {
      count++;
      object[string[i]] = count;
      i++;
      count = 1;
      continue;
    }

    object[string[i]] = count;
    i++;
  }

  return object;
}
console.log(wordToCheck("hellowhreeiam"));
