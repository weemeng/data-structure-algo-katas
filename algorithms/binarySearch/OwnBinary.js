function BinarySearch(data, id) {
  let firstIndex = 0;
  let lastIndex = data.length - 1;
  let midpoint = 0;

  while (firstIndex <= lastIndex) {
    midpoint = Math.floor((firstIndex + lastIndex) / 2);
    if (id === data[midpoint].id) {
      return data[midpoint];
    } else if (id > data[midpoint].id) {
      firstIndex = midpoint + 1;
    } else {
      lastIndex = midpoint - 1;
    }
  }
  return null;
}

module.exports = BinarySearch;
