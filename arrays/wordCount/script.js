
function numberOfWords(string){
  let count = 0
  for(let i = 0; i < string.length; i++){
    if(string[i] == " "){
      count++
    }
    
  }

  return(count +1);
}
console.log(numberOfWords("hello is the first!"));
