/**
 * Finds the median of two sorted arrays.
 * This function uses a binary search algorithm to find the median in O(log(min(m, n))) time complexity,
 * where m and n are the lengths of the input arrays.
 *
 * @param {number[]} nums1 - The first sorted array.
 * @param {number[]} nums2 - The second sorted array.
 * @returns {number} The median of the two sorted arrays.
 * @throws {Error} If the input arrays are invalid.
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //binary search solution

    //ensure nums1 is the smallest array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left= 0;
    let right =m;
    let halflen = Math.floor((m+n+1)/2);
    
    while(left <= right) {
        let i = Math.floor((left+right)/2);
        let j = halflen - i;

        let nums1left = (i === 0) ? Number.NEGATIVE_INFINITY : nums1[i-1];
        let nums1right = (i === m) ? Number.POSITIVE_INFINITY : nums1[i];
        let nums2left = (j === 0) ? Number.NEGATIVE_INFINITY : nums2[j-1];
        let nums2right = (j === n) ? Number.POSITIVE_INFINITY: nums2[j];

        if (nums1left <= nums2right && nums2left <= nums1right) {
            if ((m+n)%2 === 1) {
                return Math.max(nums1left, nums2left);
            }
            return (Math.max(nums1left, nums2left) + Math.min(nums1right, nums2right))/2;
        } else if (nums1left > nums2right) {
            right = i-1;
        } else {
            left = i+1;
        }
    }
    throw new Error('Invalid input');
};

// Example test cases
console.log(findMedianSortedArrays([1,3], [2]));  // Output: 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // Output: 2.5

console.log(findMedianSortedArrays([], [1, 2, 3]));  // Output: 2.0
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6])); // Output: 3.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([1], [2, 3, 4])); // Output: 2.5