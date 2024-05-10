function findRotationCount(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    //Check if middle index is greater than the last index
    if (arr[mid] > arr[high]) {
      // The pivot will be in the right half if the middle index is greater than last index
      low = mid + 1;
    } else {
      // Otherwise the pivot is in the left half
      high = mid;
    }
  }
  // When low equals high, the lowest index is found
  return low;
  
}

module.exports = findRotationCount