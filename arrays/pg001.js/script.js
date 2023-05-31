function checkPrime(num = 0) {
  if (num == 0) {
    return "the given number is zero";
  }
  if (num == 1) {
    return "the given number is one";
  }
  if(num == 2){
    return "The given number is 2 and it's Prime"
  }

  const givenNumber = num;
  let i = 2;
  const checkingDistance = Math.ceil(Math.sqrt(givenNumber));
  while (i <= checkingDistance ) {
    if (givenNumber % i == 0 ) {
      return `The given Number: ${givenNumber} is Not Prime`;
    }
    i++;
  }
  return `The given Number: ${givenNumber} is Prime`;
}

console.log(checkPrime(11));
