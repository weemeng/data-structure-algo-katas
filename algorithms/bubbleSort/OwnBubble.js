function bubbleSort(data) {
  for (let i = 0; i < data.length; i++) {
    let count = 0;
    for (let j = 1; j < data.length - i; j++) {
      if (data[j] < data[j - 1]) {
        const tempData = data[j - 1];
        data[j - 1] = data[j];
        data[j] = tempData;
        count += 1;
      }
    }
    if (count === 0) {
      break;
    }
  }
  return data;
}
module.exports = bubbleSort;
