const array = [1, 2, 3, 5, 6]
let i = 0;
let value = 0
while (i <= array.length - 2) {
  let prvElement = array[i + 1] 
  if((prvElement - array[i]) !== 1){
   value = array[i] + 1
   break

  }
  i++;
}
// if(value == 0 ){
//    console.log("there is no missing");
// }else{
//    console.log(value);
// }


