let arrays =  [6, 1, 0, -4 , -5, -6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ]


function sortedArray(array) {
  let i = 0;
  while (i < array.length) {
    let j = i + 1;
    while (j < array.length) {
      if (array[i] < array[j]) {
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

function productMax(productCount, array) {
  console.log(array);
  array = sortedArray(array);
  
  let total = array[0]
  let i = 1;
  while (i < productCount) {
      total = total * array[i];
    i++;
  }
  return total;
}

console.log(productMax(3,arrays));
