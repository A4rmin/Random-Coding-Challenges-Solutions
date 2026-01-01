// Sliding Window technique [A4RMIN]
// todo : Return all subarrays with the max sum

/**
 * Calculates max or min sum of any subarray of size k using sliding window
 * @param {number[]} arr - input array
 * @param {number} k - window size
 * @param {(a: number, b: number) => boolean} comparator - function to compare current and best
 * @param {number} initialVal - initial value (Infinity or -Infinity)
 * @param {boolean} debug - optional logging
 * @returns {number|null} - max/min sum
 */

function slidingWindowReducer(arr, k, comparator,initVal, debug = false){
  if (!Array.isArray(arr) || arr.length === 0 || k <= 0 || k > arr.length){
    if (debug) console.log("INVALID INPUT");
    return null;
  }

  let result = initVal;
  let currentSum = 0;

  for ( let i = 0; i < arr.length; i++){ //Main Loop — iterate through the array
    currentSum += arr[i];
    if (debug) console.log(`add arr[${i}] = ${arr[i]}, currentSum = ${currentSum}`);
    if (i >= k ){ // Shrink the window if needed
      currentSum -= arr[i - k];
      if (debug) console.log(`➖ Remove arr[${i - k}] = ${arr[i - k]} → currentSum = ${currentSum}`);
    }
    if (i >= k - 1  && comparator(currentSum, result)){ // Update the best result
      result = currentSum;
      if (debug) console.log(`✅ New best sum: ${result}`);
    }
  }
  if (debug) console.log(`🎯 Final Result: ${result}`);
  return result;
}

const maxSubarraySum = (arr, k, debug = false) =>
  slidingWindowReducer(arr, k, (a,b) => a > b, -Infinity, debug);

const minSubarraySum = (arr, k, debug = false) =>
  slidingWindowReducer(arr, k, (a,b) => a < b, Infinity, debug);

const sumCloseToTarget = (arr, k, target, debug = false) =>
  slidingWindowReducer(arr, k, (a, b) => Math.abs(a - target) < Math.abs(b - target), Infinity, debug);
// console.log("Max:", maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4, debug = true));     // 39
// console.log("Min:", minSubarraySum([5, 2, -1, 0, 3], 3, debug = true));                  // 1
// console.log("Closest to 7:", sumCloseToTarget([1, 2, 3, 4, 5, 6], 2, 7, debug = true));  // 7



// TEST

const approxEqual = (a, b, epsilon = 1e-10) => Math.abs(a - b) < epsilon;
function runAllSlidingWindowTests() {
const assertEqual = (actual, expected, label) => {
  const isEqual = (typeof actual === "number" && typeof expected === "number")
    ? approxEqual(actual, expected)
    : actual === expected;

  if (!isEqual) {
    console.error(`❌ FAIL: ${label} → Expected ${expected}, got ${actual}`);
  } else {
    console.log(`✅ PASS: ${label}`);
  }
};

  // Basic correct behavior
  assertEqual(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39, "Max normal case");
  assertEqual(minSubarraySum([5, 2, -1, 0, 3], 3), 1, "Min normal case");
  assertEqual(sumCloseToTarget([1, 2, 3, 4, 5, 6], 2, 7), 7, "Closest to target");

  // Edge: k = 1
  assertEqual(maxSubarraySum([2, 4, 6], 1), 6, "k=1 max");
  assertEqual(minSubarraySum([2, 4, 6], 1), 2, "k=1 min");

  // Edge: k = arr.length
  assertEqual(maxSubarraySum([1, 2, 3], 3), 6, "k = array.length max");
  assertEqual(minSubarraySum([1, 2, 3], 3), 6, "k = array.length min");

  // Invalid inputs
  assertEqual(maxSubarraySum([], 3), null, "Empty array");
  assertEqual(maxSubarraySum([1, 2], 0), null, "k = 0");
  assertEqual(maxSubarraySum([1, 2], -1), null, "Negative k");
  assertEqual(maxSubarraySum([1, 2], 5), null, "k > array length");
  assertEqual(maxSubarraySum("notArray", 2), null, "Not an array");

  // All values same
  assertEqual(maxSubarraySum([3, 3, 3, 3], 2), 6, "All same values max");
  assertEqual(minSubarraySum([3, 3, 3, 3], 2), 6, "All same values min");

  // Negative numbers
  assertEqual(maxSubarraySum([-5, -2, -1, -3], 2), -3, "Negative max");
  assertEqual(minSubarraySum([-5, -2, -1, -3], 2), -7, "Negative min");

  // Mixed signs
  assertEqual(maxSubarraySum([4, -1, 2, 1, -5, 4], 2), 3, "Mixed signs max");
  assertEqual(minSubarraySum([4, -1, 2, 1, -5, 4], 2), -4, "Mixed signs min");

  // Tie-breaker: same closest diff
  assertEqual(sumCloseToTarget([1, 4, 9], 1, 5), 4, "Tie closest to target chooses first");

  // Floating points
  assertEqual(maxSubarraySum([0.1, 0.2, 0.3, 0.4], 2), 0.7, "Floating point max");
  assertEqual(minSubarraySum([0.1, 0.2, 0.3, 0.4], 2), 0.3, "Floating point min");

  // Large array stress test
  const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i % 10);
  console.time("Large test max");
  const largeResult = maxSubarraySum(largeArray, 1000);
  console.timeEnd("Large test max");
  console.log("Large max result:", largeResult);
}

runAllSlidingWindowTests();