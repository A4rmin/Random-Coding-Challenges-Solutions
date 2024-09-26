
# Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

### Example
```ts
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
```

### Constraints
- Each input will have exactly one solution.
- You may not use the same element twice.

## Approach

We use a hash map (or object in TypeScript) to store each number’s value and its index. As we iterate through the array:
1. We calculate the complement, which is `target - nums[i]`.
2. If the complement already exists in the hash map, we return the current index and the index of the complement.
3. If not, we store the current number and its index in the hash map and continue iterating.


## Complexity Analysis

- **Time Complexity**: O(n), where `n` is the length of the array. We only pass through the array once.
- **Space Complexity**: O(n), since we store elements in the hash map.
