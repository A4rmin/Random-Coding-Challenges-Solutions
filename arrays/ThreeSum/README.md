
## Three Sum

### Problem Statement

Given an array of integers `nums`, find all unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.  
The solution must not contain duplicate triplets.

### Example
```ts
Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
```

### Constraints:
- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

## Approach

We can solve the problem using the **Two Pointers** technique after sorting the array. Here’s how:
1. **Sort the array**: This helps in avoiding duplicates and makes the problem easier to handle with two pointers.
2. **Fix one element and use two pointers**: For each element `nums[i]`, we use two pointers to find two other elements such that their sum equals `-nums[i]` (the complement).
3. **Skip duplicates**: If the element is the same as the previous one, we skip it to avoid duplicate triplets.


### Complexity Analysis

- **Time Complexity**: O(n²), where `n` is the length of the array. Sorting takes O(n log n) and finding the triplets takes O(n²).
- **Space Complexity**: O(n) for storing the result array and auxiliary space used during sorting.

