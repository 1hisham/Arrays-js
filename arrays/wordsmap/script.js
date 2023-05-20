
function wordToCheck(string){
  let object = {}
  let count = 1;
   for(let i = 0; i < string.length ; i++){
    let str = string[i]

    if(object.str == 1){
      object.strings == count++
    }else{

      object.strings = count
    }

    count = 1
  }
  return object
}

wordToCheck("hello")