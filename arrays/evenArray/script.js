const array = [1, 2, 3, 4, 5, 6];
const arrayWithEven = [];
let i = 0;
let j = 0;
while (i < array.length) {
  if (array[i] % 2 == 0) {
    arrayWithEven[j] = array[i];
    j++;
  }
  i++;
}
console.log(arrayWithEven);
