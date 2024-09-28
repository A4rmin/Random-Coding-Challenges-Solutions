class MyCircularDeque {
  private deque: number[];
  private front: number;
  private rear: number;
  private capacity: number;
  private size: number;

  constructor(k: number) {
    this.capacity = k;
    this.deque = new Array(k).fill(0);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.deque[this.front] = value;
    this.size++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.deque[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size--;
    return true;
  }

  getFront(): number {
    return this.isEmpty() ? -1 : this.deque[this.front];
  }

  getRear(): number {
    return this.isEmpty()
      ? -1
      : this.deque[(this.rear - 1 + this.capacity) % this.capacity];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }
}
