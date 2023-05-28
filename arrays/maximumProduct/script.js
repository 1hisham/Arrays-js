let arrays =  ["open", "source", "programming", "is", "fun"]


function sortedArray(array) {
  let i = 0;
  while (i < array.length) {
    let j = i + 1;
    while (j < array.length) {
      if (array[i].length > array[j].length) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      j++;
    }
    i++;
  }                            
  return array;
}
console.log(sortedArray(arrays));



// function productMax(productCount, array) {
//   console.log(array);
//   array = sortedArray(array);
  
//   let total = array[0]
//   let i = 1;
//   while (i < productCount) {
//       total = total * array[i];
//     i++;
//   }
//   return total;
// }

// console.log(productMax(3,arrays));
