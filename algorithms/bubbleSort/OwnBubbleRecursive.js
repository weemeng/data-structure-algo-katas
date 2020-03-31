function bubbleSort(array) {
  return _recursiveBubbleSort(array, array.length);
}

function _recursiveBubbleSort(array, lastIndex) {
  let didSort = false;
  for (let j = 1; j < lastIndex; j++) {
    if (array[j] < array[j - 1]) {
      const temparray = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temparray;
      didSort = true;
    }
  }
  if (!didSort) {
    return array;
  }
  return _recursiveBubbleSort(array, lastIndex - 1);
}

module.exports = bubbleSort;
