function findFloor(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let floor = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      return arr[mid]; // Exact match found
    } else if (arr[mid] < x) {
      floor = arr[mid]; // Update floor since arr[mid] is less than x but closer to x
      low = mid + 1; // Move right to find a potentially closer value
    } else {
      high = mid - 1; // Move left since arr[mid] is greater than x
    }
  }
  return floor; // Return the last recorded floor value
}

// module.exports = findFloor