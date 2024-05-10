function countZeroes( arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === 1) {
      low = mid + 1;
    } else {
      // If mid is zero, check if it's the first zero
      if (mid === 0 || arr[mid -1] === 1) {
        return arr.length - mid;
      }
      high = mid - 1;
    }
  }
  return 0;
}

module.exports = countZeroes