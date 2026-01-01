// Step 1: Define a List Node class
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Step 2: Define the LinkedList class
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  printList() {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      console.log(`Node ${index}: data = ${current.data}`);
      current = current.next;
      index++;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

// Step 3: Create nodes
let node1 = new ListNode(2);
console.log("Created node1 with data:", node1.data);

let node2 = new ListNode(5);
console.log("Created node2 with data:", node2.data);

// Step 4: Link nodes
node1.next = node2;
console.log("Linked node1.next to node2");

// Step 5: Create linked list with node1 as head
let list = new LinkedList(node1);
console.log("Created linked list with node1 as head");

// Step 6: Print list to visualize the structure
console.log("Printing linked list:");
list.printList();
