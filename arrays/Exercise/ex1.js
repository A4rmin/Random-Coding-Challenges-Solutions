// ===================================================
// Array Reversal Toolkit | Educational Series
//  by a4rmin
// ===================================================

// Banner
function banner(title){
  console.log(`\n--- ${title} --- [by a4rmin]`);
}

/**
 * In-place reversal of an array using the built-in `.reverse()` method.
 * This function mutates the original array and returns the same reference.
 *
 * @param {Array<any>} arr - The array to reverse in-place.
 * @returns {Array<any>} The same array reference, now reversed.
 */

function inPlaceReverseArray(arr) {
  banner("inPlaceReverseArray");

  // The built-in `reverse()` method flips elements in-place.
  const result = arr.reverse();

  console.log("Reversed array (same reference):", arr);
  console.log("Returned value from .reverse():", result);
  return result;
}

// Example usage:
inPlaceReverseArray([0, 1, 2]);


/**
 * Clone-and-reverse strategy: creates a shallow copy, then reverses that copy.
 * The original array remains unchanged.
 *
 * @param {Array<any>} arr - The array to clone and reverse.
 * @returns {Array<any>} A new reversed array, leaving the input untouched.
 */

function cloneReverseArray(arr) {
  banner("cloneReverseArray")
  console.log("Input array:", arr);

  // 1) Clone the array using the spread operator (or `arr.slice()`)
  const clone = [...arr];
  console.log("Cloned copy before reversing:", clone);

  // 2) Reverse the cloned array in-place
  const reversedClone = clone.reverse();

  console.log("Original array after operation (unchanged):", arr);
  console.log("Cloned & reversed array:", reversedClone);
  return reversedClone;
}

// Example usage:
cloneReverseArray([0, 1, 2]);


/**
 * Manual two-pointer swapping to reverse an array in-place without using `.reverse()`.
 * Swaps elements from the outer edges moving toward the center.
 *
 * @param {Array<any>} arr - The array to reverse in-place.
 * @returns {Array<any>} The same array reference, now reversed.
 */
function inPlacePointerReverseArray(arr) {
  banner("inPlacePointerReverseArray");
  console.log("Original array:", arr);

  // Initialize two pointers
  let left = 0;                  // Start at first index
  let right = arr.length - 1;   // Start at last index
  let step = 1;

  // Continue swapping until pointers meet in the middle
  while (left < right) {
    console.log(`Step ${step}: swapping indices ${left} and ${right}`);
    console.log(`  Values before swap: ${arr[left]} <-> ${arr[right]}`);
    // Perform the swap
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    console.log("  Array after swap:", arr);

    // Move pointers inward
    left+= 1;
    right-= 1;
    step+= 1;
  }

  console.log("Final reversed array:", arr);
  return arr;
}

// Example usage:
inPlacePointerReverseArray([0, 1, 2, 3, 4]);