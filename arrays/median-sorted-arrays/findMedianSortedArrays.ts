/**
 * Finds the median of two sorted arrays.
 * This function uses a binary search algorithm to find the median in O(log(min(m, n))) time complexity.
 *
 * @param nums1 - The first sorted array.
 * @param nums2 - The second sorted array.
 * @returns The median of the two sorted arrays.
 * @throws Error If the input arrays are invalid.
 */
function findMedian(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        return findMedian(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0, right = m;
    const halflen = Math.floor((m + n + 1) / 2);

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = halflen - i;

        const nums1Left = (i === 0) ? Number.NEGATIVE_INFINITY : nums1[i - 1];
        const nums1Right = (i === m) ? Number.POSITIVE_INFINITY : nums1[i];
        const nums2Left = (j === 0) ? Number.NEGATIVE_INFINITY : nums2[j - 1];
        const nums2Right = (j === n) ? Number.POSITIVE_INFINITY : nums2[j];

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            if ((m + n) % 2 === 1) {
                return Math.max(nums1Left, nums2Left);
            }
            return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
        } else if (nums1Left > nums2Right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    throw new Error('Invalid input');
}

// Example test cases
console.log(findMedian([1, 3], [2]));  // Output: 2.0
console.log(findMedian([1, 2], [3, 4])); // Output: 2.5
console.log(findMedian([], [1, 2, 3])); // Output: 2.0
console.log(findMedian([1, 2, 3], [4, 5, 6])); // Output: 3.5
console.log(findMedian([0, 0], [0, 0])); // Output: 0.0
console.log(findMedian([1], [2, 3, 4])); // Output: 2.5
