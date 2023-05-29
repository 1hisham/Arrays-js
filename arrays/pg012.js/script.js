let arrays = [8, 7, 6, 5, 1,-4, -5 , -6, -10];

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
function productMax(productCount, array) {
  console.log(array);
  array = sortedArray(array);
  if (productCount > array.length) {
    return false;
  }
  if (productCount == array.length) {
    return "totalsum";
  }
  let product = 1;
  let i = 0;
  let count = Math.floor(productCount / 2);
  if (productCount % 2 == 1) {
    i = 1;
    product = array[0];
  }
  let j = array.length - 1;
  console.log(count);
  let pos = 0;

  while (pos < count) {
    console.log(product);

    let productOne = Number(array[i]) * Number(array[i + 1]);
    let productTwo = Number(array[j]) * Number(array[j - 1]);
    if (productOne > productTwo) {
      product = product * productOne;
      i = i + 2;
    } else {
      product = product * productTwo;
      j = j - 2;
    }
    pos++;
  }
  console.log(product);
  return product;
}
console.log(productMax(4, arrays));
