import { MaxHeap } from "./maxHeap.js";
// Creating the Heap
var heap = new MaxHeap();

// Adding The Elements
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(100);
heap.add(40);

// Printing the Heap
heap.printHeap();

// Peeking And Removing Top Element
console.log(heap.peek());
console.log(heap.remove());

// Printing the Heap
// After Deletion.
heap.printHeap();
