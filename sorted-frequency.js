// Main function to find the frequency of a number in a sorted array
function sortedFrequency(array, number) {
  // Find the first occurrence of the number in the array
  let firstIdx = findFirst(array, number);

  // If the number is not found, return -1
  if (firstIdx === -1) return -1;

  // Find the last occurrence of the number in the array
  let lastIdx = findLast(array, number);

  // Calculate and return the count of the number
  return lastIdx - firstIdx + 1;
}

// Recursive function to find the first occurrence of the number
function findFirst(array, number, low = 0, high = array.length - 1) {
  // Base case: if the range is invalid, return -1
  if (low > high) return -1;

  // Calculate the middle index of the current range
  let mid = Math.floor((low + high) / 2);

  // Check if the middle element is hte first occurrence
  if ((mid === 0 || number > array[mid - 1]) && array[mid] === number) {
    return mid;
  }
  // Recurse on the right half if the middle element is less than the number
  return number > array[mid]
    ? findFirst(array, number, mid + 1, high)
    : findFirst(array, number, low, mid - 1);
}

// Recursive function to find the last occurrence of the number
function findLast(array, number, low = 0, high = array.length - 1) {
  // Base case: if the range is invalid, return -1
  if (low > high) return -1;

  // Calculate the middle index of the current range
  let mid = Math.floor((low + high) / 2);

  // Check if the middle element is the last occurrence
  if (
    (mid === array.length - 1 || number < array[mid + 1]) &&
    array[mid] === number
  ) {
    return mid;
  }
  // Recurse on the right half if the middle element is less than the target
  return number < array[mid]
    ? findLast(array, number, low, mid - 1)
    : findLast(array, number, mid + 1, high);
}

module.exports = sortedFrequency;
