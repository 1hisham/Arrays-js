

function SumofSpacificNumber(array, numberSum){
let total = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] % numberSum == 0){
      total = array[i] + total
    }
  }
  return total
}
console.log(SumofSpacificNumber([1,2,3,4,5,6,7,8,9,9],2));
