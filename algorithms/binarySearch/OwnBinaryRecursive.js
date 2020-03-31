function BinarySearch(data, id) {
  return _recursiveBS(data, id, 0, data.length - 1);
}

const _recursiveBS = (data, id, low, high) => {
  if (low > high) {
    return null;
  }
  const midpoint = Math.floor((low + high) / 2);
  if (id === data[midpoint].id) {
    return data[midpoint];
  } else if (id > data[midpoint].id) {
    return _recursiveBS(data, id, midpoint + 1, high);
  } else {
    return _recursiveBS(data, id, low, midpoint - 1);
  }
};

module.exports = BinarySearch;
