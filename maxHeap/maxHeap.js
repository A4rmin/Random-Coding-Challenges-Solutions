// maxHeap.js

// numeric maxHeap
export class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChild(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getRightChild(parentIndex) {
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChild(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChild(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChild(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChild(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChild(index);
            if (
                this.hasRightChild(index) &&
                this.rightChild(index) > this.leftChild(index)
            ) {
                largerChildIndex = this.getRightChild(index);
            }
            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    printHeap() {
        let heap = `${this.heap[0]}`;
        for (let i = 1; i < this.heap.length; i++) {
            heap += `${this.heap[i]}`;
        }
        console.log(heap);
    }
}
