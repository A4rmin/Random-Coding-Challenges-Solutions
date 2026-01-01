# 🏔️ Max Heap Implementation

## Overview
This module provides a Max Heap data structure implemented in JavaScript. A Max Heap is a complete binary tree where each parent node is greater than or equal to its child nodes. It is commonly used for priority queues and efficient retrieval of the maximum element.

## Files
- `maxHeap.js`: Contains the Max Heap class and its core methods (insert, extractMax, heapify, etc.).
- `test_maxHeap.js`: Includes test cases to verify the correctness of the Max Heap implementation.

## Features
- **Insert**: Add a new element to the heap while maintaining the max heap property.
- **Extract Max**: Remove and return the largest element from the heap.
- **Heapify**: Restore the heap property after insertion or extraction.
- **Peek**: View the maximum element without removing it.

## Usage
```js
const MaxHeap = require('./maxHeap');
const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
console.log(heap.extractMax()); // 20
```

## Testing
Run the tests in `test_maxHeap.js` to ensure all heap operations work as expected.

## Applications
- Priority queues
- Heap sort
- Scheduling algorithms
- Graph algorithms (e.g., Dijkstra's shortest path)

---
Feel free to extend the implementation or add more test cases!
