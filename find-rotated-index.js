function findRotatedIndex(array, num) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid; // found the number and return the index
    }

    // Check if the left side is sorted
    if (array[start] <= array[mid]) {
      if (num >= array[start] && num < array[mid]) {
        end = mid - 1; // Index is in the left half
      } else {
        start = mid + 1; // Index is in the right half
      }
    } else {
      // Right side must be sorted
      if (num > array[mid] && num <= array[end]) {
        start = mid + 1;
      } else {
        end = mid - 1; // Index is in the left half
      }
    }
  }
  return -1; // If index was not found
}

// module.exports = findRotatedIndex;
