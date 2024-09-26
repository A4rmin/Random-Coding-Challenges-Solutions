
## Add Two Numbers

### Problem Statement

Given two non-empty linked lists representing two non-negative integers, where the digits are stored in reverse order, return a linked list that represents their sum.  
Each node in the linked list contains a single digit, and no leading zeros are allowed except the number 0 itself.

### Example
```ts
Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.
```

### Constraints:
- The number of nodes in each linked list is in the range `[1, 100]`.
- Each digit is in the range `[0, 9]`.
- The input lists represent numbers without leading zeros.

## Approach

We can simulate the addition of the numbers as we would do by hand:
1. **Initialize a dummy node** to simplify the process of creating the result linked list.
2. **Traverse both linked lists** from head to tail, adding the values of the corresponding nodes. If one list is shorter, treat missing nodes as zero.
3. **Carry over values** when the sum of two digits is 10 or more.
4. **Continue iterating** through the linked lists and building the result list, ensuring to add any remaining carry after both lists are processed.

### Complexity Analysis

- **Time Complexity**: O(max(m, n)), where `m` and `n` are the lengths of the two linked lists. We traverse both lists once.
- **Space Complexity**: O(max(m, n)) because the output linked list will have at most max(m, n) + 1 nodes (one extra node for any remaining carry).
