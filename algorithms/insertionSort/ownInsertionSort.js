function insertionSort(array) {
  let i = 1;
  while (i < array.length) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      const tempValue = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tempValue;
      j -= 1;
    }
    i += 1;
  }
  return array;
}
module.exports = insertionSort
